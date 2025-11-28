# Open WebUI Frontend

This is a SvelteKit-based frontend application for AI chat interactions, imported from GitHub.

## Overview

- **Project**: Open WebUI
- **Framework**: SvelteKit + Vite
- **Version**: 0.6.40
- **Type**: Frontend-only application
- **Port**: 5000
- **Language**: Default Polish (pl-PL)

## Features

- Responsive design for desktop, laptop, and mobile
- Markdown and LaTeX support for rich text formatting
- Multilingual support with i18n (default: Polish)
- Customizable UI with dark mode and theme support
- Advanced text editor with TipTap
- Real-time chat interface
- Fast loading with optimized build
- Sidebar with push-layout (content shifts right when sidebar opens)

## Recent Changes

**November 28, 2025**
- Set default language to Polish (pl-PL) in config and i18n
- Changed sidebar layout from fixed/overlay to flex-based push layout
  - Content now shifts right when sidebar opens/closes
  - Removed absolute positioning, uses flex container
  - Smooth transitions with duration-300
- Replaced user avatars with Settings SVG icon
- Updated dropdown menu icon to UserGroup SVG (matches admin panel)
- Changed sidebar logo to custom OpenAI SVG
- Removed model avatars from chat interface
- Removed splash screens for faster loading
- Removed build optimizations (sourcemaps, minification) for speed

## Project Architecture

### Directory Structure
```
vite-main/
├── src/
│   ├── lib/          # Reusable components and utilities
│   ├── routes/       # SvelteKit routes
│   ├── app.html      # Main HTML template
│   └── app.css       # Global styles
├── static/
│   └── assets/       # Static assets (emoji SVGs, etc.)
├── package.json      # Dependencies and scripts
├── vite.config.ts    # Vite configuration (already configured for Replit)
├── svelte.config.js  # SvelteKit configuration
└── tsconfig.json     # TypeScript configuration
```

### Key Configuration

**vite.config.ts** is configured for Replit environment:
- Host: `0.0.0.0`
- Port: `5000`
- AllowedHosts: `true` (required for Replit proxy)
- CORS: enabled
- Build optimizations: disabled for faster loading

### Build System

- **Package Manager**: npm
- **Build Tool**: Vite 5.4+
- **Adapter**: `@sveltejs/adapter-static` (for static site generation)
- **Output Directory**: `vite-main/build/`
- **SSR**: Disabled (client-side SPA)

## Development

### Running Locally
The development server runs automatically via the "Start application" workflow:
```bash
cd vite-main && npm run dev
```

### Available Scripts
- `npm run dev` - Start development server (port 5000)
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - Type checking
- `npm run lint` - Run linting
- `npm run format` - Format code with Prettier

### Dependencies

**Note**: This project requires `--legacy-peer-deps` flag due to peer dependency conflicts between TipTap editor packages. This is safe and doesn't affect functionality.

### Prerequisites
- Node.js >= 18.13.0 (Node.js 20 is installed)
- npm >= 6.0.0

## Deployment

Configured for static deployment:
- **Build Command**: `cd vite-main && npm install --legacy-peer-deps && npm run build`
- **Public Directory**: `vite-main/build`
- **Deployment Type**: Static site

The application builds to static HTML/CSS/JS files that can be served from any static hosting.

## UI Customization Details

### Custom Icons
- **User Avatar**: Settings SVG icon (replaced profile pictures)
- **Dropdown Menu**: UserGroup SVG icon (matches admin panel)
- **Sidebar Logo**: Custom OpenAI SVG logo

### Layout
- **Sidebar**: Flex-based layout that pushes content right when opened
- **Language**: Default Polish (pl-PL)
- **Theme**: Dark mode optimized

### Performance
- Splash screens removed
- Build optimizations disabled (sourcemaps, minification)
- Client-side SPA for fast interactions

## Known Issues

- Some packages have deprecation warnings (non-critical)
- 4 npm vulnerabilities (2 low, 2 moderate) - review with `npm audit`
- TipTap packages require `--legacy-peer-deps` flag

## User Preferences

- Polish speaker, prioritizes speed over build optimizations
- Uses exact SVG code provided (fill="#000000" preserved)
- Sidebar should push content, not overlay
- Default language must be Polish
