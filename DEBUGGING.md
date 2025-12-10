# Debugging Guide for AI Portfolio

## Problem Fixed
The chat functionality was showing "processing" but not returning any responses. This was caused by the frontend API client not having proper timeout and error handling.

## Architecture

### How Routing Works
- **Development**: Next.js proxies `/api/*` to Python backend at `localhost:8000` (via `next.config.ts`)
- **Production (Vercel)**: Routes `/api/*` directly to Python serverless functions (via `vercel.json`)
- **No Next.js API routes needed** - All logic is in Python (`api/index.py`)

## Changes Made

### 1. Enhanced Python Backend (`api/rag_logic.py` & `api/index.py`)
- Added extensive logging to track request flow
- Better error handling with detailed error messages
- Checks for empty responses
- Returns helpful error messages instead of hanging

### 2. Improved Frontend API Client (`src/lib/api.ts`)
- Added 30-second timeout to prevent infinite loading
- Better error handling and user-friendly messages
- Validates responses before returning
- Calls `/api/chat` which routes to Python backend

### 3. Added Test Script (`api/test_api.py`)
- Easy way to test if the Python backend is working
- Tests multiple questions including the problematic one

### 4. Cleaned Up Unused Files
- Removed `src/app/api/chat/route.ts` (not needed - routing handled by Vercel/Next.js config)
- Removed `src/lib/mock-responses.ts` (mock responses are in Python backend)

## How to Test

### Step 1: Start the Python Backend
```cmd
cd api
python index.py
```

The server should start on `http://127.0.0.1:8000`

### Step 2: Test the Backend Directly (Optional)
```cmd
python api/test_api.py
```

This will test:
- Health check
- Various questions including "What is step next on the system"

### Step 3: Start the Next.js Frontend
In a new terminal:
```cmd
npm run dev
```

### Step 4: Test in Browser
1. Go to http://localhost:3000
2. Try asking: "What is step next on the system"
3. You should get a response now (either from RAG or mock)

## Common Issues and Solutions

### Issue 1: "Connection Error" in Browser
**Problem**: Python backend is not running
**Solution**: 
```cmd
cd api
python index.py
```

### Issue 2: Still Hanging After Changes
**Problem**: Browser cache or old Next.js build
**Solution**:
1. Hard refresh browser (Ctrl + Shift + R)
2. Restart Next.js dev server
3. Clear `.next` folder: `rmdir /s /q .next` then `npm run dev`

### Issue 3: Empty or Generic Responses
**Problem**: RAG system might not be initialized properly
**Solution**:
- Check Python console for RAG initialization logs
- Ensure GROQ_API_KEY is set in `.env` file
- If RAG fails, it will fall back to mock responses (which is okay for testing)

### Issue 4: Request Timeout
**Problem**: RAG system taking too long (>30 seconds)
**Solution**:
- This is normal on first request (loading embeddings model)
- Subsequent requests should be faster
- The timeout prevents infinite loading

## Expected Behavior

### First Request (with RAG)
- May take 10-30 seconds (loading embeddings model)
- Shows "Building FAISS vector store..." in Python console
- Subsequent requests are faster (cached)

### Mock Responses (without RAG)
- Should be instant
- Returns pre-defined answers
- Still useful for testing UI

## Logs to Check

### Python Backend Logs
Look for:
```
=== Processing chat request ===
Question: what is step next on the system
USE_RAG: True/False
Using RAG system... or Using mock responses...
Final answer: ...
```

### Browser Console Logs
Look for:
```
Error calling AI API: ...
```

## Testing Checklist

- [ ] Python backend starts without errors
- [ ] Health check returns 200 OK
- [ ] Test script runs successfully
- [ ] Next.js frontend starts
- [ ] Can type in search box
- [ ] "Processing" appears when submitting
- [ ] Response appears within 30 seconds
- [ ] No infinite loading
- [ ] Error messages are helpful (if any)

## Production Deployment

On Vercel:
- Next.js routes `/api/*` directly to Python serverless functions
- The Next.js API route won't be used in production
- Vercel handles the routing automatically based on `vercel.json`

## Need Help?

If issues persist:
1. Check Python console for errors
2. Check browser console for errors
3. Run the test script: `python api/test_api.py`
4. Verify `.env` file has GROQ_API_KEY
5. Try the traditional portfolio page as fallback
