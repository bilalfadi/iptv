/**
 * WordPress Data Loading Utilities
 * Loads data from locally exported JSON files (no API calls)
 */

import fs from 'fs';
import path from 'path';

const EXPORT_DATE = '2026-01-15';
const FILES_DIR = path.join(process.cwd(), 'files');

// Cache for loaded data
let dataCache: Record<string, any> = {};

// Helper to read JSON file
function readJSONFile(filename: string): any {
  // Check cache first
  if (dataCache[filename]) {
    return dataCache[filename];
  }

  try {
    const filePath = path.join(FILES_DIR, filename);
    
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      console.warn(`File not found: ${filename}`);
      return null;
    }
    
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContents);
    
    // Cache the data
    dataCache[filename] = data;
    
    return data;
  } catch (error) {
    console.error(`Error reading ${filename}:`, error);
    return null;
  }
}

// Get all pages
export function getAllPages() {
  const data = readJSONFile(`pages-${EXPORT_DATE}.json`);
  return data?.pages || [];
}

// Get page by slug
export function getPageBySlug(slug: string) {
  const pages = getAllPages();
  return pages.find((page: any) => page.slug === slug) || null;
}

// Get page by ID
export function getPageById(id: number) {
  const pages = getAllPages();
  return pages.find((page: any) => page.id === id) || null;
}

// Get front page (WordPress front page)
export function getFrontPage() {
  // WordPress front page ID is 14
  return getPageById(14);
}

// Get all posts
export function getAllPosts() {
  const data = readJSONFile(`posts-${EXPORT_DATE}.json`);
  return data?.posts || [];
}

// Get post by slug
export function getPostBySlug(slug: string) {
  const posts = getAllPosts();
  return posts.find((post: any) => post.slug === slug) || null;
}

// Get categories
export function getCategories() {
  const data = readJSONFile(`categories-${EXPORT_DATE}.json`);
  return Array.isArray(data) ? data : [];
}

// Get tags
export function getTags() {
  const data = readJSONFile(`tags-${EXPORT_DATE}.json`);
  return Array.isArray(data) ? data : [];
}

// Get media items
export function getMediaItems() {
  const data = readJSONFile(`media-${EXPORT_DATE}.json`);
  return data?.media || [];
}

// Get media by ID
export function getMediaById(id: number) {
  const media = getMediaItems();
  return media.find((item: any) => item.id === id) || null;
}

// Get menus
export function getMenus() {
  const data = readJSONFile(`menus-${EXPORT_DATE}.json`);
  return data || null;
}

// Get export summary
export function getExportSummary() {
  const data = readJSONFile(`export-summary-${EXPORT_DATE}.json`);
  return data || null;
}

// Convert WordPress image URL to local path
// This will be used after images are downloaded
export function getLocalImagePath(wordpressUrl: string): string {
  // Extract filename from WordPress URL
  const urlParts = wordpressUrl.split('/');
  const filename = urlParts[urlParts.length - 1];
  
  // Check if image exists locally
  const localPath = `/images/${filename}`;
  return localPath;
}

// Process WordPress content HTML
// Remove WordPress domain URLs and replace with local paths
export function processContent(content: string | null | undefined): string {
  if (!content) return '';
  
  // Ensure content is a string
  const contentStr = typeof content === 'string' ? content : String(content || '');
  let processed = contentStr;
  
  // Replace WordPress image URLs with local paths (preserve directory structure)
  // Match: https://4kxtreamiptv.com/wp-content/uploads/...
  processed = processed.replace(
    /https?:\/\/4kxtreamiptv\.com\/wp-content\/uploads\//g,
    '/images/wp-content/uploads/'
  );
  
  // Also handle http:// URLs
  processed = processed.replace(
    /http:\/\/4kxtreamiptv\.com\/wp-content\/uploads\//g,
    '/images/wp-content/uploads/'
  );
  
  // Replace srcset attributes (for responsive images)
  processed = processed.replace(
    /srcset=["']([^"']*https?:\/\/4kxtreamiptv\.com\/wp-content\/uploads\/[^"']*)["']/g,
    (match, srcset) => {
      const updatedSrcset = srcset.replace(
        /https?:\/\/4kxtreamiptv\.com\/wp-content\/uploads\//g,
        '/images/wp-content/uploads/'
      );
      return `srcset="${updatedSrcset}"`;
    }
  );
  
  // Replace other WordPress domain URLs (but keep relative paths)
  processed = processed.replace(
    /https?:\/\/4kxtreamiptv\.com\//g,
    '/'
  );
  
  // Remove WordPress domain from links but keep the path
  processed = processed.replace(
    /href=["']https?:\/\/4kxtreamiptv\.com([^"']+)["']/g,
    'href="$1"'
  );
  
  // Remove WordPress domain from src attributes
  processed = processed.replace(
    /src=["']https?:\/\/4kxtreamiptv\.com([^"']+)["']/g,
    'src="$1"'
  );
  
  // Add alt text to images that don't have it (SEO enhancement)
  processed = processed.replace(
    /<img([^>]*?)(?:\s+alt=["'][^"']*["'])?([^>]*?)>/gi,
    (match, beforeAlt, afterAlt) => {
      // Check if alt already exists
      if (/alt=["']/.test(match)) {
        return match; // Keep existing alt
      }
      
      // Extract src to generate alt text from filename
      const srcMatch = match.match(/src=["']([^"']+)["']/i);
      if (srcMatch) {
        const src = srcMatch[1];
        // Extract filename from path
        const filename = src.split('/').pop()?.split('.')[0] || 'image';
        // Convert filename to readable text (replace dashes/underscores with spaces)
        const altText = filename.replace(/[-_]/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());
        return `<img${beforeAlt} alt="${altText} - 4K Xtream IPTV"${afterAlt}>`;
      }
      
      return match; // If no src, return as is
    }
  );
  
  return processed;
}

// Get all published pages
export function getPublishedPages() {
  return getAllPages().filter((page: any) => page.status === 'publish');
}

// Get all published posts
export function getPublishedPosts() {
  return getAllPosts().filter((post: any) => post.status === 'publish');
}

// Get users/authors
export function getUsers() {
  const data = readJSONFile(`users-${EXPORT_DATE}.json`);
  return data?.users || [];
}
