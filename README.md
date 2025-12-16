# LockerLink About/Contact Page

A beautiful, interactive About/Contact page for LockerLink, built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Modern Design**: Matches LockerLink's design system with primary blue (#007AFF), clean typography, and rounded corners
- 🎭 **Interactive Mode Switcher**: Switch between Athlete, Coach, Mentor, and Parent/Admin views
- ✨ **Smooth Animations**: Framer Motion animations with scroll triggers and hover effects
- 📊 **Animated Statistics**: Count-up animations for platform metrics
- 💬 **Testimonials Carousel**: Rotating testimonials from the community
- 📝 **Contact Form**: Functional contact form with validation
- 📱 **Fully Responsive**: Mobile-first design with touch-optimized interactions
- ♿ **Accessible**: ARIA labels, keyboard navigation, and high contrast ratios

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
/app
  /layout.tsx          # Root layout with metadata
  /page.tsx            # Main About/Contact page
  /globals.css         # Global styles and Tailwind imports
/components            # (Future: reusable components)
/public               # Static assets
```

## Design System

- **Colors**: Primary blue (#007AFF), background (#F9FAFB), slate grays (#0F172A, #64748B)
- **Typography**: Inter font family
- **Spacing**: Generous padding, max-width containers (max-w-5xl, max-w-7xl)
- **Border Radius**: Rounded-xl, rounded-2xl, rounded-3xl
- **Animations**: Framer Motion for smooth transitions

## Sections

1. **Hero Section**: Headline, subheadline, and CTAs
2. **Why LockerLink**: Value propositions in card format
3. **Mode Breakdown**: Interactive switcher showing features for each user type
4. **How It Works**: Step-by-step process
5. **Features Showcase**: Key platform features
6. **Statistics**: Animated counters showing platform metrics
7. **Testimonials**: Rotating carousel of community quotes
8. **Contact**: Contact form and support links
9. **Footer CTA**: Final call-to-action

## Tech Stack

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library

## Deployment

This project can be deployed on Vercel:

1. Push to GitHub
2. Import project in Vercel
3. Deploy!

## License

MIT

