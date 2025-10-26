export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  category: 'frontend' | 'fullstack' | 'ai' | 'static';
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "Full-stack admin dashboard with real-time analytics",
    longDescription: "A complete e-commerce admin panel built with Next.js and MongoDB. Features include real-time sales analytics, product management, user authentication, and order tracking.",
    image: "docbok.jpg",
    techStack: ["Next.js", "React", "MongoDB", "Node.js", "Tailwind CSS", "Chart.js"],
    liveUrl: "https://github.com/solaymane403/booking-Apps",
    githubUrl: "https://github.com/solaymane403/booking-Apps",
    category: "fullstack",
    featured: true,
  },
  {
    id: 2,
    title: "AI Image Generator",
    description: "AI-powered image generation using Python & OpenAI",
    longDescription: "An interactive web app that generates images from text descriptions using OpenAI's DALL-E API. Built with Python Flask backend and React frontend.",
    image: "/projects/ai-generator.jpg",
    techStack: ["Python", "Flask", "React", "OpenAI API", "Tailwind CSS"],
    liveUrl: "https://ai-image-gen-demo.vercel.app",
    githubUrl: "https://github.com/yourusername/ai-image-generator",
    category: "ai",
    featured: true,
  },
  {
    id: 3,
    title: "Task Manager Pro",
    description: "Modern todo app with drag-and-drop functionality",
    longDescription: "A feature-rich task management application with drag-and-drop boards, categories, deadlines, and local storage persistence. Fully responsive design.",
    image: "/projects/task-manager.jpg",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "React DnD"],
    liveUrl: "https://taskmanager-pro.vercel.app",
    githubUrl: "https://github.com/yourusername/task-manager",
    category: "frontend",
    featured: true,
  },
  {
    id: 4,
    title: "Weather Forecast App",
    description: "Real-time weather data with beautiful UI",
    longDescription: "Get current weather conditions and 7-day forecasts for any location. Features animated weather icons, hourly forecasts, and air quality index.",
    image: "/projects/weather.jpg",
    techStack: ["React", "OpenWeather API", "CSS3", "Axios"],
    liveUrl: "https://weather-forecast-demo.vercel.app",
    githubUrl: "https://github.com/yourusername/weather-app",
    category: "frontend",
    featured: false,
  },
  {
    id: 5,
    title: "Modern Landing Page",
    description: "Responsive business landing with smooth animations",
    longDescription: "A sleek, modern landing page template for businesses. Features smooth scroll animations, contact form, testimonials section, and fully responsive design.",
    image: "/projects/landing.jpg",
    techStack: ["HTML5", "CSS3", "JavaScript", "GSAP", "Tailwind CSS"],
    liveUrl: "https://modern-landing-demo.netlify.app",
    githubUrl: "https://github.com/yourusername/landing-page",
    category: "static",
    featured: false,
  },
  {
    id: 6,
    title: "Blog Platform",
    description: "Full-stack blog with markdown support",
    longDescription: "A complete blogging platform with user authentication, markdown editor, comments system, and admin dashboard. Built with the MERN stack.",
    image: "/projects/blog.jpg",
    techStack: ["Next.js", "MongoDB", "Express", "Node.js", "NextAuth", "MDX"],
    liveUrl: "https://blog-platform-demo.vercel.app",
    githubUrl: "https://github.com/yourusername/blog-platform",
    category: "fullstack",
    featured: false,
  },
];

export const featuredProjects = projects.filter(p => p.featured);