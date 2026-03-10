import { NextResponse } from 'next/server'
import { getPublishedPosts, getPublishedPages, getCategories, getUsers } from '@/lib/wordpress-data'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.4kxtreamiptv.com'

// Core App Router pages (without WordPress-origin pages)
const appBasePaths = [
  '/', // Home
  '/pricing',
  '/iptv-trial',
  '/iptv-reseller',
  '/installation-tutorial',
  '/faqs',
  '/contact-us',
]

const locales = ['en', 'de', 'tr'] as const

export async function GET() {
  const now = new Date().toISOString()

  const urlEntries: string[] = []

  // 1) App routes for all locales
  for (const path of appBasePaths) {
    for (const locale of locales) {
      const prefix = locale === 'en' ? '' : `/${locale}`
      const loc =
        path === '/'
          ? `${baseUrl}${prefix || ''}/`
          : `${baseUrl}${prefix}${path}`

      urlEntries.push(`  <url>
    <loc>${loc}</loc>
    <lastmod>${now}</lastmod>
  </url>`)
    }
  }

  // 2) WordPress pages
  try {
    const pages = getPublishedPages()
    const excludedSlugs = ['my-account', 'checkout', 'cart', 'shop', 'home']
    const filteredPages = pages.filter((page: any) => !excludedSlugs.includes(page.slug))

    const uniquePagesMap = new Map<string, any>()
    filteredPages.forEach((page: any) => {
      const existing = uniquePagesMap.get(page.slug)
      if (!existing || new Date(page.modified || page.date) > new Date(existing.modified || existing.date)) {
        uniquePagesMap.set(page.slug, page)
      }
    })

    Array.from(uniquePagesMap.values()).forEach((page: any) => {
      const lastmod = page.modified ? new Date(page.modified).toISOString() : new Date(page.date).toISOString()
      const url = page.link || `${baseUrl}/${page.slug}/`
      urlEntries.push(`  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`)
    })
  } catch (e) {
    console.error('Error adding WP pages to sitemap:', e)
  }

  // 3) WordPress posts
  try {
    const posts = getPublishedPosts()
    const uniquePostsMap = new Map<string, any>()
    posts.forEach((post: any) => {
      const existing = uniquePostsMap.get(post.slug)
      if (!existing || new Date(post.modified || post.date) > new Date(existing.modified || existing.date)) {
        uniquePostsMap.set(post.slug, post)
      }
    })

    Array.from(uniquePostsMap.values()).forEach((post: any) => {
      const lastmod = post.modified ? new Date(post.modified).toISOString() : new Date(post.date).toISOString()
      const url = post.link || `${baseUrl}/${post.slug}/`
      urlEntries.push(`  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`)
    })
  } catch (e) {
    console.error('Error adding WP posts to sitemap:', e)
  }

  // 4) Categories
  try {
    const categories = getCategories()
    const lastmod = now
    categories.forEach((category: any) => {
      const url = category.link || `${baseUrl}/category/${category.slug}/`
      urlEntries.push(`  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`)
    })
  } catch (e) {
    console.error('Error adding WP categories to sitemap:', e)
  }

  // 5) Authors
  try {
    const users = getUsers()
    const lastmod = now
    users.forEach((user: any) => {
      const url = user.url || `${baseUrl}/author/${user.slug}/`
      urlEntries.push(`  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`)
    })
  } catch (e) {
    console.error('Error adding WP authors to sitemap:', e)
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries.join('\n')}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}

