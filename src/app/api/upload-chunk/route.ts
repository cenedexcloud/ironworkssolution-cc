import { NextRequest, NextResponse } from 'next/server'
import { writeFile, appendFile, mkdir, rename, unlink, readdir } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'
import { addVideoToConfig, VideoMetadata } from '@/lib/video-config'

const VIDEOS_DIR = path.join(process.cwd(), 'public', 'videos')
const TEMP_DIR = path.join(process.cwd(), 'public', 'videos', 'temp')
const DEBUG = true // Enable debug logging

// Debug logger
const debugLog = (message: string, data?: unknown) => {
  if (DEBUG) {
    console.log(`[API UPLOAD-CHUNK DEBUG] ${message}`, data || '')
  }
}

// Ensure directories exist
async function ensureDirectories() {
  debugLog('Checking directories...')
  if (!existsSync(VIDEOS_DIR)) {
    debugLog('Creating VIDEOS_DIR:', VIDEOS_DIR)
    await mkdir(VIDEOS_DIR, { recursive: true })
  }
  if (!existsSync(TEMP_DIR)) {
    debugLog('Creating TEMP_DIR:', TEMP_DIR)
    await mkdir(TEMP_DIR, { recursive: true })
  }
  debugLog('Directories ready')
}

export async function POST(request: NextRequest) {
  try {
    debugLog('=== UPLOAD CHUNK REQUEST RECEIVED ===')
    await ensureDirectories()

    const formData = await request.formData()
    debugLog('FormData received')

    const chunk = formData.get('chunk') as Blob
    const chunkIndex = parseInt(formData.get('chunkIndex') as string)
    const totalChunks = parseInt(formData.get('totalChunks') as string)
    const fileName = formData.get('fileName') as string
    const fileSize = parseInt(formData.get('fileSize') as string)
    const videoTitle = formData.get('videoTitle') as string
    const uploadId = formData.get('uploadId') as string // Get uploadId from client

    debugLog('Request parameters:', {
      uploadId,
      chunkIndex,
      totalChunks,
      fileName,
      fileSize,
      videoTitle,
      chunkSize: chunk?.size
    })

    // Validation
    if (!chunk || isNaN(chunkIndex) || isNaN(totalChunks) || !fileName || isNaN(fileSize) || !uploadId) {
      debugLog('Validation failed - missing fields')
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Use uploadId from client and sanitize filename
    const sanitizedFileName = fileName.replace(/[^a-zA-Z0-9.-]/g, '_')
    const tempFileName = `${uploadId}_${sanitizedFileName}`
    const tempFilePath = path.join(TEMP_DIR, tempFileName)
    const finalFileName = `${uploadId}_${sanitizedFileName}`
    const finalFilePath = path.join(VIDEOS_DIR, finalFileName)

    debugLog('File paths:', {
      uploadId,
      tempFileName,
      tempFilePath,
      finalFileName,
      finalFilePath
    })

    // Convert chunk to buffer
    const buffer = Buffer.from(await chunk.arrayBuffer())
    debugLog('Chunk converted to buffer, size:', buffer.length)

    // First chunk: create new file
    if (chunkIndex === 0) {
      debugLog('FIRST CHUNK - Creating new file')
      try {
        await writeFile(tempFilePath, buffer)
        debugLog('First chunk written successfully')
      } catch (writeError) {
        debugLog('ERROR writing first chunk:', writeError)
        return NextResponse.json(
          { error: `Failed to write first chunk: ${writeError instanceof Error ? writeError.message : 'Unknown error'}` },
          { status: 500 }
        )
      }
    } else {
      // Subsequent chunks: append to existing file
      debugLog(`CHUNK ${chunkIndex + 1} - Appending to file`)
      debugLog('Looking for temp file at:', tempFilePath)
      debugLog('Temp file exists?', existsSync(tempFilePath))

      if (!existsSync(tempFilePath)) {
        debugLog('ERROR: Temp file not found:', tempFilePath)
        debugLog('Files in temp directory:', await readdir(TEMP_DIR))
        return NextResponse.json(
          { error: 'Upload session not found. Please restart upload.' },
          { status: 400 }
        )
      }

      try {
        await appendFile(tempFilePath, buffer)
        debugLog('Chunk appended successfully')
      } catch (appendError) {
        debugLog('ERROR appending chunk:', appendError)
        return NextResponse.json(
          { error: `Failed to append chunk: ${appendError instanceof Error ? appendError.message : 'Unknown error'}` },
          { status: 500 }
        )
      }
    }

    // If this is the last chunk, finalize the upload
    if (chunkIndex === totalChunks - 1) {
      debugLog('LAST CHUNK - Finalizing upload')

      // Move from temp to final location
      debugLog('Moving file from temp to final location...')
      await rename(tempFilePath, finalFilePath)
      debugLog('File moved successfully')

      // Create video metadata
      const metadata: VideoMetadata = {
        id: uploadId,
        fileName: finalFileName,
        originalName: fileName,
        title: videoTitle || fileName.replace(/\.[^/.]+$/, ''), // Remove extension if no title
        uploadDate: new Date().toISOString(),
        size: fileSize,
        url: `/videos/${finalFileName}`
      }

      debugLog('Metadata created:', metadata)

      // Add to video config
      debugLog('Adding to video config...')
      await addVideoToConfig(metadata)
      debugLog('Video config updated')

      debugLog('=== UPLOAD COMPLETE ===')
      return NextResponse.json({
        success: true,
        message: 'Upload complete',
        data: metadata
      })
    }

    // Return success for chunk upload
    const progress = Math.round(((chunkIndex + 1) / totalChunks) * 100)
    debugLog(`Chunk ${chunkIndex + 1}/${totalChunks} uploaded (${progress}%)`)

    return NextResponse.json({
      success: true,
      message: `Chunk ${chunkIndex + 1}/${totalChunks} uploaded`,
      progress: progress
    })

  } catch (error) {
    console.error('Upload error:', error)
    debugLog('ERROR CAUGHT:', error)

    return NextResponse.json(
      {
        error: 'Upload failed',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}

// Optional: Add cleanup endpoint for abandoned uploads
export async function DELETE(request: NextRequest) {
  try {
    debugLog('=== DELETE REQUEST RECEIVED ===')
    const { searchParams } = new URL(request.url)
    const fileName = searchParams.get('fileName')

    debugLog('Delete request for file:', fileName)

    if (!fileName) {
      return NextResponse.json({ error: 'fileName required' }, { status: 400 })
    }

    const tempFilePath = path.join(TEMP_DIR, fileName)
    debugLog('Temp file path:', tempFilePath)

    if (existsSync(tempFilePath)) {
      await unlink(tempFilePath)
      debugLog('Temp file deleted successfully')
      return NextResponse.json({ success: true, message: 'Temp file deleted' })
    }

    debugLog('Temp file not found')
    return NextResponse.json({ success: true, message: 'File not found' })
  } catch (error) {
    console.error('Delete error:', error)
    debugLog('Delete error:', error)
    return NextResponse.json({ error: 'Delete failed' }, { status: 500 })
  }
}
