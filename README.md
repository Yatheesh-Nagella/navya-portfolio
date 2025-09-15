# Navya Nanduri - Business Analytics Portfolio

A modern, interactive portfolio website showcasing expertise in business analytics, data science, and machine learning. Built with Next.js and deployed on GitHub Pages.

## 📋 Features

### Interactive Design
- **Animated particle network background** with dynamic connections
- **Glass morphism UI** with backdrop blur effects  
- **Smooth scroll animations** triggered by viewport intersection
- **Hover effects** and micro-interactions throughout
- **Responsive design** optimized for desktop, tablet, and mobile

### Portfolio Sections
- **Hero Section**: Introduction with animated background and professional photo
- **About Me**: Personal story, professional journey, and philosophy
- **Skills**: Interactive progress bars with technical proficiencies
- **Projects**: Detailed showcase of analytics projects with technology tags
- **Contact**: Professional contact information and links

### Technical Features
- **Static site generation** for optimal performance
- **Custom animations** using CSS and JavaScript
- **Optimized images** and assets
- **SEO-friendly** structure and metadata
- **Cross-browser compatibility**

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, TypeScript, React
- **Styling**: Tailwind CSS, Custom CSS animations
- **Deployment**: GitHub Pages with GitHub Actions
- **Development**: ESLint, Node.js 18+

## 🚀 Quick Start

### Prerequisites
- Node.js 18 or later
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone 
   cd navya-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
navya-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── public/
│   ├── images/                 # Profile photos and assets
│   └── .nojekyll              # GitHub Pages configuration
├── src/
│   ├── app/
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Main page component
│   ├── components/
│   │   ├── layout/
│   │   │   └── navbar.tsx     # Navigation component
│   │   ├── sections/
│   │   │   ├── home.tsx       # Hero section
│   │   │   ├── about.tsx      # About section
│   │   │   ├── skills.tsx     # Skills section
│   │   │   ├── projects.tsx   # Projects section
│   │   │   └── contact.tsx    # Contact section
│   │   └── ui/
│   │       └── button.tsx     # Reusable button component
│   ├── data/
│   │   └── content.ts         # Portfolio content data
│   ├── hooks/
│   │   ├── useIntersectionObserver.ts
│   │   └── useScrollAnimation.ts
│   ├── lib/
│   │   └── utils.ts           # Utility functions
│   └── types/
│       └── index.ts           # TypeScript definitions
├── next.config.ts             # Next.js configuration
├── tailwind.config.js         # Tailwind CSS configuration
└── package.json
```

## 🎨 Customization

### Adding New Projects
Edit `src/data/content.ts` to add new projects:

```typescript
export const projects: Project[] = [
  {
    id: "your-project-id",
    title: "Your Project Title",
    description: "Project description...",
    technologies: ["Python", "SQL", "Tableau"],
    results: ["Achievement 1", "Achievement 2"],
    featured: true
  }
];
```

### Updating Skills
Modify the skills array in `src/data/content.ts`:

```typescript
export const skills: Skill[] = [
  {
    category: "Your Category",
    icon: "📊",
    technologies: [
      { name: "Technology Name", level: "Expert", percentage: 95 }
    ]
  }
];
```

### Changing Colors
Update the color scheme in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: { /* your primary colors */ },
      secondary: { /* your secondary colors */ }
    }
  }
}
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px  
- **Mobile**: Below 768px

## 🚀 Deployment

### Automatic Deployment
The site automatically deploys to GitHub Pages when you push to the `main` branch.

### Manual Deployment
```bash
npm run build
```

### GitHub Pages Setup
1. Go to repository Settings > Pages
2. Select "GitHub Actions" as the source
3. The workflow will handle the rest

## 🔧 Development Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 📊 Performance

- **Lighthouse Score**: 95+ on all metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Static site generation** for optimal loading speeds

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 About the Developer

This portfolio was developed to showcase modern web development practices and interactive design principles. The codebase demonstrates:

- **Component-based architecture**
- **TypeScript for type safety**
- **Performance optimization techniques**
- **Accessibility best practices**
- **Modern CSS animations**


## 🔮 Future Enhancements

- [ ] Blog section for analytics insights
- [ ] Dark/light theme toggle
- [ ] Multi-language support
- [ ] Advanced animations with Framer Motion
- [ ] Integration with analytics APIs
- [ ] CMS integration for easy content updates

---

**Built with ❤️ using Next.js and deployed on GitHub Pages**