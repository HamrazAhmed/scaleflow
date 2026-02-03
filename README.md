# Scale Flow Digital Website

A modern, responsive website built with Next.js, TypeScript, and Tailwind CSS. This project features a comprehensive suite of UI components from shadcn/ui, form handling with React Hook Form, and motion animations with Framer Motion.

## 🚀 Features

- **Next.js 14** - Latest React framework with App Router
- **TypeScript** - Type-safe development experience
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui Components** - Beautiful, accessible UI components
- **React Hook Form** - Efficient form state management
- **Framer Motion** - Smooth animations and transitions
- **Responsive Design** - Mobile-first approach
- **Dynamic Routes** - Blog posts with slug-based routing
- **Analytics** - Vercel Analytics integration

## 📋 Prerequisites

- **Node.js** (v18 or higher)
- **pnpm** (recommended) or npm

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd scale-flow-digital-website
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```
   Or if using npm:
   ```bash
   npm install
   ```

## 📖 How to Run

### Development Mode

Start the development server:

```bash
pnpm dev
```

Or with npm:
```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

The development server supports hot module replacement (HMR), so changes will be reflected instantly in the browser.

### Production Build

Build the application for production:

```bash
pnpm build
```

Then start the production server:

```bash
pnpm start
```

### Linting

Run ESLint to check code quality:

```bash
pnpm lint
```

## 📁 Project Structure

```
.
├── app/                          # Next.js App Router pages
│   ├── layout.tsx               # Root layout component
│   ├── page.tsx                 # Home page
│   ├── globals.css              # Global styles
│   ├── about/                   # About page
│   ├── blog/                    # Blog listing page
│   │   └── [slug]/              # Dynamic blog post page
│   ├── contact/                 # Contact page
│   ├── course/                  # Course page
│   ├── pricing/                 # Pricing page
│   ├── services/                # Services page
│   └── subscription/            # Subscription page
├── components/                   # Reusable React components
│   ├── header.tsx               # Navigation header
│   ├── footer.tsx               # Footer component
│   ├── hero-section.tsx         # Hero banner section
│   ├── discount-popup.tsx       # Discount popup modal
│   ├── theme-provider.tsx       # Theme configuration
│   └── ui/                      # shadcn/ui components
├── hooks/                        # Custom React hooks
│   ├── use-mobile.ts            # Mobile detection hook
│   └── use-toast.ts             # Toast notifications hook
├── lib/                          # Utility functions
│   └── utils.ts                 # Helper utilities
├── public/                       # Static assets
│   └── images/                  # Image files
├── styles/                       # Global stylesheets
├── next.config.mjs              # Next.js configuration
├── tsconfig.json                # TypeScript configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── components.json              # Component configuration
└── package.json                 # Project dependencies
```

## 🛠 Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint checks |

## 📦 Key Dependencies

- **Next.js** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - Component library
- **@radix-ui** - Headless UI components
- **React Hook Form** - Form management
- **Framer Motion** - Animations
- **Lucide React** - Icon library
- **Date-fns** - Date utilities
- **clsx** - Utility for classname management

## 🎨 Customization

### Theme Configuration
Modify the theme in `components/theme-provider.tsx` to customize colors and styles.

### Component Customization
UI components are located in `components/ui/` and can be customized using Tailwind CSS classes.

### Pages
Add new pages by creating files in the `app/` directory following Next.js App Router conventions.

## 📝 Environment Variables

Create a `.env.local` file in the root directory (if needed for your project):

```bash
# Example environment variables
# NEXT_PUBLIC_API_URL=your_api_url
```

## 🚀 Deployment

### Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to a Git repository
2. Import the project on Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Click "Deploy"

### Other Deployment Options

- **Docker** - Build with `pnpm build` and serve with Node.js
- **Traditional Hosting** - Build the project and use any Node.js hosting service

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [TypeScript](https://www.typescriptlang.org)

## 📄 License

This project is private. All rights reserved.

## 🤝 Support

For issues, questions, or suggestions, please create an issue in the repository.
