# WordPress Data Export Script

This script exports all WordPress data (pages, posts, plugins, media, etc.) from a WordPress site using the WordPress REST API.

## Features

- ✅ Exports all **Pages**
- ✅ Exports all **Posts**
- ✅ Exports **Categories** and **Tags**
- ✅ Exports **Media** files metadata
- ✅ Exports **Users** data
- ✅ Exports **Custom Post Types** (plugin data)
- ✅ Exports **Settings**
- ✅ Handles pagination automatically
- ✅ Saves data as JSON files

## Usage

### Method 1: Command Line Arguments (Quick)
```bash
node scripts/export-wordpress-data.js [URL] [USERNAME] [PASSWORD]
```

Example:
```bash
node scripts/export-wordpress-data.js http://4kxtreamiptv.com admin your-password
```

### Method 2: Environment Variables (Recommended)
```bash
# Windows PowerShell
$env:WP_URL="http://4kxtreamiptv.com"
$env:WP_USERNAME="admin"
$env:WP_PASSWORD="your-password"
node scripts/export-wordpress-data.js

# Windows CMD
set WP_URL=http://4kxtreamiptv.com
set WP_USERNAME=admin
set WP_PASSWORD=your-password
node scripts/export-wordpress-data.js

# Linux/Mac
export WP_URL=http://4kxtreamiptv.com
export WP_USERNAME=admin
export WP_PASSWORD=your-password
node scripts/export-wordpress-data.js
```

### Method 3: Using npm script
```bash
npm run export-wp
```
(Update credentials in the script file first, or use environment variables)

3. **Find exported data** in `wordpress-export/` directory:
   - `pages-YYYY-MM-DD.json` - All pages
   - `posts-YYYY-MM-DD.json` - All posts
   - `categories-YYYY-MM-DD.json` - Categories
   - `tags-YYYY-MM-DD.json` - Tags
   - `media-YYYY-MM-DD.json` - Media files metadata
   - `users-YYYY-MM-DD.json` - Users
   - `plugins-data-YYYY-MM-DD.json` - Plugin data
   - `settings-YYYY-MM-DD.json` - Settings
   - `export-summary-YYYY-MM-DD.json` - Export summary

## Requirements

- Node.js installed
- WordPress site with REST API enabled
- Admin credentials with API access

## Security Note

⚠️ **Important**: Never commit credentials or exported data to version control. The `.gitignore` file is configured to exclude these files.

## WordPress REST API

The script uses WordPress REST API endpoints:
- `/wp-json/wp/v2/pages` - Pages
- `/wp-json/wp/v2/posts` - Posts
- `/wp-json/wp/v2/categories` - Categories
- `/wp-json/wp/v2/tags` - Tags
- `/wp-json/wp/v2/media` - Media
- `/wp-json/wp/v2/users` - Users
- `/wp-json/wp/v2/types` - Custom post types

## Troubleshooting

If you encounter authentication errors:
1. Make sure WordPress REST API is enabled
2. Verify credentials are correct
3. Check if the user has proper permissions
4. Some WordPress installations may require Application Passwords instead of regular passwords
