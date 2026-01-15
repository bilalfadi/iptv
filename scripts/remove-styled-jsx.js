/**
 * Remove styled-jsx blocks from all page files
 */

const fs = require('fs');
const path = require('path');

const APP_DIR = path.join(__dirname, '..', 'app');

const pagesToFix = [
  'contact-us/page.tsx',
  'privacy-policy/page.tsx',
  'terms-of-use/page.tsx',
  'dmca-policy-for-iptv-tv/page.tsx',
  'refund-policy/page.tsx',
  'iptv-reseller/page.tsx',
  'iptv-trial/page.tsx',
  'installation-tutorial/page.tsx',
  'pricing/page.tsx',
  'contact/page.tsx',
  'refund/page.tsx',
  'reseller/page.tsx',
  'trial/page.tsx',
  'faq/page.tsx',
];

console.log('🔧 Removing styled-jsx blocks from pages...\n');

let fixed = 0;

pagesToFix.forEach((pagePath) => {
  const fullPath = path.join(APP_DIR, pagePath);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`⏭️  Skipping: ${pagePath} (not found)`);
    return;
  }

  let content = fs.readFileSync(fullPath, 'utf8');
  
  // Remove styled-jsx block
  const styledJsxRegex = /<style jsx global>{\s*`[\s\S]*?`\s*}<\/style>/g;
  const originalLength = content.length;
  content = content.replace(styledJsxRegex, '');
  
  if (content.length !== originalLength) {
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`✅ Fixed: ${pagePath}`);
    fixed++;
  } else {
    console.log(`⏭️  Skipping: ${pagePath} (no styled-jsx found)`);
  }
});

console.log(`\n📊 Summary: Fixed ${fixed} pages`);
console.log('✅ All styled-jsx blocks removed!');
