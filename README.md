# Rafa Agustant Portfolio Website

A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion, featuring advanced scroll-aware section transitions.

## ✨ Features

### 🎯 **NEW: Advanced Scroll-Aware Transitions**
- **Smooth Section Transitions**: Each section smoothly appears and disappears based on scroll direction
- **Multiple Animation Types**: Different animation styles for each section (fade-slide, scale-fade, slide-horizontal)
- **Smart Navigation**: Navigation bar automatically highlights the active section and enables smooth scrolling
- **Performance Optimized**: Uses Intersection Observer API for efficient scroll detection
- **Mobile Responsive**: All animations work seamlessly on mobile devices

### 🎨 **Design & UX**
- Clean, professional layout with modern typography
- Responsive design that works perfectly on all devices
- Elegant color scheme with blue and green accents
- Smooth hover effects and micro-interactions

### 📱 **Sections**
- **Hero**: Eye-catching introduction with profile photo and call-to-action
- **About**: Personal introduction with skills showcase
- **Projects**: Organized by category (Data Analytics, UI/UX Design, Developer Projects)
- **Experience**: Professional timeline with detailed descriptions
- **Certifications**: Professional achievements and continuous learning
- **Contact**: Working contact form with email integration

### 🛠 **Technical Features**
- Built with React 19 and Vite for fast development
- Styled with Tailwind CSS for consistent design
- Framer Motion for smooth animations and transitions
- React Intersection Observer for scroll detection
- Responsive navigation with mobile menu
- SEO-friendly structure

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- pnpm (recommended) or npm

### Installation

1. **Extract the project files**
   ```bash
   unzip rafa-portfolio-website-v2.zip
   cd rafa-portfolio
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start the development server**
   ```bash
   pnpm run dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the website

## 📝 Content Management

### Updating Projects

Edit `/src/data/projects.js`:

```javascript
export const projects = {
  dataAnalytics: [
    {
      id: 'project-1',
      title: 'Your Project Title',
      description: 'Project description...',
      icon: '📊', // Emoji icon
      technologies: ['Python', 'SQL', 'Tableau'],
      githubUrl: 'https://github.com/username/repo', // Optional
      liveUrl: 'https://your-project.com' // Optional
    }
  ],
  // ... other categories
};
```

### Updating Experience

Edit `/src/data/experiences.js`:

```javascript
export const experiences = [
  {
    id: 'exp-1',
    title: 'Your Job Title',
    company: 'Company Name',
    period: 'Jan 2024 - Present',
    type: 'current', // or 'past'
    description: 'Job description...',
    skills: ['Skill 1', 'Skill 2', 'Skill 3']
  }
];
```

### Updating Certifications

Edit `/src/data/certifications.js`:

```javascript
export const certifications = [
  {
    id: 'cert-1',
    title: 'Certification Name',
    issuer: 'Issuing Organization',
    year: '2024',
    description: 'Certification description...',
    skills: ['Skill 1', 'Skill 2'],
    credentialUrl: 'https://credential-url.com' // Optional
  }
];
```

### Updating Personal Information

1. **Profile Photo**: Replace `/public/profile.jpg` with your photo
2. **Contact Email**: Update email in `/src/components/Contact.jsx`
3. **Personal Details**: Update name and tagline in `/src/components/Hero.jsx`
4. **About Section**: Update bio in `/src/components/About.jsx`

## 🎨 Customizing Animations

The scroll-aware transitions can be customized in `/src/components/SectionWrapper.jsx`:

```javascript
// Available animation types:
- 'fade-slide': Fades in/out with vertical movement
- 'scale-fade': Scales and fades with slight movement  
- 'slide-horizontal': Slides horizontally with fade
```

You can also adjust animation timing and easing in the component variants.

## 🎯 Navigation Features

- **Auto-highlighting**: Active section is automatically highlighted in the navigation
- **Smooth Scrolling**: Clicking navigation items smoothly scrolls to sections
- **Mobile Menu**: Responsive hamburger menu for mobile devices
- **Scroll Progress**: Visual indicators show scroll progress

## 📱 Mobile Optimization

- Fully responsive design
- Touch-friendly navigation
- Optimized animations for mobile performance
- Mobile-first approach

## 🚀 Deployment

### Build for Production

```bash
pnpm run build
# or
npm run build
```

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Deploy to Netlify

1. Build the project: `pnpm run build`
2. Upload the `dist` folder to Netlify
3. Configure redirects if needed

### Deploy to GitHub Pages

1. Install gh-pages: `pnpm add -D gh-pages`
2. Add deploy script to package.json
3. Run: `pnpm run deploy`

## 🛠 Development

### Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── Hero.jsx        # Hero section
│   ├── About.jsx       # About section
│   ├── Projects.jsx    # Projects section
│   ├── Experience.jsx  # Experience timeline
│   ├── Certifications.jsx # Certifications
│   ├── Contact.jsx     # Contact form
│   ├── Navigation.jsx  # Navigation bar
│   └── SectionWrapper.jsx # Scroll-aware wrapper
├── data/               # Content data files
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── App.jsx            # Main app component
```

### Key Dependencies

- **React**: UI framework
- **Tailwind CSS**: Styling
- **Framer Motion**: Animations
- **React Intersection Observer**: Scroll detection
- **Lucide React**: Icons
- **Shadcn/ui**: UI components

## 🎨 Color Scheme

- **Primary**: Blue (#2563eb) to Green (#059669) gradient
- **Background**: White (#ffffff) and Light Gray (#f9fafb)
- **Text**: Dark Gray (#111827) and Medium Gray (#6b7280)
- **Accents**: Various colors for section indicators

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📞 Support

If you need help customizing this portfolio, feel free to reach out:
- Email: rafaagustant@gmail.com
- GitHub: @rafaagustant

---

**Built with ❤️ using React, Tailwind CSS, and Framer Motion**

