# Video Upload Debugging Guide

## Debug Features Added

### 🔍 Debug Logging System

All debug logs are prefixed with:
- `[VIDEO UPLOAD DEBUG]` - Client-side logs
- `[API UPLOAD-CHUNK DEBUG]` - Server-side API logs

### Client-Side Debug Features

1. **Console Logging**
   - Every action logged to browser console
   - File selection, validation, upload progress
   - API responses and errors
   - State changes

2. **Visual Debug Panel**
   - Real-time debug log display on upload page
   - Shows timestamped events
   - Scrollable log window
   - Automatically clears on new upload

3. **Debug Toggle**
   ```typescript
   const DEBUG = true  // Set to false to disable
   ```

### Server-Side Debug Features

1. **Request Logging**
   - All API requests logged
   - FormData parameters displayed
   - File paths shown
   - Chunk processing steps

2. **Error Tracking**
   - Detailed error messages
   - Stack traces in server logs
   - Cleanup attempts logged

## How to Debug

### Step 1: Open Browser Console
1. Open DevTools (F12 or Cmd+Option+I)
2. Go to Console tab
3. Filter by "VIDEO UPLOAD DEBUG"

### Step 2: Check Server Logs
```bash
# Terminal where dev server is running
cd iron-works-solution
bun run dev
```

Look for `[API UPLOAD-CHUNK DEBUG]` messages

### Step 3: Monitor Upload Process

#### Expected Flow:
```
1. File selection:
   ✓ Component mounted
   ✓ File selection triggered
   ✓ File selected: {name, size, type}
   ✓ File ready: filename (XMB)

2. Upload start:
   ✓ Starting upload process
   ✓ Upload details: {fileName, fileSize, chunkSize, totalChunks}
   ✓ Upload started: N chunks

3. For each chunk:
   ✓ Uploading chunk N/M
   ✓ FormData prepared, sending request...
   ✓ Chunk upload response: {status, ok}
   ✓ Chunk upload success
   ✓ Chunk N/M uploaded (X%)

4. Upload complete:
   ✓ Upload complete!
   ✓ Upload completed successfully!
   ✓ Upload process finished
```

### Step 4: Check File System

Verify directories exist:
```bash
ls -la public/videos/
ls -la public/videos/temp/
cat public/videos/video-config.json
```

## Common Issues & Solutions

### ❌ Issue: "Upload session not found"
**Cause**: Temp file doesn't exist for chunk append

**Debug Steps**:
1. Check console for "FIRST CHUNK - Creating new file"
2. Verify temp directory exists
3. Check file permissions

**Solution**:
```bash
# Ensure directories exist with proper permissions
mkdir -p public/videos/temp
chmod 755 public/videos
chmod 755 public/videos/temp
```

### ❌ Issue: Upload stuck at 0%
**Cause**: API request not reaching server

**Debug Steps**:
1. Check browser console for network errors
2. Look for "FormData prepared, sending request..."
3. Check if request appears in Network tab

**Solution**:
- Check dev server is running
- Verify API route exists at `/api/upload-chunk`
- Check browser network tab for 404/500 errors

### ❌ Issue: "File too large" error
**Cause**: File exceeds MAX_FILE_SIZE

**Debug Steps**:
1. Check console for "File too large: XMB"
2. See debug info panel

**Solution**:
```typescript
// Increase limit in page.tsx
const MAX_FILE_SIZE = 200 * 1024 * 1024 // 200MB
```

### ❌ Issue: Videos not appearing in list
**Cause**: video-config.json not updated or missing

**Debug Steps**:
1. Check "Fetched N videos" in console
2. Verify API response in Network tab
3. Check server logs for "Video config updated"
4. Verify file exists: `public/videos/video-config.json`

**Solution**:
```bash
# Create config file if missing
cat > public/videos/video-config.json << 'EOF'
{
  "videos": [],
  "lastUpdated": "2025-01-18T00:00:00.000Z"
}
EOF
```

### ❌ Issue: Chunks fail after first one
**Cause**: Temp file path mismatch

**Debug Steps**:
1. Check server logs for file paths
2. Look for "Temp file not found" error
3. Check if uniqueId is consistent

**Solution**:
- Ensure no server restarts during upload
- Check temp file naming consistency
- Verify file isn't being deleted prematurely

## Debug Log Examples

### Successful Upload
```
[VIDEO UPLOAD DEBUG] Component mounted
[VIDEO UPLOAD DEBUG] File selection triggered
[VIDEO UPLOAD DEBUG] File selected: {name: "test.mp4", size: 5242880, type: "video/mp4"}
[VIDEO UPLOAD DEBUG] File ready: test.mp4 (5.00MB)
[VIDEO UPLOAD DEBUG] Starting upload process
[VIDEO UPLOAD DEBUG] Upload details: {fileName: "test.mp4", fileSize: 5242880, chunkSize: 512000, totalChunks: 11}
[API UPLOAD-CHUNK DEBUG] === UPLOAD CHUNK REQUEST RECEIVED ===
[API UPLOAD-CHUNK DEBUG] Directories ready
[API UPLOAD-CHUNK DEBUG] FormData received
[API UPLOAD-CHUNK DEBUG] Request parameters: {chunkIndex: 0, totalChunks: 11, fileName: "test.mp4", ...}
[API UPLOAD-CHUNK DEBUG] FIRST CHUNK - Creating new file
[API UPLOAD-CHUNK DEBUG] First chunk written successfully
[API UPLOAD-CHUNK DEBUG] Chunk 1/11 uploaded (9%)
[VIDEO UPLOAD DEBUG] Chunk upload success: {success: true, message: "Chunk 1/11 uploaded", progress: 9}
...
[API UPLOAD-CHUNK DEBUG] LAST CHUNK - Finalizing upload
[API UPLOAD-CHUNK DEBUG] File moved successfully
[API UPLOAD-CHUNK DEBUG] Video config updated
[API UPLOAD-CHUNK DEBUG] === UPLOAD COMPLETE ===
[VIDEO UPLOAD DEBUG] Upload complete!
```

### Failed Upload
```
[VIDEO UPLOAD DEBUG] Starting upload process
[VIDEO UPLOAD DEBUG] Uploading chunk 5/11
[VIDEO UPLOAD DEBUG] Chunk upload response: {status: 400, ok: false}
[VIDEO UPLOAD DEBUG] Upload failed: {error: "Upload session not found"}
[API UPLOAD-CHUNK DEBUG] ERROR: Temp file not found: /path/to/temp/file.mp4
[VIDEO UPLOAD DEBUG] Upload error caught: Error: Upload session not found
```

## Performance Monitoring

### Check Upload Speed
Monitor chunk upload times in console:
```javascript
// Each chunk shows timing
Uploading chunk 1/20 {...}  // Start time
Chunk 1/20 uploaded (5%)    // End time
```

### Memory Usage
Check browser Task Manager:
- Should stay relatively constant
- Each chunk released after upload
- No memory leaks expected

## Testing Checklist

- [ ] Small file (< 1MB) - should upload in 1-2 chunks
- [ ] Medium file (5-10MB) - test chunk progression
- [ ] Large file (50MB+) - test long upload
- [ ] Invalid file type - should show error
- [ ] File too large - should show error
- [ ] Network interruption - check error handling
- [ ] Multiple uploads - check list refresh
- [ ] View uploaded video - check URL works

## Disable Debug Mode

For production, disable debugging:

```typescript
// src/app/video_upload/page.tsx
const DEBUG = false

// src/app/api/upload-chunk/route.ts
const DEBUG = false
```

This will:
- Remove console logs
- Hide debug panel
- Reduce log overhead
- Improve performance

## Need Help?

If issues persist:

1. **Copy debug logs** from browser console
2. **Copy server logs** from terminal
3. **Check file system** state
4. **Provide error messages** exactly as shown

Common debug patterns:
- 🟢 Success: Logs show complete flow without errors
- 🟡 Warning: Partial success, check specific step
- 🔴 Error: Check last action before error occurred
