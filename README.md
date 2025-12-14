# WedNest - Wedding Marketplace

A production-ready Next.js application for discovering and booking wedding vendors in Tier-2 and Tier-3 cities across Telangana.

## Features

- 🏙️ **City-based vendor search** - Browse vendors by city (Nizamabad, Warangal, Karimnagar, Kamareddy)
- 📸 **Multiple categories** - Venue, Photography, Makeup, Decor
- 🤖 **AI Budget Planner** - Get AI-powered budget breakdowns for your wedding
- ✅ **Verified vendors** - All vendors are physically verified
- 📱 **Responsive design** - Works seamlessly on mobile and desktop
- ⚡ **Fast performance** - Built with Next.js 15 and optimized for production

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **AI:** Google Gemini API

## Prerequisites

- Node.js 18+ installed
- A Gemini API key (get one from [Google AI Studio](https://makersuite.google.com/app/apikey))

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_GEMINI_API_KEY=your_api_key_here
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
wednest app/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Home page
│   ├── ai/                 # AI Planner page
│   ├── about/              # About page
│   ├── account/            # Account page
│   └── browse/             # Browse vendors page
├── components/             # React components
│   ├── Header.tsx          # Navigation header
│   ├── HomePage.tsx        # Home page content
│   ├── BrowseView.tsx      # Browse vendors view
│   ├── AIPlannerView.tsx   # AI budget planner
│   ├── AboutView.tsx       # About page content
│   ├── AccountView.tsx     # Account page content
│   ├── PopularCities.tsx   # Popular cities section
│   ├── VendorCard.tsx     # Vendor card component
│   └── Logo.tsx            # Logo component
├── lib/                    # Utilities and constants
│   ├── constants.ts        # Data constants (cities, categories, vendors)
│   └── animations.ts        # Framer Motion animation variants
├── services/               # API services
│   └── geminiService.ts    # Gemini AI service
└── types.ts                # TypeScript type definitions
```

## Key Features Implementation

### AI Budget Planner
The AI Budget Planner uses Google's Gemini API to generate personalized budget breakdowns based on:
- City location
- Guest count
- Total budget

### Vendor Search
- Search by name or category
- Filter by city
- Filter by category
- Real-time results

### Responsive Design
- Mobile-first approach
- Optimized images with Next.js Image component
- Smooth animations with Framer Motion

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_GEMINI_API_KEY` | Google Gemini API key for AI features | Yes |

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

This app is ready to deploy on:
- Vercel (recommended)
- Netlify
- Any Node.js hosting platform

## License

© 2024 WedNest India Pvt Ltd. All rights reserved.
