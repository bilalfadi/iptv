/**
 * Download favicon and logo from WordPress site
 * Usage: node scripts/download-favicon-logo.js [URL]
 */

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

let WORDPRESS_URL = process.argv[2] || 'https://4kxtreamiptv.com';
WORDPRESS_URL = WORDPRESS_URL.replace(/\/$/, '');

const OUTPUT_DIR = path.join(__dirname, '..', 'public');

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

// Main function
async function downloadAssets() {
  console.log('🔍 Downloading favicon and logo from WordPress site...');
  console.log(`🌐 URL: ${WORDPRESS_URL}\n`);
  
  const downloads = [];
  
  // Download logo from media export
  const logoUrl = 'https://4kxtreamiptv.com/wp-content/uploads/2024/12/logo-4kx.png';
  const logoPath = path.join(OUTPUT_DIR, 'logo.png');
  downloads.push({
    name: 'Logo',
    url: logoUrl,
    path: logoPath
  });
  
  // Try common favicon locations
  const faviconUrls = [
    `${WORDPRESS_URL}/favicon.ico`,
    `${WORDPRESS_URL}/wp-content/uploads/favicon.ico`,
    `${WORDPRESS_URL}/apple-touch-icon.png`,
    `${WORDPRESS_URL}/apple-touch-icon-180x180.png`,
    `${WORDPRESS_URL}/wp-content/uploads/apple-touch-icon.png`,
    'https://4kxtreamiptv.com/wp-content/uploads/2024/12/favicon.ico',
    'https://4kxtreamiptv.com/wp-content/uploads/favicon.ico',
    'https://4kxtreamiptv.com/wp-content/themes/*/favicon.ico'
  ];
  
  for (const faviconUrl of faviconUrls) {
    downloads.push({
      name: 'Favicon',
      url: faviconUrl,
      path: path.join(OUTPUT_DIR, 'favicon.ico')
    });
  }
  
  // Download all assets
  for (const download of downloads) {
    try {
      await downloadFile(download.url, download.path);
      console.log(`✅ Downloaded ${download.name}: ${path.basename(download.path)}`);
    } catch (error) {
      // Silently fail for favicon attempts
      if (download.name === 'Favicon') {
        continue;
      } else {
        console.log(`⚠️  Could not download ${download.name}: ${error.message}`);
      }
    }
  }
  
  // Create favicon and apple-touch-icon from logo if favicon not found
  const faviconPath = path.join(OUTPUT_DIR, 'favicon.ico');
  const applePath = path.join(OUTPUT_DIR, 'apple-touch-icon.png');
  
  if (!fs.existsSync(faviconPath) && fs.existsSync(logoPath)) {
    try {
      // Copy logo as favicon (will be converted to .ico if needed)
      fs.copyFileSync(logoPath, faviconPath);
      console.log(`✅ Created favicon.ico from logo`);
    } catch (error) {
      console.log(`⚠️  Could not create favicon from logo`);
    }
  }
  
  if (!fs.existsSync(applePath)) {
    try {
      if (fs.existsSync(faviconPath)) {
        fs.copyFileSync(faviconPath, applePath);
        console.log(`✅ Created apple-touch-icon.png from favicon`);
      } else if (fs.existsSync(logoPath)) {
        fs.copyFileSync(logoPath, applePath);
        console.log(`✅ Created apple-touch-icon.png from logo`);
      }
    } catch (error) {
      // Ignore
    }
  }
  
  console.log('\n✅ Download completed!');
  console.log(`📁 Files saved to: ${OUTPUT_DIR}`);
}

// Run
downloadAssets();
