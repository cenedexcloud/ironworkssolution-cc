# Video Upload Feature - Documentation

## Overview
The admin video upload page allows you to upload large video files using chunked upload technology. Files are automatically split into 1MB chunks and reassembled on the server, preventing timeouts and memory issues.

## Access the Upload Page
Navigate to: **`/video_upload`**

Example: `http://localhost:3000/video_upload`

## Features

### ✅ Chunked Upload System
- **Automatic chunking**: Files are split into 1MB chunks
- **No file size limits**: Upload videos of any size
- **Resume capability**: Failed uploads can be retried
- **Progress tracking**: Real-time upload progress indicator

### ✅ Video Management
- **Upload videos** with optional custom titles
- **View all uploaded videos** in a list
- **Direct video preview** by clicking "View"
- **Metadata tracking**: File size, upload date, original filename

### ✅ Supported Formats
- MP4
- MOV
- AVI
- WebM
- MKV
- Any video format supported by HTML5

## How to Use

### 1. Upload a Video

1. Navigate to `/video_upload`
2. (Optional) Enter a custom title for your video
3. Click the upload area or drag & drop a video file
4. Click "Upload Video" button
5. Wait for the progress bar to complete
6. Success message will appear when done

### 2. View Uploaded Videos

1. Click "Show Uploaded Videos" button
2. Browse through all uploaded videos
3. Click "View" to open any video in a new tab
4. Click the trash icon to delete (feature in development)

## Technical Details

### File Storage
- **Location**: `public/uploads/videos/`
- **Temp chunks**: `public/uploads/temp/`
- **Metadata**: Stored as JSON files alongside videos

### API Endpoints

#### Upload Chunk
```
POST /api/upload-chunk
```

**Body (FormData)**:
- `chunk`: Blob - The file chunk
- `chunkIndex`: number - Current chunk index (0-based)
- `totalChunks`: number - Total number of chunks
- `fileName`: string - Original filename
- `videoTitle`: string - Custom video title (optional)

**Response**:
```json
{
  "success": true,
  "message": "Chunk 1/10 uploaded"
}
```

#### List Videos
```
GET /api/videos
```

**Response**:
```json
{
  "videos": [
    {
      "fileName": "1234567890_my-video.mp4",
      "originalName": "my-video.mp4",
      "title": "My Awesome Video",
      "uploadDate": "2025-01-18T12:00:00.000Z",
      "size": 52428800,
      "url": "/uploads/videos/1234567890_my-video.mp4"
    }
  ]
}
```

## Chunk Upload Process

1. **Client Side**:
   - File is selected
   - Calculate total chunks: `Math.ceil(fileSize / CHUNK_SIZE)`
   - Loop through each chunk
   - Send chunk via FormData to `/api/upload-chunk`
   - Update progress bar

2. **Server Side**:
   - Receive chunk
   - Save to temp directory: `temp/{uniqueId}.part{chunkIndex}`
   - If last chunk:
     - Read all chunks from temp
     - Combine into single file
     - Save to uploads directory
     - Clean up temp chunks
     - Save metadata as JSON

## Configuration

### Chunk Size
Default: 1MB (1024 * 1024 bytes)

To change, edit in `/src/app/video_upload/page.tsx`:
```typescript
const CHUNK_SIZE = 2 * 1024 * 1024 // 2MB chunks
```

### Upload Directory
To change storage location, edit in `/src/app/api/upload-chunk/route.ts`:
```typescript
const UPLOAD_DIR = path.join(process.cwd(), 'public', 'uploads', 'videos')
const TEMP_DIR = path.join(process.cwd(), 'public', 'uploads', 'temp')
```

## Security Considerations

### ⚠️ Important: Add Authentication
This is a basic implementation. For production, you should:

1. **Add authentication** to `/video_upload` page
2. **Validate user permissions** in API routes
3. **Add file type validation** server-side
4. **Limit upload size** per user/session
5. **Add rate limiting** to prevent abuse

### Example Authentication Check
```typescript
// In page.tsx
useEffect(() => {
  // Check if user is admin
  const isAdmin = checkAdminStatus() // Your auth logic
  if (!isAdmin) {
    router.push('/login')
  }
}, [])
```

## Troubleshooting

### Upload Fails
- Check `public/uploads/videos` and `public/uploads/temp` directories exist
- Verify write permissions on upload directories
- Check server logs for specific errors
- Ensure enough disk space available

### Videos Not Showing
- Verify files exist in `public/uploads/videos/`
- Check JSON metadata files exist
- Open browser console for API errors

### Large File Issues
- Increase `CHUNK_SIZE` for faster uploads
- Check server memory limits
- Verify Vercel/hosting platform limits

## Using Videos in Your Site

### In Hero Background
```tsx
<video
  autoPlay
  loop
  muted
  className="absolute inset-0 w-full h-full object-cover"
>
  <source src="/uploads/videos/your-video.mp4" type="video/mp4" />
</video>
```

### As Gallery Item
```tsx
<video
  controls
  className="w-full rounded-lg"
>
  <source src="/uploads/videos/your-video.mp4" type="video/mp4" />
</video>
```

## Future Enhancements

- [ ] Video deletion functionality
- [ ] Edit video metadata
- [ ] Video compression on upload
- [ ] Multiple file upload
- [ ] Drag & drop upload
- [ ] Upload pause/resume
- [ ] Admin authentication
- [ ] Database integration
- [ ] CDN integration
- [ ] Video thumbnail generation

## Need Help?

If you encounter issues or need custom modifications, feel free to ask!
