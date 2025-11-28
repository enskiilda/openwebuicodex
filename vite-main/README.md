# Open WebUI Frontend

A SvelteKit-based frontend application for AI chat interactions.

## Features

- 📱 **Responsive Design**: Desktop, laptop, and mobile support
- ✒️ **Markdown and LaTeX**: Full support for rich text formatting
- 🌐 **Multilingual**: Internationalization (i18n) support
- 🎨 **Customizable UI**: Dark mode and theme support

## Getting Started

### Prerequisites

- Node.js >= 18.13.0

### Installation

```bash
npm install --legacy-peer-deps
```

> Note: The `--legacy-peer-deps` flag is required due to peer dependency conflicts between TipTap editor packages. This is safe to use and doesn't affect functionality.

### Development

```bash
npm run dev
```

The application will be available at `http://localhost:5000`.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - Type checking
- `npm run lint` - Run linting
- `npm run format` - Format code

## License

MIT License
