# WailBrew Landing Page

A modern, responsive landing page for WailBrew - a minimalistic Homebrew GUI for macOS. Built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Contemporary dark theme with gradient accents and glassmorphism effects
- **Responsive**: Fully responsive design optimized for all screen sizes
- **Fast Performance**: Built with Next.js 15 for optimal performance and SEO
- **Smooth Animations**: Sophisticated animations with staggered reveals and hover effects
- **Accessible**: Semantic HTML with proper focus states and keyboard navigation
- **Design System**: Consistent typography scale and component library

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Custom SVG icons
- **Fonts**: Geist Sans and Geist Mono

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/wickenico/WailBrew-site.git
cd WailBrew-site
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build & Deploy

To build the project for production:

```bash
npm run build
```

To start the production server:

```bash
npm run start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main landing page
└── components/
    └── icons.tsx            # Custom SVG icon components
```

## 🎨 Design Features

- **Hero Section**: Full-screen hero with animated gradient text and glowing elements
- **Features Section**: Card-based layout with hover effects and icon animations
- **Download Section**: Dual-column layout with prominent call-to-action buttons
- **Screenshots Section**: Placeholder cards with subtle animations
- **Navigation**: Glassmorphism navigation bar with backdrop blur
- **Typography**: Responsive typography scale with perfect line heights
- **Color System**: Carefully crafted dark theme with accessibility in mind

## 🌟 Customization

The design uses CSS custom properties for easy theming. You can modify colors in `src/app/globals.css`:

```css
:root {
  --background: #0a0a0a;
  --foreground: #ededed;
  --primary: #3b82f6;
  --accent: #10b981;
  /* ... more variables */
}
```

## 📱 Mobile Responsive

The landing page is fully responsive with:
- Mobile-first design approach
- Responsive grid layouts
- Touch-friendly navigation
- Optimized animations for mobile devices

## 🔧 Development

- Run linting: `npm run lint`
- Build the project: `npm run build`
- Start development server: `npm run dev`

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ for the WailBrew project
