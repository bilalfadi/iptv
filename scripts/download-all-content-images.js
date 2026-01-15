/**
 * Download all images referenced in WordPress content (including srcset)
 * This includes all image sizes referenced in posts and pages
 */

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const EXPORT_DATE = '2026-01-15';
const FILES_DIR = path.join(__dirname, '..', 'files');
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'images');

// Create output directory
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Download a file
function downloadFile(url, filePath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https:') ? https : http;
    
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
      if (response.statusCode === 301 || response.statusCode === 302 || response.statusCode === 307 || response.statusCode === 308) {
        file.close();
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
        return downloadFile(response.headers.location, filePath).then(resolve).catch(reject);
      }
      
      if (response.statusCode !== 200) {
        file.close();
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
        reject(new Error(`HTTP ${response.statusCode}`));
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

// Extract all image URLs from content
function extractImageUrls(content) {
  const urls = new Set();
  
  if (!content) return urls;
  
  // Convert to string if it's an object
  const contentStr = typeof content === 'string' ? content : (content.rendered || JSON.stringify(content));
  
  if (typeof contentStr !== 'string') return urls;
  
  // Extract from src attributes
  const srcMatches = contentStr.match(/src=["']([^"']*https?:\/\/[^"']*\.(?:jpg|jpeg|png|gif|webp|svg))["']/gi);
  if (srcMatches) {
    srcMatches.forEach(match => {
      const url = match.match(/src=["']([^"']+)["']/i)?.[1];
      if (url) urls.add(url);
    });
  }
  
  // Extract from srcset attributes
  const srcsetMatches = contentStr.match(/srcset=["']([^"']+)["']/gi);
  if (srcsetMatches) {
    srcsetMatches.forEach(match => {
      const srcset = match.match(/srcset=["']([^"']+)["']/i)?.[1];
      if (srcset) {
        // srcset format: "url1 size1, url2 size2, ..."
        const urlList = srcset.split(',');
        urlList.forEach(item => {
          const url = item.trim().split(/\s+/)[0];
          if (url && url.startsWith('http')) {
            urls.add(url);
          }
        });
      }
    });
  }
  
  // Extract from background-image in style attributes
  const bgMatches = contentStr.match(/background-image:\s*url\(["']?([^"')]+)["']?\)/gi);
  if (bgMatches) {
    bgMatches.forEach(match => {
      const url = match.match(/url\(["']?([^"')]+)["']?\)/i)?.[1];
      if (url && url.startsWith('http')) {
        urls.add(url);
      }
    });
  }
  
  return urls;
}

// Get local path from WordPress URL
function getLocalPath(wordpressUrl) {
  if (!wordpressUrl.includes('wp-content/uploads')) {
    return null;
  }
  
  const urlParts = wordpressUrl.split('/wp-content/uploads/');
  if (urlParts.length < 2) return null;
  
  const relativePath = urlParts[1];
  return path.join(OUTPUT_DIR, 'wp-content', 'uploads', relativePath);
}

// Main function
async function downloadAllContentImages() {
  console.log('🔍 Extracting image URLs from WordPress content...\n');
  
  const allImageUrls = new Set();
  
  // Read pages
  const pagesFile = path.join(FILES_DIR, `pages-${EXPORT_DATE}.json`);
  if (fs.existsSync(pagesFile)) {
    const pagesData = JSON.parse(fs.readFileSync(pagesFile, 'utf8'));
    if (pagesData.pages) {
      pagesData.pages.forEach((page) => {
        if (page.content) {
          const urls = extractImageUrls(page.content);
          urls.forEach(url => allImageUrls.add(url));
        }
        if (page.excerpt && typeof page.excerpt === 'object' && page.excerpt.rendered) {
          const urls = extractImageUrls(page.excerpt.rendered);
          urls.forEach(url => allImageUrls.add(url));
        }
      });
    }
    console.log(`📄 Found images in ${pagesData.pages?.length || 0} pages`);
  }
  
  // Read posts
  const postsFile = path.join(FILES_DIR, `posts-${EXPORT_DATE}.json`);
  if (fs.existsSync(postsFile)) {
    const postsData = JSON.parse(fs.readFileSync(postsFile, 'utf8'));
    if (postsData.posts) {
      postsData.posts.forEach((post) => {
        if (post.content) {
          const urls = extractImageUrls(post.content);
          urls.forEach(url => allImageUrls.add(url));
        }
        if (post.excerpt && typeof post.excerpt === 'string') {
          const urls = extractImageUrls(post.excerpt);
          urls.forEach(url => allImageUrls.add(url));
        }
      });
    }
    console.log(`📝 Found images in ${postsData.posts?.length || 0} posts`);
  }
  
  console.log(`\n🖼️  Total unique image URLs found: ${allImageUrls.size}\n`);
  
  // Filter WordPress images only
  const wordpressImages = Array.from(allImageUrls).filter(url => 
    url.includes('4kxtreamiptv.com') && url.includes('wp-content/uploads')
  );
  
  console.log(`📥 WordPress images to download: ${wordpressImages.length}\n`);
  
  let successCount = 0;
  let skipCount = 0;
  let failCount = 0;
  const failedUrls = [];
  
  for (let i = 0; i < wordpressImages.length; i++) {
    const url = wordpressImages[i];
    const localPath = getLocalPath(url);
    
    if (!localPath) {
      continue;
    }
    
    // Skip if already exists
    if (fs.existsSync(localPath)) {
      skipCount++;
      continue;
    }
    
    try {
      await downloadFile(url, localPath);
      console.log(`✅ [${i + 1}/${wordpressImages.length}] Downloaded: ${path.basename(localPath)}`);
      successCount++;
      
      // Small delay
      await new Promise(resolve => setTimeout(resolve, 100));
    } catch (error) {
      console.error(`❌ [${i + 1}/${wordpressImages.length}] Failed: ${path.basename(localPath)} - ${error.message}`);
      failCount++;
      failedUrls.push({ url, error: error.message });
    }
  }
  
  console.log('\n📊 Download Summary:');
  console.log(`   ✅ Successfully downloaded: ${successCount}`);
  console.log(`   ⏭️  Skipped (already exists): ${skipCount}`);
  console.log(`   ❌ Failed: ${failCount}`);
  console.log(`   📁 Images saved to: ${OUTPUT_DIR}`);
  
  if (failedUrls.length > 0) {
    const failedPath = path.join(OUTPUT_DIR, 'failed-content-images.json');
    fs.writeFileSync(failedPath, JSON.stringify({
      export_date: EXPORT_DATE,
      total_failed: failedUrls.length,
      failed_urls: failedUrls
    }, null, 2));
    console.log(`   📝 Failed downloads list: ${failedPath}`);
  }
  
  console.log('\n✅ Content images download completed!');
}

// Run
downloadAllContentImages().catch(error => {
  console.error('\n❌ Fatal error:', error.message);
  process.exit(1);
});
