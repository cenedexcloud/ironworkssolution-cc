# How to Add Video Background to Hero Section

## Quick Steps

### 1. Upload a Video
1. Go to **`http://localhost:3000/video_upload`**
2. Select a video file (MP4, MOV, etc.)
3. Click "Upload Video"
4. Wait for upload to complete
5. Look for "Upload completed successfully!" message

### 2. Verify Upload
After upload completes, you should see:
- ✅ Success message in green
- ✅ Video appears in "Uploaded Videos" list (click "Show Uploaded Videos")

### 3. View on Homepage
1. Go to **`http://localhost:3000`** (homepage)
2. Video should automatically play in hero background
3. Look for green badge "✓ Video background active" in top-right corner

## Troubleshooting

### "No video uploaded yet" message on homepage?

**Check browser console (F12):**
```
[HERO] Fetching videos from /api/videos...
[HERO] Videos data: {videos: []}
[HERO] ⚠️ No videos found, using fallback image
```

This means no videos in config file yet.

**Solution:**
1. Go to `/video_upload`
2. Upload a video successfully (wait for green success message)
3. Verify in "Uploaded Videos" list
4. Refresh homepage

### Upload says "Upload session not found"?

This was **FIXED in Version 13**. If you still see this:

1. **Refresh the page** `/video_upload`
2. **Try uploading again** - the uploadId fix should work now
3. Check console logs for `[VIDEO UPLOAD DEBUG]` and `[API UPLOAD-CHUNK DEBUG]`

### Video uploaded but not showing on homepage?

**Check these:**

1. **Is video in config?**
```bash
cat public/videos/video-config.json
```
Should show videos array with at least one video.

2. **Is video file present?**
```bash
ls -la public/videos/
```
Should show `.mp4` files (not just `temp/` and `video-config.json`).

3. **Check browser console on homepage:**
```
[HERO] ✓ Hero video loaded: /videos/1234567890_abc123_video.mp4
```

4. **Hard refresh homepage:** `Ctrl+Shift+R` (or `Cmd+Shift+R` on Mac)

## Current Status

**Check video config:**
```bash
cd iron-works-solution
cat public/videos/video-config.json
```

**Check uploaded files:**
```bash
cd iron-works-solution
ls -la public/videos/
```

## Expected Console Output

### On Upload Page (when uploading):
```
[VIDEO UPLOAD DEBUG] Upload started: 17 chunks (ID: 1234567890_abc123)
[VIDEO UPLOAD DEBUG] Chunk 1/17 uploaded (6%)
[VIDEO UPLOAD DEBUG] Chunk 2/17 uploaded (12%)
...
[VIDEO UPLOAD DEBUG] Upload complete!
```

### On Homepage (when loading):
```
[HERO] Fetching videos from /api/videos...
[HERO] API response status: 200
[HERO] Videos data: {videos: [{...}]}
[HERO] ✓ Hero video loaded: /videos/1234567890_abc123_video.mp4
[HERO] Video title: My Video
```

## Video Requirements

- **Format:** MP4, MOV, AVI, WebM, MKV
- **Max Size:** 100MB (configurable)
- **Recommended:**
  - Short duration (10-30 seconds for looping)
  - Welding/ironwork footage
  - Landscape orientation
  - No audio needed (will be muted)

## Quick Test

1. ✅ Go to `/video_upload`
2. ✅ Select a small test video (< 5MB)
3. ✅ Click upload and wait for completion
4. ✅ Go to homepage and check top-right corner
5. ✅ Should see "✓ Video background active"

## Need Help?

Check the console logs:
- **Browser Console:** F12 → Console tab
- **Server Logs:** Terminal where `bun run dev` is running

All debug messages are prefixed with:
- `[VIDEO UPLOAD DEBUG]` - Client upload page
- `[API UPLOAD-CHUNK DEBUG]` - Server upload API
- `[HERO]` - Homepage hero section
