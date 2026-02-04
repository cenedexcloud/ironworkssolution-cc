import { NextRequest, NextResponse } from 'next/server'
import { unlink } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'
import { removeVideoFromConfig } from '@/lib/video-config'

const VIDEOS_DIR = path.join(process.cwd(), 'public', 'videos')

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const videoId = searchParams.get('id')
    const fileName = searchParams.get('fileName')

    console.log('[DELETE VIDEO] Request received:', { videoId, fileName })

    if (!videoId || !fileName) {
      return NextResponse.json(
        { error: 'Missing videoId or fileName' },
        { status: 400 }
      )
    }

    const filePath = path.join(VIDEOS_DIR, fileName)
    console.log('[DELETE VIDEO] File path:', filePath)
    console.log('[DELETE VIDEO] File exists?', existsSync(filePath))

    // Delete the video file
    if (existsSync(filePath)) {
      await unlink(filePath)
      console.log('[DELETE VIDEO] ✓ File deleted')
    } else {
      console.log('[DELETE VIDEO] ⚠️ File not found, continuing...')
    }

    // Remove from config
    await removeVideoFromConfig(videoId)
    console.log('[DELETE VIDEO] ✓ Removed from config')

    return NextResponse.json({
      success: true,
      message: 'Video deleted successfully'
    })

  } catch (error) {
    console.error('[DELETE VIDEO] Error:', error)
    return NextResponse.json(
      { error: 'Failed to delete video', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
