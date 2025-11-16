import { NextResponse } from 'next/server'
import { getVideoConfig } from '@/lib/video-config'

export async function GET() {
  try {
    const config = await getVideoConfig()
    return NextResponse.json({ videos: config.videos })
  } catch (error) {
    console.error('Error fetching videos:', error)
    return NextResponse.json(
      { error: 'Failed to fetch videos', videos: [] },
      { status: 500 }
    )
  }
}
