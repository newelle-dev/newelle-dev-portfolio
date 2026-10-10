# Newelle Portfolio

A modern, responsive portfolio website showcasing projects, experience, and services. Built with Next.js, React, and Tailwind CSS for a sleek, professional presentation.

## 🌟 Features

- **Responsive Design** - Fully responsive layout that works seamlessly on mobile, tablet, and desktop
- **Modern Animations** - Smooth animations powered by Framer Motion for engaging user interactions
- **Hero Section** - Eye-catching landing section to capture attention
- **Project Showcase** - Display of featured projects with dedicated cards and showcase sections
- **Projects Page** - Dedicated /projects route to browse the full project catalog
- **Shopify Integration** - Specialized section highlighting Shopify-related work
- **About Section** - Professional biography and background information
- **Contact Section** - Easy-to-use contact links for Email, LinkedIn, GitHub, and WhatsApp
- **Navigation** - Smooth, intuitive navigation bar with mobile support
- **Dark Theme** - Modern dark theme with floating decorative icons

## 🛠️ Tech Stack

- **Framework**: [Next.js 16.1.1](https://nextjs.org/)
- **React**: 19.2.3
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion 12.24.7](https://www.framer.com/motion/)
- **Icons**: [Lucide React 0.562.0](https://lucide.dev/)
- **Language**: TypeScript
- **Linting**: ESLint

## 📁 Project Structure

```
components/          # Reusable React components
├── ExperienceSection.tsx     # Work experience section
├── FooterSection.tsx         # Footer with social links
├── GitHubSection.tsx         # Live GitHub contribution graph
├── HeroSection.tsx           # Hero/landing section
├── Navigation.tsx            # Floating pill navigation bar
├── ProjectFeatureSection.tsx # Individual project feature card
├── ProjectsSection.tsx       # Projects showcase section
├── TechStackSection.tsx      # Tech stack pills section
├── ThemeProvider.tsx         # Next-themes wrapper
└── ThemeToggle.tsx           # Light/dark mode toggle

lib/                 # Utility functions and portfolio data
├── experience.ts             # Experience data
├── projects.ts               # Featured projects data
└── utils.ts                  # Helper utilities

types/               # TypeScript type definitions
├── global.d.ts               # Global type declarations
└── types.ts                  # App-specific types

app/                 # Next.js app directory
├── layout.tsx                # Root layout component
├── page.tsx                  # Home page
└── globals.css               # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd newelle-dev
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint to check code quality

## 🎨 Customization

### Styling

- **Tailwind CSS**: Modify `tailwind.config.ts` for theme customization
- **Global Styles**: Update `app/globals.css` for global styling changes
- **Components**: Each component has scoped Tailwind classes for easy customization

### Content

- **Hero Section**: Edit [components/HeroSection.tsx](components/HeroSection.tsx) to customize the hero text and CTA
- **Projects Data**: Update [lib/projects.ts](lib/projects.ts) to add/remove projects for both homepage featured cards and the /projects page
- **About**: Modify [components/AboutSection.tsx](components/AboutSection.tsx) with your biography
- **Contact**: Customize [components/ContactSection.tsx](components/ContactSection.tsx) with your contact details

### Colors & Theme

Adjust the color scheme in your Tailwind configuration or modify the `className` properties in components.

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file if you need environment-specific variables:

```
# Add any required environment variables here
```

### Next.js Config

Modify [next.config.ts](next.config.ts) for Next.js-specific settings.

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints managed by Tailwind CSS:

- Mobile-first approach
- Adaptive navigation with mobile support
- Touch-friendly interactive elements
- Optimized performance for all devices

## 🚀 Deployment

### Vercel (Recommended for Next.js)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Vercel automatically deploys on push

### Other Platforms

- **Netlify**: Requires Next.js adapter
- **Traditional Hosting**: Build with `npm run build` and deploy the `.next` folder

## 📦 Dependencies Overview

| Package       | Version | Purpose           |
| ------------- | ------- | ----------------- |
| next          | 16.1.1  | React framework   |
| react         | 19.2.3  | UI library        |
| tailwindcss   | 4       | Utility-first CSS |
| framer-motion | 12.24.7 | Animation library |
| lucide-react  | 0.562.0 | Icon library      |
| typescript    | 5       | Type checking     |

## 🤝 Contributing

Feel free to fork this project and make improvements. Submit pull requests with clear descriptions of changes.

## 📄 License

This project is open source and available under the MIT License.

## 📞 Contact

For inquiries or questions about this portfolio, please use the contact section on the website or reach out directly through the provided contact information.

---

**Built with ❤️ using Next.js and React**
