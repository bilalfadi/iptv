/**
 * Download all WordPress images from exported media data
 * Usage: node scripts/download-images.js [media-file-path]
 */

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Get media file path - use latest export
const EXPORT_DATE = '2026-01-15';
const MEDIA_FILE = process.argv[2] || path.join(__dirname, '..', 'files', `media-${EXPORT_DATE}.json`);
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'images');

// Create output directory
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Download a single file
function downloadFile(url, filePath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https:') ? https : http;
    
    // Create directory if it doesn't exist
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    const file = fs.createWriteStream(filePath);
    
    protocol.get(url, {
      rejectUnauthorized: false,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    }, (response) => {
      // Handle redirects
      if (response.statusCode === 301 || response.statusCode === 302 || response.statusCode === 307 || response.statusCode === 308) {
        file.close();
        fs.unlinkSync(filePath);
        return downloadFile(response.headers.location, filePath).then(resolve).catch(reject);
      }
      
      if (response.statusCode !== 200) {
        file.close();
        fs.unlinkSync(filePath);
        reject(new Error(`Failed to download: HTTP ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        resolve(filePath);
      });
    }).on('error', (error) => {
      file.close();
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
      reject(error);
    });
  });
}

// Extract filename from URL
function getFilenameFromUrl(url) {
  try {
    const urlObj = new URL(url);
    const pathname = urlObj.pathname;
    const parts = pathname.split('/');
    return parts[parts.length - 1] || 'image.jpg';
  } catch (e) {
    const parts = url.split('/');
    return parts[parts.length - 1] || 'image.jpg';
  }
}

// Extract directory structure from URL (wp-content/uploads/...)
function getDirectoryFromUrl(url) {
  try {
    const urlObj = new URL(url);
    const pathname = urlObj.pathname;
    
    // Find wp-content in the path
    const wpContentIndex = pathname.indexOf('/wp-content/');
    if (wpContentIndex !== -1) {
      return pathname.substring(wpContentIndex + 1); // Remove leading /
    }
    
    // If no wp-content, use filename
    return getFilenameFromUrl(url);
  } catch (e) {
    return getFilenameFromUrl(url);
  }
}

// Main download function
async function downloadAllImages() {
  console.log('🖼️  Starting Image Download...');
  console.log(`📁 Reading media file: ${MEDIA_FILE}`);
  console.log(`💾 Output directory: ${OUTPUT_DIR}\n`);
  
  if (!fs.existsSync(MEDIA_FILE)) {
    console.error(`❌ Media file not found: ${MEDIA_FILE}`);
    process.exit(1);
  }
  
  const mediaData = JSON.parse(fs.readFileSync(MEDIA_FILE, 'utf8'));
  const mediaItems = mediaData.media || [];
  
  console.log(`📊 Total media items: ${mediaItems.length}`);
  
  const images = mediaItems.filter(item => 
    item.media_type === 'image' && item.source_url
  );
  
  console.log(`🖼️  Images to download: ${images.length}\n`);
  
  let successCount = 0;
  let failCount = 0;
  const failedUrls = [];
  
  for (let i = 0; i < images.length; i++) {
    const image = images[i];
    const url = image.source_url;
    
    // Get file path preserving WordPress directory structure
    const relativePath = getDirectoryFromUrl(url);
    const filePath = path.join(OUTPUT_DIR, relativePath);
    
    // Skip if file already exists
    if (fs.existsSync(filePath)) {
      console.log(`⏭️  [${i + 1}/${images.length}] Skipped (exists): ${path.basename(filePath)}`);
      successCount++;
      continue;
    }
    
    try {
      await downloadFile(url, filePath);
      console.log(`✅ [${i + 1}/${images.length}] Downloaded: ${path.basename(filePath)}`);
      successCount++;
      
      // Small delay to avoid overwhelming the server
      await new Promise(resolve => setTimeout(resolve, 100));
    } catch (error) {
      console.error(`❌ [${i + 1}/${images.length}] Failed: ${path.basename(filePath)} - ${error.message}`);
      failCount++;
      failedUrls.push({
        url: url,
        error: error.message,
        filename: path.basename(filePath)
      });
    }
  }
  
  console.log('\n📊 Download Summary:');
  console.log(`   ✅ Successfully downloaded: ${successCount}`);
  console.log(`   ❌ Failed: ${failCount}`);
  console.log(`   📁 Images saved to: ${OUTPUT_DIR}`);
  
  // Save failed downloads list
  if (failedUrls.length > 0) {
    const failedPath = path.join(OUTPUT_DIR, 'failed-downloads.json');
    fs.writeFileSync(failedPath, JSON.stringify({
      export_date: new Date().toISOString().split('T')[0],
      total_failed: failedUrls.length,
      failed_urls: failedUrls
    }, null, 2));
    console.log(`   📝 Failed downloads list: ${failedPath}`);
  }
  
  console.log('\n✅ Image download completed!');
}

// Run the download
downloadAllImages().catch(error => {
  console.error('\n❌ Fatal error:', error.message);
  process.exit(1);
});
