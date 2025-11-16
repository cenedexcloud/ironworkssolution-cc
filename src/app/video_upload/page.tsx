"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Upload, CheckCircle, XCircle, Video, Loader2, List, Trash2, AlertCircle } from "lucide-react"

const CHUNK_SIZE = 500 * 1024 // 500KB chunks (stays under 1MB limit)
const MAX_FILE_SIZE = 100 * 1024 * 1024 // 100MB max
const DEBUG = true // Enable debug logging

// Debug logger
const debugLog = (message: string, data?: unknown) => {
  if (DEBUG) {
    console.log(`[VIDEO UPLOAD DEBUG] ${message}`, data || '')
  }
}

interface VideoMetadata {
  id: string
  fileName: string
  originalName: string
  title: string
  uploadDate: string
  size: number
  url: string
}

export default function VideoUploadPage() {
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [status, setStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')
  const [videoTitle, setVideoTitle] = useState('')
  const [uploadedVideos, setUploadedVideos] = useState<VideoMetadata[]>([])
  const [showVideos, setShowVideos] = useState(false)
  const [debugInfo, setDebugInfo] = useState<string[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    debugLog('Component mounted')
  }, [])

  useEffect(() => {
    if (showVideos) {
      debugLog('Fetching videos list')
      fetchVideos()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showVideos])

  const addDebugInfo = (info: string) => {
    setDebugInfo(prev => [...prev, `${new Date().toLocaleTimeString()}: ${info}`])
    debugLog(info)
  }

  const fetchVideos = async () => {
    try {
      debugLog('Calling /api/videos')
      const response = await fetch('/api/videos')
      debugLog('Videos API response status:', response.status)

      const data = await response.json()
      debugLog('Videos data received:', data)

      setUploadedVideos(data.videos || [])
      addDebugInfo(`Fetched ${data.videos?.length || 0} videos`)
    } catch (error) {
      console.error('Failed to fetch videos:', error)
      addDebugInfo(`Error fetching videos: ${error}`)
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    debugLog('File selection triggered')
    const selectedFile = e.target.files?.[0]
    if (!selectedFile) {
      debugLog('No file selected')
      return
    }

    debugLog('File selected:', {
      name: selectedFile.name,
      size: selectedFile.size,
      type: selectedFile.type
    })

    // Validate file type
    if (!selectedFile.type.startsWith('video/')) {
      const errorMsg = 'Please select a valid video file (MP4, MOV, AVI, etc.)'
      debugLog('Invalid file type:', selectedFile.type)
      setMessage(errorMsg)
      setStatus('error')
      addDebugInfo(`File rejected: ${selectedFile.type}`)
      return
    }

    // Validate file size
    if (selectedFile.size > MAX_FILE_SIZE) {
      const errorMsg = `File too large. Maximum size is ${MAX_FILE_SIZE / (1024 * 1024)}MB`
      debugLog('File too large:', selectedFile.size)
      setMessage(errorMsg)
      setStatus('error')
      addDebugInfo(`File too large: ${(selectedFile.size / (1024 * 1024)).toFixed(2)}MB`)
      return
    }

    setFile(selectedFile)
    setStatus('idle')
    setMessage('')
    setProgress(0)
    addDebugInfo(`File ready: ${selectedFile.name} (${(selectedFile.size / (1024 * 1024)).toFixed(2)}MB)`)
  }

  const uploadVideo = async () => {
    if (!file) {
      debugLog('Upload attempted with no file')
      return
    }

    debugLog('Starting upload process')
    setUploading(true)
    setStatus('uploading')
    setProgress(0)
    setMessage('Preparing upload...')
    setDebugInfo([]) // Clear previous debug info

    try {
      const totalChunks = Math.ceil(file.size / CHUNK_SIZE)

      // Generate unique ID once for this upload session
      const uploadId = `${Date.now()}_${Math.random().toString(36).substring(7)}`
      debugLog('Upload details:', {
        uploadId,
        fileName: file.name,
        fileSize: file.size,
        chunkSize: CHUNK_SIZE,
        totalChunks: totalChunks
      })
      addDebugInfo(`Upload started: ${totalChunks} chunks (ID: ${uploadId})`)

      for (let chunkIndex = 0; chunkIndex < totalChunks; chunkIndex++) {
        const start = chunkIndex * CHUNK_SIZE
        const end = Math.min(start + CHUNK_SIZE, file.size)
        const chunk = file.slice(start, end)

        debugLog(`Uploading chunk ${chunkIndex + 1}/${totalChunks}`, {
          start,
          end,
          chunkSize: chunk.size
        })

        const formData = new FormData()
        formData.append('chunk', chunk)
        formData.append('chunkIndex', chunkIndex.toString())
        formData.append('totalChunks', totalChunks.toString())
        formData.append('fileName', file.name)
        formData.append('fileSize', file.size.toString())
        formData.append('videoTitle', videoTitle || file.name)
        formData.append('uploadId', uploadId) // Send same uploadId for all chunks

        debugLog('FormData prepared, sending request...')

        const response = await fetch('/api/upload-chunk', {
          method: 'POST',
          body: formData,
        })

        debugLog('Chunk upload response:', {
          status: response.status,
          ok: response.ok
        })

        if (!response.ok) {
          const errorData = await response.json()
          debugLog('Upload failed:', errorData)
          throw new Error(errorData.error || `Upload failed with status ${response.status}`)
        }

        const data = await response.json()
        debugLog('Chunk upload success:', data)

        // Update progress
        const currentProgress = ((chunkIndex + 1) / totalChunks) * 100
        setProgress(currentProgress)
        setMessage(`Uploading... ${Math.round(currentProgress)}%`)
        addDebugInfo(`Chunk ${chunkIndex + 1}/${totalChunks} uploaded (${Math.round(currentProgress)}%)`)

        // If last chunk, upload is complete
        if (chunkIndex === totalChunks - 1) {
          debugLog('Upload complete!', data)
          setStatus('success')
          setMessage(`✓ ${file.name} uploaded successfully!`)
          addDebugInfo('Upload completed successfully!')

          // Reset form
          setFile(null)
          setVideoTitle('')
          if (fileInputRef.current) {
            fileInputRef.current.value = ''
          }

          // Refresh video list if showing
          if (showVideos) {
            debugLog('Refreshing video list...')
            setTimeout(() => fetchVideos(), 500)
          }
        }
      }

    } catch (error) {
      console.error('Upload error:', error)
      debugLog('Upload error caught:', error)
      setStatus('error')
      const errorMessage = error instanceof Error ? error.message : 'Upload failed. Please try again.'
      setMessage(errorMessage)
      setProgress(0)
      addDebugInfo(`Upload failed: ${errorMessage}`)
    } finally {
      setUploading(false)
      debugLog('Upload process finished')
    }
  }

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return `${bytes} B`
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
  }

  const formatDate = (dateString: string): string => {
    try {
      const date = new Date(dateString)
      return date.toLocaleDateString() + ' ' + date.toLocaleTimeString()
    } catch (e) {
      return dateString
    }
  }

  const deleteVideo = async (videoId: string, fileName: string, title: string) => {
    if (!confirm(`Are you sure you want to delete "${title}"?`)) {
      return
    }

    try {
      debugLog('Deleting video:', { videoId, fileName })
      addDebugInfo(`Deleting video: ${title}`)

      const response = await fetch(`/api/delete-video?id=${videoId}&fileName=${fileName}`, {
        method: 'DELETE',
      })

      const data = await response.json()

      if (response.ok) {
        debugLog('Video deleted successfully:', data)
        addDebugInfo(`✓ Video deleted: ${title}`)
        setMessage('Video deleted successfully!')
        setStatus('success')

        // Refresh video list
        fetchVideos()

        // Clear message after 3 seconds
        setTimeout(() => {
          setMessage('')
          setStatus('idle')
        }, 3000)
      } else {
        throw new Error(data.error || 'Delete failed')
      }
    } catch (error) {
      console.error('Delete error:', error)
      debugLog('Delete error:', error)
      addDebugInfo(`❌ Delete failed: ${error}`)
      setMessage(error instanceof Error ? error.message : 'Failed to delete video')
      setStatus('error')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] py-12 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-2">Admin Video Upload</h1>
          <p className="text-gray-400">Upload large video files with 500KB chunked upload</p>
          <p className="text-gray-500 text-sm mt-2">Max file size: {MAX_FILE_SIZE / (1024 * 1024)}MB</p>
        </div>

        <Card className="p-8 bg-[#2a2a2a] border-[#3c3c3c]">
          {/* Video Title Input */}
          <div className="mb-6">
            <Label htmlFor="videoTitle" className="text-white mb-2">
              Video Title (Optional)
            </Label>
            <Input
              id="videoTitle"
              type="text"
              placeholder="Enter video title..."
              value={videoTitle}
              onChange={(e) => setVideoTitle(e.target.value)}
              className="bg-[#1a1a1a] border-[#3c3c3c] text-white placeholder:text-gray-500"
              disabled={uploading}
            />
          </div>

          {/* File Upload Area */}
          <div className="mb-6">
            <Label className="text-white mb-2">Select Video File</Label>
            <div className="mt-2">
              <input
                ref={fileInputRef}
                type="file"
                accept="video/*"
                onChange={handleFileSelect}
                className="hidden"
                id="fileInput"
                disabled={uploading}
              />
              <label
                htmlFor="fileInput"
                className={`flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer transition-all ${
                  file
                    ? 'border-[#C41E3A] bg-[#C41E3A]/5'
                    : 'border-[#3c3c3c] bg-[#1a1a1a] hover:bg-[#1a1a1a]/50 hover:border-[#C41E3A]/50'
                } ${uploading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {file ? (
                  <div className="flex flex-col items-center">
                    <Video className="w-16 h-16 text-[#C41E3A] mb-4" />
                    <p className="text-white font-semibold mb-1">{file.name}</p>
                    <p className="text-gray-400 text-sm">{formatFileSize(file.size)}</p>
                    <p className="text-gray-500 text-xs mt-2">
                      {Math.ceil(file.size / CHUNK_SIZE)} chunks • {CHUNK_SIZE / 1024}KB per chunk
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <Upload className="w-16 h-16 text-gray-500 mb-4" />
                    <p className="text-white font-semibold mb-1">
                      Click to select video file
                    </p>
                    <p className="text-gray-400 text-sm">
                      MP4, MOV, AVI, WebM, MKV
                    </p>
                    <p className="text-gray-500 text-xs mt-2">
                      Max {MAX_FILE_SIZE / (1024 * 1024)}MB
                    </p>
                  </div>
                )}
              </label>
            </div>
          </div>

          {/* Progress Bar */}
          {status === 'uploading' && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white text-sm font-medium">Upload Progress</span>
                <span className="text-[#C41E3A] text-sm font-bold">{Math.round(progress)}%</span>
              </div>
              <div className="w-full bg-[#1a1a1a] rounded-full h-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-[#C41E3A] to-[#E03A4F] h-full transition-all duration-300 rounded-full relative overflow-hidden"
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                </div>
              </div>
            </div>
          )}

          {/* Status Message */}
          {message && (
            <div
              className={`flex items-center gap-2 p-4 rounded-lg mb-6 ${
                status === 'success'
                  ? 'bg-green-500/10 border border-green-500/30'
                  : status === 'error'
                  ? 'bg-red-500/10 border border-red-500/30'
                  : 'bg-blue-500/10 border border-blue-500/30'
              }`}
            >
              {status === 'success' && <CheckCircle className="w-5 h-5 text-green-500" />}
              {status === 'error' && <AlertCircle className="w-5 h-5 text-red-500" />}
              {status === 'uploading' && <Loader2 className="w-5 h-5 text-blue-500 animate-spin" />}
              <p
                className={`text-sm ${
                  status === 'success'
                    ? 'text-green-400'
                    : status === 'error'
                    ? 'text-red-400'
                    : 'text-blue-400'
                }`}
              >
                {message}
              </p>
            </div>
          )}

          {/* Debug Info */}
          {DEBUG && debugInfo.length > 0 && (
            <div className="mb-6 p-4 bg-black/50 rounded-lg border border-yellow-500/30">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="w-4 h-4 text-yellow-500" />
                <span className="text-yellow-500 text-sm font-semibold">Debug Log</span>
              </div>
              <div className="max-h-40 overflow-y-auto space-y-1">
                {debugInfo.map((info, idx) => (
                  <p key={idx} className="text-xs font-mono text-gray-300">{info}</p>
                ))}
              </div>
            </div>
          )}

          {/* Upload Button */}
          <Button
            onClick={uploadVideo}
            disabled={!file || uploading}
            className="w-full bg-[#C41E3A] hover:bg-[#A71930] text-white h-12 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {uploading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin mr-2" />
                Uploading... {Math.round(progress)}%
              </>
            ) : (
              <>
                <Upload className="w-5 h-5 mr-2" />
                Upload Video
              </>
            )}
          </Button>

          {/* Info */}
          <div className="mt-6 p-4 bg-[#1a1a1a] rounded-lg border border-[#3c3c3c]">
            <p className="text-gray-400 text-sm">
              <strong className="text-white">How it works:</strong> Files are split into 500KB chunks
              and uploaded sequentially. This bypasses 1MB upload limits and works reliably for large files
              up to {MAX_FILE_SIZE / (1024 * 1024)}MB.
            </p>
          </div>
        </Card>

        {/* Toggle Video List */}
        <div className="mt-6 text-center">
          <Button
            onClick={() => setShowVideos(!showVideos)}
            variant="outline"
            className="border-[#3c3c3c] text-white hover:bg-[#2a2a2a] hover:border-[#C41E3A]"
          >
            <List className="w-4 h-4 mr-2" />
            {showVideos ? 'Hide' : 'Show'} Uploaded Videos
          </Button>
        </div>

        {/* Uploaded Videos List */}
        {showVideos && (
          <Card className="p-6 bg-[#2a2a2a] border-[#3c3c3c] mt-6">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Video className="w-6 h-6 text-[#C41E3A]" />
              Uploaded Videos ({uploadedVideos.length})
            </h2>
            {uploadedVideos.length === 0 ? (
              <p className="text-gray-400 text-center py-8">No videos uploaded yet</p>
            ) : (
              <div className="space-y-4">
                {uploadedVideos.map((video, index) => (
                  <div
                    key={video.id || index}
                    className="flex items-center justify-between p-4 bg-[#1a1a1a] rounded-lg border border-[#3c3c3c] hover:border-[#C41E3A]/50 transition-colors"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <Video className="w-10 h-10 text-[#C41E3A] flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <h3 className="text-white font-semibold truncate">{video.title}</h3>
                        <p className="text-gray-400 text-sm truncate">{video.originalName}</p>
                        <div className="flex gap-4 mt-1 text-xs text-gray-500">
                          <span>{formatFileSize(video.size)}</span>
                          <span>{formatDate(video.uploadDate)}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-[#3c3c3c] text-white hover:bg-[#2a2a2a] hover:border-[#C41E3A]"
                        onClick={() => {
                          debugLog('Opening video:', video.url)
                          window.open(video.url, '_blank')
                        }}
                      >
                        View
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-red-500/30 text-red-400 hover:bg-red-500/10 hover:border-red-500"
                        onClick={() => deleteVideo(video.id, video.fileName, video.title)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Card>
        )}
      </div>
    </div>
  )
}
