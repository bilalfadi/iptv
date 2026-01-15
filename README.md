# 4K Xtream IPTV - Next.js Website

Modern, responsive Next.js website for 4K Xtream IPTV service with beautiful UI/UX design.

## Features

- 🎨 Modern, beautiful design with Tailwind CSS
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast performance with Next.js 14
- 🎭 Smooth animations and transitions
- 🔍 SEO optimized
- ♿ Accessible components
- 🌐 Multi-language support ready

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations (ready to use)
- **Lucide React** - Icons

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section
│   ├── Features.tsx     # Features section
│   ├── Pricing.tsx      # Pricing plans
│   ├── Benefits.tsx     # Benefits section
│   ├── HowToSubscribe.tsx # How to subscribe
│   ├── FAQ.tsx          # FAQ section
│   └── Footer.tsx       # Footer
├── data/
│   └── siteData.ts      # All site content/data
└── public/              # Static assets
```

## Customization

All content is stored in `data/siteData.ts`. You can easily update:
- Company information
- Pricing plans
- Features
- FAQ items
- Navigation links
- Footer content

## Sections

1. **Header** - Navigation with contact info
2. **Hero** - Main banner with CTA
3. **Features** - Key features grid
4. **Pricing** - Subscription plans (Single & Family)
5. **Benefits** - What we offer
6. **How to Subscribe** - 3-step process
7. **FAQ** - Frequently asked questions
8. **Footer** - Links and contact info

## License

This project is private and proprietary.

