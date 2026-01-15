/**
 * Generate individual Next.js pages from WordPress pages
 */

const fs = require('fs');
const path = require('path');

const EXPORT_DATE = '2026-01-15';
const FILES_DIR = path.join(__dirname, '..', 'files');
const APP_DIR = path.join(__dirname, '..', 'app');

// Read pages data
const pagesFile = path.join(FILES_DIR, `pages-${EXPORT_DATE}.json`);
const pagesData = JSON.parse(fs.readFileSync(pagesFile, 'utf8'));

// Page template
const pageTemplate = (title, content, slug) => `import { getPageBySlug, processContent } from '@/lib/wordpress-data';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const page = getPageBySlug('${slug}');
  return {
    title: page?.title || '${title}',
    description: typeof page?.excerpt === 'string' 
      ? page.excerpt 
      : page?.excerpt?.rendered || '',
  };
}

export default function Page() {
  const page = getPageBySlug('${slug}');
  
  if (!page) {
    return null;
  }

  const processedContent = processContent(page.content);

  return (
    <main className="min-h-screen bg-gradient-to-r from-[#281a4e] via-[#2d1f5a] to-[#ff9500] relative overflow-hidden">
      <div className="relative z-10">
        <Header />
        <article className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                {page.title}
              </h1>
              
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: processedContent }}
              />
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </main>
  );
}
`;

// Pages to skip (already exist or special cases)
const skipPages = ['home', 'shop', 'cart', 'checkout', 'my-account'];

// Generate pages
console.log('📄 Generating Next.js pages from WordPress pages...\n');

let created = 0;
let skipped = 0;

pagesData.pages?.forEach((page) => {
  if (!page.slug || page.status !== 'publish') {
    return;
  }

  // Skip special pages
  if (skipPages.includes(page.slug)) {
    console.log(`⏭️  Skipping: ${page.slug} (special page)`);
    skipped++;
    return;
  }

  // Create directory for page
  const pageDir = path.join(APP_DIR, page.slug);
  
  // Check if directory already exists
  if (fs.existsSync(pageDir)) {
    console.log(`⏭️  Skipping: ${page.slug} (already exists)`);
    skipped++;
    return;
  }

  // Create directory
  fs.mkdirSync(pageDir, { recursive: true });

  // Create page.tsx
  const pageFile = path.join(pageDir, 'page.tsx');
  const content = pageTemplate(page.title, page.content, page.slug);
  fs.writeFileSync(pageFile, content, 'utf8');

  console.log(`✅ Created: /${page.slug}`);
  created++;
});

console.log(`\n📊 Summary:`);
console.log(`   ✅ Created: ${created}`);
console.log(`   ⏭️  Skipped: ${skipped}`);
console.log(`\n✅ Page generation completed!`);
