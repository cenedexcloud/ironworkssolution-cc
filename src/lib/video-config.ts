import { writeFile, readFile, mkdir } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'

const CONFIG_PATH = path.join(process.cwd(), 'public', 'videos', 'video-config.json')

export interface VideoMetadata {
  id: string
  fileName: string
  originalName: string
  title: string
  uploadDate: string
  size: number
  url: string
  duration?: number
  thumbnail?: string
}

export interface VideoConfig {
  videos: VideoMetadata[]
  lastUpdated: string
}

export async function ensureConfigExists(): Promise<void> {
  const videosDir = path.join(process.cwd(), 'public', 'videos')

  if (!existsSync(videosDir)) {
    await mkdir(videosDir, { recursive: true })
  }

  if (!existsSync(CONFIG_PATH)) {
    const initialConfig: VideoConfig = {
      videos: [],
      lastUpdated: new Date().toISOString()
    }
    await writeFile(CONFIG_PATH, JSON.stringify(initialConfig, null, 2))
  }
}

export async function getVideoConfig(): Promise<VideoConfig> {
  await ensureConfigExists()
  const content = await readFile(CONFIG_PATH, 'utf-8')
  return JSON.parse(content)
}

export async function addVideoToConfig(video: VideoMetadata): Promise<void> {
  const config = await getVideoConfig()

  // Check if video already exists
  const existingIndex = config.videos.findIndex(v => v.id === video.id)

  if (existingIndex >= 0) {
    // Update existing video
    config.videos[existingIndex] = video
  } else {
    // Add new video
    config.videos.push(video)
  }

  config.lastUpdated = new Date().toISOString()
  await writeFile(CONFIG_PATH, JSON.stringify(config, null, 2))
}

export async function removeVideoFromConfig(videoId: string): Promise<void> {
  const config = await getVideoConfig()
  config.videos = config.videos.filter(v => v.id !== videoId)
  config.lastUpdated = new Date().toISOString()
  await writeFile(CONFIG_PATH, JSON.stringify(config, null, 2))
}

export async function getVideoById(videoId: string): Promise<VideoMetadata | null> {
  const config = await getVideoConfig()
  return config.videos.find(v => v.id === videoId) || null
}
