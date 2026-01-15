/**
 * WordPress Data Export Script - Complete Export (EXCLUDING PLUGINS)
 * Exports all WordPress data locally for use in Next.js app
 * 
 * Usage: 
 *   node scripts/export-wordpress-data.js [URL] [USERNAME] [PASSWORD]
 *   Or set environment variables: WP_URL, WP_USERNAME, WP_PASSWORD
 */

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Configuration
let WORDPRESS_URL = process.env.WP_URL || process.argv[2] || 'https://4kxtreamiptv.com';
const USERNAME = process.env.WP_USERNAME || process.argv[3] || 'admin';
const PASSWORD = process.env.WP_PASSWORD || process.argv[4] || 'j1AnenwJjU!b*7taZZ(byY95';

// Remove trailing slash and wp-admin if present
WORDPRESS_URL = WORDPRESS_URL.replace(/\/wp-admin\/?$/, '').replace(/\/$/, '');

// Auto-convert HTTP to HTTPS
if (WORDPRESS_URL.startsWith('http://') && !WORDPRESS_URL.includes('localhost') && !WORDPRESS_URL.includes('127.0.0.1')) {
  WORDPRESS_URL = WORDPRESS_URL.replace('http://', 'https://');
}

if (!PASSWORD) {
  console.error('❌ Error: WordPress password is required!');
  process.exit(1);
}

// Output directory
const OUTPUT_DIR = path.join(__dirname, '..', 'files');
const EXPORT_DATE = new Date().toISOString().split('T')[0];

// Create output directory
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Helper function to make authenticated WordPress API requests
function makeWordPressRequest(endpoint, callback, redirectCount = 0, forceHttps = false) {
  if (redirectCount > 10) {
    callback(new Error('Too many redirects'), null);
    return;
  }

  let baseUrl = WORDPRESS_URL;
  if (forceHttps && baseUrl.startsWith('http://')) {
    baseUrl = baseUrl.replace('http://', 'https://');
  }
  
  const url = new URL(endpoint, baseUrl);
  const auth = Buffer.from(`${USERNAME}:${PASSWORD}`).toString('base64');
  
  const options = {
    hostname: url.hostname,
    port: url.port || (url.protocol === 'https:' ? 443 : 80),
    path: url.pathname + url.search,
    method: 'GET',
    headers: {
      'Authorization': `Basic ${auth}`,
      'Content-Type': 'application/json',
      'User-Agent': 'WordPress-Export-Script/1.0',
      'Accept': 'application/json'
    },
    rejectUnauthorized: false
  };

  const protocol = url.protocol === 'https:' ? https : http;
  
  const req = protocol.request(options, (res) => {
    let data = '';
    
    res.on('data', (chunk) => {
      data += chunk;
    });
    
    res.on('end', () => {
      if (res.statusCode === 301 || res.statusCode === 302 || res.statusCode === 307 || res.statusCode === 308) {
        const location = res.headers.location;
        if (location) {
          if (location.startsWith('https://') && !baseUrl.startsWith('https://')) {
            return makeWordPressRequest(endpoint, callback, redirectCount + 1, true);
          }
          if (location.startsWith('/')) {
            return makeWordPressRequest(location, callback, redirectCount + 1, forceHttps);
          }
          try {
            const redirectUrl = new URL(location);
            const newEndpoint = redirectUrl.pathname + redirectUrl.search;
            const newBaseUrl = `${redirectUrl.protocol}//${redirectUrl.host}`;
            WORDPRESS_URL = newBaseUrl;
            return makeWordPressRequest(newEndpoint, callback, redirectCount + 1, redirectUrl.protocol === 'https:');
          } catch (e) {
            return makeWordPressRequest(location, callback, redirectCount + 1, forceHttps);
          }
        }
      }
      
      if (res.statusCode >= 200 && res.statusCode < 300) {
        try {
          const jsonData = JSON.parse(data);
          callback(null, jsonData);
        } catch (e) {
          callback(new Error(`Failed to parse JSON: ${e.message}`), null);
        }
      } else if (res.statusCode === 401) {
        callback(new Error(`Authentication failed`), null);
      } else {
        callback(new Error(`HTTP ${res.statusCode}: ${data.substring(0, 200)}`), null);
      }
    });
  });
  
  req.on('error', (error) => {
    if (!forceHttps && baseUrl.startsWith('http://') && error.code === 'ECONNREFUSED') {
      return makeWordPressRequest(endpoint, callback, redirectCount, true);
    }
    callback(error, null);
  });
  
  req.setTimeout(60000, () => {
    req.destroy();
    callback(new Error('Request timeout'), null);
  });
  
  req.end();
}

// Helper function for public requests (no auth)
function makePublicRequest(endpoint, callback) {
  const url = new URL(endpoint, WORDPRESS_URL);
  
  const options = {
    hostname: url.hostname,
    port: url.port || (url.protocol === 'https:' ? 443 : 80),
    path: url.pathname + url.search,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': 'WordPress-Export-Script/1.0',
      'Accept': 'application/json'
    },
    rejectUnauthorized: false
  };

  const protocol = url.protocol === 'https:' ? https : http;
  
  const req = protocol.request(options, (res) => {
    let data = '';
    
    res.on('data', (chunk) => {
      data += chunk;
    });
    
    res.on('end', () => {
      if (res.statusCode >= 200 && res.statusCode < 300) {
        try {
          const jsonData = JSON.parse(data);
          callback(null, jsonData);
        } catch (e) {
          callback(new Error(`Failed to parse JSON: ${e.message}`), null);
        }
      } else {
        callback(new Error(`HTTP ${res.statusCode}`), null);
      }
    });
  });
  
  req.on('error', (error) => {
    callback(error, null);
  });
  
  req.setTimeout(60000, () => {
    req.destroy();
    callback(new Error('Request timeout'), null);
  });
  
  req.end();
}

// Fetch all items with pagination
async function fetchAllItems(endpoint, itemName, useAuth = false) {
  const allItems = [];
  let page = 1;
  let hasMore = true;
  
  console.log(`\n📥 Fetching ${itemName}...`);
  
  while (hasMore) {
    try {
      await new Promise((resolve, reject) => {
        const separator = endpoint.includes('?') ? '&' : '?';
        const url = `${endpoint}${separator}per_page=100&page=${page}`;
        
        const requestFn = useAuth ? makeWordPressRequest : makePublicRequest;
        
        requestFn(url, (error, data) => {
          if (error) {
            reject(error);
            return;
          }
          
          if (Array.isArray(data) && data.length > 0) {
            allItems.push(...data);
            console.log(`  ✓ Page ${page}: ${data.length} items`);
            page++;
            
            if (data.length < 100) {
              hasMore = false;
            }
          } else {
            hasMore = false;
          }
          
          resolve();
        });
      });
    } catch (error) {
      console.error(`  ✗ Error fetching ${itemName} page ${page}:`, error.message);
      hasMore = false;
    }
  }
  
  console.log(`  ✅ Total ${itemName}: ${allItems.length}`);
  return allItems;
}

// Export pages
async function exportPages() {
  let pages = [];
  try {
    pages = await fetchAllItems('/wp-json/wp/v2/pages', 'pages', false);
  } catch (e) {
    console.log('  ⚠ Public endpoint failed, trying authenticated...');
    try {
      pages = await fetchAllItems('/wp-json/wp/v2/pages?context=edit', 'pages', true);
    } catch (e2) {
      console.log('  ⚠ Authenticated endpoint also failed');
    }
  }
  
  const pagesData = {
    export_date: EXPORT_DATE,
    total: pages.length,
    pages: pages.map(page => ({
      id: page.id,
      title: page.title?.rendered || page.title,
      slug: page.slug,
      content: page.content?.rendered || page.content,
      excerpt: page.excerpt?.rendered || page.excerpt,
      status: page.status,
      date: page.date,
      modified: page.modified,
      author: page.author,
      featured_media: page.featured_media,
      parent: page.parent,
      menu_order: page.menu_order,
      template: page.template || '',
      meta: page.meta || {},
      acf: page.acf || {},
      link: page.link,
      guid: page.guid?.rendered || page.guid
    }))
  };
  
  const filePath = path.join(OUTPUT_DIR, `pages-${EXPORT_DATE}.json`);
  fs.writeFileSync(filePath, JSON.stringify(pagesData, null, 2));
  console.log(`  💾 Saved: ${filePath}`);
  
  return pagesData;
}

// Export posts
async function exportPosts() {
  let posts = [];
  try {
    posts = await fetchAllItems('/wp-json/wp/v2/posts', 'posts', false);
  } catch (e) {
    console.log('  ⚠ Public endpoint failed, trying authenticated...');
    try {
      posts = await fetchAllItems('/wp-json/wp/v2/posts?context=edit', 'posts', true);
    } catch (e2) {
      console.log('  ⚠ Authenticated endpoint also failed');
    }
  }
  
  const postsData = {
    export_date: EXPORT_DATE,
    total: posts.length,
    posts: posts.map(post => ({
      id: post.id,
      title: post.title?.rendered || post.title,
      slug: post.slug,
      content: post.content?.rendered || post.content,
      excerpt: post.excerpt?.rendered || post.excerpt,
      status: post.status,
      date: post.date,
      modified: post.modified,
      author: post.author,
      featured_media: post.featured_media,
      categories: post.categories || [],
      tags: post.tags || [],
      format: post.format || 'standard',
      sticky: post.sticky || false,
      meta: post.meta || {},
      acf: post.acf || {},
      link: post.link,
      guid: post.guid?.rendered || post.guid
    }))
  };
  
  const filePath = path.join(OUTPUT_DIR, `posts-${EXPORT_DATE}.json`);
  fs.writeFileSync(filePath, JSON.stringify(postsData, null, 2));
  console.log(`  💾 Saved: ${filePath}`);
  
  return postsData;
}

// Export categories
async function exportCategories() {
  const categories = await fetchAllItems('/wp-json/wp/v2/categories', 'categories', false);
  const filePath = path.join(OUTPUT_DIR, `categories-${EXPORT_DATE}.json`);
  fs.writeFileSync(filePath, JSON.stringify(categories, null, 2));
  console.log(`  💾 Saved: ${filePath}`);
  return categories;
}

// Export tags
async function exportTags() {
  const tags = await fetchAllItems('/wp-json/wp/v2/tags', 'tags', false);
  const filePath = path.join(OUTPUT_DIR, `tags-${EXPORT_DATE}.json`);
  fs.writeFileSync(filePath, JSON.stringify(tags, null, 2));
  console.log(`  💾 Saved: ${filePath}`);
  return tags;
}

// Export media
async function exportMedia() {
  const media = await fetchAllItems('/wp-json/wp/v2/media', 'media', false);
  
  const mediaData = {
    export_date: EXPORT_DATE,
    total: media.length,
    media: media.map(item => ({
      id: item.id,
      title: item.title?.rendered || item.title,
      source_url: item.source_url,
      media_type: item.media_type,
      mime_type: item.mime_type,
      date: item.date,
      modified: item.modified,
      alt_text: item.alt_text,
      caption: item.caption?.rendered || item.caption,
      description: item.description?.rendered || item.description,
      link: item.link,
      guid: item.guid?.rendered || item.guid
    }))
  };
  
  const filePath = path.join(OUTPUT_DIR, `media-${EXPORT_DATE}.json`);
  fs.writeFileSync(filePath, JSON.stringify(mediaData, null, 2));
  console.log(`  💾 Saved: ${filePath}`);
  
  return mediaData;
}

// Export users
async function exportUsers() {
  const users = await fetchAllItems('/wp-json/wp/v2/users', 'users', true);
  
  const usersData = {
    export_date: EXPORT_DATE,
    total: users.length,
    users: users.map(user => ({
      id: user.id,
      name: user.name,
      slug: user.slug,
      email: user.email,
      url: user.url,
      description: user.description,
      registered_date: user.registered_date,
      roles: user.roles || [],
      avatar_urls: user.avatar_urls || {}
    }))
  };
  
  const filePath = path.join(OUTPUT_DIR, `users-${EXPORT_DATE}.json`);
  fs.writeFileSync(filePath, JSON.stringify(usersData, null, 2));
  console.log(`  💾 Saved: ${filePath}`);
  
  return usersData;
}

// Export comments
async function exportComments() {
  const comments = await fetchAllItems('/wp-json/wp/v2/comments', 'comments', false);
  
  const commentsData = {
    export_date: EXPORT_DATE,
    total: comments.length,
    comments: comments.map(comment => ({
      id: comment.id,
      post: comment.post,
      parent: comment.parent,
      author: comment.author,
      author_name: comment.author_name,
      author_email: comment.author_email,
      author_url: comment.author_url,
      date: comment.date,
      date_gmt: comment.date_gmt,
      content: comment.content?.rendered || comment.content,
      link: comment.link,
      status: comment.status,
      type: comment.type,
      meta: comment.meta || {}
    }))
  };
  
  const filePath = path.join(OUTPUT_DIR, `comments-${EXPORT_DATE}.json`);
  fs.writeFileSync(filePath, JSON.stringify(commentsData, null, 2));
  console.log(`  💾 Saved: ${filePath}`);
  
  return commentsData;
}

// Export menus
async function exportMenus() {
  console.log(`\n📥 Fetching menus...`);
  
  try {
    const menus = await new Promise((resolve, reject) => {
      makePublicRequest('/wp-json/wp/v2/menus', (error, data) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(data);
      });
    });
    
    const menusData = {
      export_date: EXPORT_DATE,
      menus: menus
    };
    
    if (Array.isArray(menus) && menus.length > 0) {
      menusData.menu_items = {};
      for (const menu of menus) {
        try {
          const menuItems = await fetchAllItems(`/wp-json/wp/v2/menus/${menu.id}/items`, `menu-${menu.id}-items`, false);
          menusData.menu_items[menu.id] = menuItems;
        } catch (error) {
          console.log(`  ⚠ Could not fetch menu items for menu ${menu.id}: ${error.message}`);
        }
      }
    }
    
    const filePath = path.join(OUTPUT_DIR, `menus-${EXPORT_DATE}.json`);
    fs.writeFileSync(filePath, JSON.stringify(menusData, null, 2));
    console.log(`  💾 Saved: ${filePath}`);
    
    return menusData;
  } catch (error) {
    try {
      const menuItems = await fetchAllItems('/wp-json/wp/v2/menu-items', 'menu-items', false);
      const menusData = {
        export_date: EXPORT_DATE,
        menu_items: menuItems
      };
      
      const filePath = path.join(OUTPUT_DIR, `menus-${EXPORT_DATE}.json`);
      fs.writeFileSync(filePath, JSON.stringify(menusData, null, 2));
      console.log(`  💾 Saved: ${filePath}`);
      
      return menusData;
    } catch (error2) {
      console.log(`  ⚠ Could not fetch menus: ${error.message}`);
      return null;
    }
  }
}

// Export taxonomies
async function exportTaxonomies() {
  console.log(`\n📥 Fetching taxonomies...`);
  
  try {
    const taxonomies = await new Promise((resolve, reject) => {
      makePublicRequest('/wp-json/wp/v2/taxonomies', (error, data) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(data);
      });
    });
    
    const filePath = path.join(OUTPUT_DIR, `taxonomies-${EXPORT_DATE}.json`);
    fs.writeFileSync(filePath, JSON.stringify(taxonomies, null, 2));
    console.log(`  💾 Saved: ${filePath}`);
    
    return taxonomies;
  } catch (error) {
    console.log(`  ⚠ Could not fetch taxonomies: ${error.message}`);
    return null;
  }
}

// Export settings
async function exportSettings() {
  console.log(`\n📥 Fetching settings...`);
  
  try {
    const settings = await new Promise((resolve, reject) => {
      makeWordPressRequest('/wp-json/wp/v2/settings', (error, data) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(data);
      });
    });
    
    const filePath = path.join(OUTPUT_DIR, `settings-${EXPORT_DATE}.json`);
    fs.writeFileSync(filePath, JSON.stringify(settings, null, 2));
    console.log(`  💾 Saved: ${filePath}`);
    
    return settings;
  } catch (error) {
    console.log(`  ⚠ Could not fetch settings: ${error.message}`);
    return null;
  }
}

// Export API routes
async function exportRoutes() {
  console.log(`\n📥 Fetching API routes...`);
  
  try {
    const routes = await new Promise((resolve, reject) => {
      makePublicRequest('/wp-json/', (error, data) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(data);
      });
    });
    
    const filePath = path.join(OUTPUT_DIR, `api-routes-${EXPORT_DATE}.json`);
    fs.writeFileSync(filePath, JSON.stringify(routes, null, 2));
    console.log(`  💾 Saved: ${filePath}`);
    
    return routes;
  } catch (error) {
    console.log(`  ⚠ Could not fetch routes: ${error.message}`);
    return null;
  }
}

// Main export function
async function exportAllData() {
  console.log('🚀 Starting WordPress Data Export (EXCLUDING PLUGINS)...');
  console.log(`📁 Output directory: ${OUTPUT_DIR}`);
  console.log(`🌐 WordPress URL: ${WORDPRESS_URL}`);
  console.log(`👤 Username: ${USERNAME}`);
  console.log(`📅 Export date: ${EXPORT_DATE}\n`);
  
  const exportSummary = {
    export_date: EXPORT_DATE,
    wordpress_url: WORDPRESS_URL,
    note: 'Plugins data excluded as per request',
    summary: {}
  };
  
  try {
    const pages = await exportPages();
    exportSummary.summary.pages = pages.total;
    
    const posts = await exportPosts();
    exportSummary.summary.posts = posts.total;
    
    const categories = await exportCategories();
    exportSummary.summary.categories = categories.length;
    
    const tags = await exportTags();
    exportSummary.summary.tags = tags.length;
    
    const media = await exportMedia();
    exportSummary.summary.media = media.total;
    
    const users = await exportUsers();
    exportSummary.summary.users = users.total;
    
    const comments = await exportComments();
    exportSummary.summary.comments = comments.total;
    
    const menus = await exportMenus();
    exportSummary.summary.menus_exported = menus !== null;
    
    const taxonomies = await exportTaxonomies();
    exportSummary.summary.taxonomies_exported = taxonomies !== null;
    
    const settings = await exportSettings();
    exportSummary.summary.settings_exported = settings !== null;
    
    const routes = await exportRoutes();
    exportSummary.summary.routes_exported = routes !== null;
    
    // Save summary
    const summaryPath = path.join(OUTPUT_DIR, `export-summary-${EXPORT_DATE}.json`);
    fs.writeFileSync(summaryPath, JSON.stringify(exportSummary, null, 2));
    
    console.log('\n✅ Export completed successfully!');
    console.log('\n📊 Export Summary:');
    console.log(`   📄 Pages: ${exportSummary.summary.pages}`);
    console.log(`   📝 Posts: ${exportSummary.summary.posts}`);
    console.log(`   📁 Categories: ${exportSummary.summary.categories}`);
    console.log(`   🏷️  Tags: ${exportSummary.summary.tags}`);
    console.log(`   🖼️  Media: ${exportSummary.summary.media}`);
    console.log(`   👥 Users: ${exportSummary.summary.users}`);
    console.log(`   💬 Comments: ${exportSummary.summary.comments || 0}`);
    console.log(`   📋 Menus: ${exportSummary.summary.menus_exported ? 'Yes' : 'No'}`);
    console.log(`   🗂️  Taxonomies: ${exportSummary.summary.taxonomies_exported ? 'Yes' : 'No'}`);
    console.log(`   ⚙️  Settings: ${exportSummary.summary.settings_exported ? 'Yes' : 'No'}`);
    console.log(`   🔌 Plugins: EXCLUDED`);
    console.log(`\n📁 All files saved to: ${OUTPUT_DIR}`);
    
  } catch (error) {
    console.error('\n❌ Export failed:', error.message);
    process.exit(1);
  }
}

// Run the export
exportAllData();
