export interface Technology {
  name: string;
  category: "frontend" | "backend" | "cms" | "database" | "ai" | "tools" | "seo";
  iconName?: string;
  badgeColor?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  accentColor: string;
  gradient: string;
}

export interface SkillCategory {
  title: string;
  badgeLabel: string;
  iconName: string;
  skills: string[];
}

export interface WhyChooseItem {
  title: string;
  description: string;
  iconName: string;
}

export interface ShowcaseProject {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  themeColor: string;
  bgGradient: string;
  badgeText: string;
  mockupType: "business" | "ai" | "saas" | "ecommerce";
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  iconName: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  clientType: string;
  avatarInitials: string;
  accentColor: string;
}

export const siteConfig = {
  name: "Md. Juel Rahman",
  shortName: "Juel Rahman",
  initials: "JR",
  role: "AI Engineer | Full-Stack Developer",
  tagline:
    "I build high-performance websites, custom web applications, and intelligent AI-driven solutions that help businesses automate, grow, and scale effectively.",
  about: {
    badge: "About Me",
    heading: "A Practical, Solution-Focused Developer & AI Engineer",
    paragraphs: [
      "I'm Md. Juel Rahman, an AI Engineer and Full-Stack Developer specializing in building modern, reliable, and business-focused web applications, full-spectrum WordPress platforms, API integrations, cloud databases, eCommerce systems, and autonomous workflow automation.",
      "My focus is on delivering practical, scalable, and intelligent digital products that solve real problems, streamline operations, and deliver long-term value—always writing clean, maintainable code and aligning technical architecture with business goals.",
    ],
    approach: [
      {
        title: "Practical",
        desc: "Real-world, business-focused solutions",
      },
      {
        title: "Scalable",
        desc: "Built to grow with your needs",
      },
      {
        title: "Secure",
        desc: "Best practices for a safer application",
      },
      {
        title: "Maintainable",
        desc: "Clean, organized, and future-ready code",
      },
      {
        title: "User-Focused",
        desc: "Simple, effective, and great user experience",
      },
    ],
  },
  contact: {
    primaryEmail: "hellow@juelrahman.com",
    inquiryEmail: "juelrahman09@gmail.com",
    email: "juelrahman09@gmail.com",
    phone: "01304555973",
    whatsapp: "+8801304555973",
    location: "Bangladesh",
    github: "https://github.com/juelrahmanbd",
    linkedin: "https://linkedin.com/in/juelrahmanbd",
    youtube: "https://youtube.com/@juelrahmanbd",
    portfolioRepo: "https://github.com/juelrahmanbd/juelrahman-personal-portfolio",
  },
};

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Expertise", href: "#expertise" },
  { name: "Projects", href: "#projects" },
  { name: "AI & Full-Stack", href: "#ai-fullstack" },
  { name: "WordPress", href: "#wordpress" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export const trustHighlights = [
  {
    icon: "Calendar",
    title: "7-8 Years Experience",
    subtitle: "Practical industry expertise.",
  },
  {
    icon: "Layers",
    title: "Full-Stack & Custom Apps",
    subtitle: "Scalable modern web systems.",
  },
  {
    icon: "Workflow",
    title: "AI Automation & APIs",
    subtitle: "Smart workflows & integrations.",
  },
  {
    icon: "Globe",
    title: "WordPress, SEO & Speed",
    subtitle: "Fast, optimized, custom web.",
  },
];

export const trustedTechnologies = [
  { name: "WordPress", icon: "WordPress", color: "#21759B" },
  { name: "Next.js", icon: "Next.js", color: "#000000" },
  { name: "React", icon: "React", color: "#61DAFB" },
  { name: "TypeScript", icon: "TypeScript", color: "#3178C6" },
  { name: "JavaScript", icon: "JavaScript", color: "#F7DF1E" },
  { name: "PHP", icon: "PHP", color: "#777BB4" },
  { name: "Python", icon: "Python", color: "#3776AB" },
  { name: "Node.js", icon: "Node.js", color: "#339933" },
  { name: "Supabase", icon: "Supabase", color: "#3ECF8E" },
  { name: "PostgreSQL", icon: "PostgreSQL", color: "#4169E1" },
  { name: "MongoDB", icon: "MongoDB", color: "#47A248" },
  { name: "MySQL", icon: "MySQL", color: "#4479A1" },
  { name: "Docker", icon: "Docker", color: "#2496ED" },
  { name: "Git", icon: "Git", color: "#F03C2E" },
  { name: "GitHub", icon: "GitHub", color: "#181717" },
  { name: "Tailwind CSS", icon: "Tailwind CSS", color: "#06B6D4" },
  { name: "Divi 5", icon: "Divi 5", color: "#7E3BD0" },
  { name: "Elementor", icon: "Elementor", color: "#92003B" },
  { name: "WooCommerce", icon: "WooCommerce", color: "#96588A" },
  { name: "Gutenberg", icon: "Gutenberg", color: "#000000" },
  { name: "PageSpeed Insights", icon: "PageSpeed Insights", color: "#4285F4" },
  { name: "Rank Math", icon: "Rank Math", color: "#FA541C" },
  { name: "Google Search Console", icon: "Google Search Console", color: "#458CF5" },
  { name: "Google Analytics", icon: "Google Analytics", color: "#E37400" },
  { name: "Cloudflare", icon: "Cloudflare", color: "#F38020" },
  { name: "Redis", icon: "Redis", color: "#FF4438" },
  { name: "OpenAI", icon: "OpenAI", color: "#10A37F" },
  { name: "Claude", icon: "Claude", color: "#D97706" },
  { name: "Figma", icon: "Figma", color: "#F24E1E" },
];

export const servicesList: ServiceItem[] = [
  {
    id: "wordpress-dev",
    title: "Professional WordPress Website Development",
    description:
      "Custom, business-ready WordPress websites with a professional look & setup.",
    iconName: "Globe",
    accentColor: "#3B82F6",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    id: "custom-website",
    title: "Custom Website Design and Development",
    description:
      "Modern, responsive, and high-performing websites tailored to your needs.",
    iconName: "Layout",
    accentColor: "#8B5CF6",
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    id: "fullstack-apps",
    title: "Full-Stack Web Application Development",
    description:
      "End-to-end web applications with robust features and reliable performance.",
    iconName: "Layers",
    accentColor: "#06B6D4",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    id: "ai-apps",
    title: "AI-Powered Web Application Development",
    description:
      "Intelligent web applications powered by AI for real-world use cases.",
    iconName: "Sparkles",
    accentColor: "#EC4899",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    id: "saas-solutions",
    title: "Custom SaaS and Software Solutions",
    description:
      "Scalable and feature-rich SaaS or custom software solutions for your business.",
    iconName: "Cpu",
    accentColor: "#F43F5E",
    gradient: "from-rose-500 to-red-600",
  },
  {
    id: "ecommerce-dev",
    title: "eCommerce Website Development",
    description:
      "Online stores with essential eCommerce features, secure setup, and a smooth experience.",
    iconName: "ShoppingCart",
    accentColor: "#E11D48",
    gradient: "from-pink-600 to-rose-700",
  },
  {
    id: "api-automation",
    title: "API Integration and Automation",
    description:
      "Connect, integrate, and automate your tools and business workflows.",
    iconName: "Workflow",
    accentColor: "#10B981",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    id: "redesign-migration",
    title: "Website Redesign and Migration",
    description:
      "Give your website a modern look, better performance, or migrate it to a new platform.",
    iconName: "RefreshCw",
    accentColor: "#2563EB",
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    id: "technical-seo",
    title: "Technical SEO and Optimization",
    description:
      "Improve your website's visibility, speed, and overall performance.",
    iconName: "Search",
    accentColor: "#0284C7",
    gradient: "from-sky-500 to-blue-600",
  },
  {
    id: "security-maintenance",
    title: "Website Security and Maintenance",
    description:
      "Keep your website secure, updated, and running smoothly.",
    iconName: "ShieldCheck",
    accentColor: "#059669",
    gradient: "from-green-500 to-emerald-600",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    badgeLabel: "Frontend",
    iconName: "Code",
    skills: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Backend Development",
    badgeLabel: "Backend",
    iconName: "Server",
    skills: ["Node.js", "Express.js", "PHP"],
  },
  {
    title: "Content Management Systems",
    badgeLabel: "CMS",
    iconName: "Globe",
    skills: ["WordPress", "WooCommerce"],
  },
  {
    title: "Database Engineering",
    badgeLabel: "Databases",
    iconName: "Database",
    skills: ["MongoDB", "Supabase", "Firebase"],
  },
  {
    title: "AI & Automation",
    badgeLabel: "AI & Automation",
    iconName: "Sparkles",
    skills: ["ChatGPT", "AI Integration"],
  },
  {
    title: "SEO, Security & Optimization",
    badgeLabel: "SEO / Security / Optimization",
    iconName: "ShieldCheck",
    skills: ["Technical SEO", "Website Security", "Performance"],
  },
  {
    title: "Modern Development Tools",
    badgeLabel: "Development Tools",
    iconName: "Terminal",
    skills: ["GitHub", "Figma", "Cursor"],
  },
];

export const whyChooseMeItems: WhyChooseItem[] = [
  {
    title: "Problem Solving",
    description: "Analyze, find the right approach, and build effective solutions for complex challenges.",
    iconName: "Lightbulb",
  },
  {
    title: "Understand Business Requirements",
    description: "Take time to understand your goals and turn them into practical, high-impact digital solutions.",
    iconName: "Target",
  },
  {
    title: "Clean Development",
    description: "Write clean, well-organized, and maintainable code adhering to modern web standards.",
    iconName: "CheckCircle2",
  },
  {
    title: "Responsive Design",
    description: "Build fluid websites that look and function effortlessly across every desktop, tablet, and smartphone.",
    iconName: "Smartphone",
  },
  {
    title: "Third-Party Integration",
    description: "Integrate the right tools, APIs, and cloud services to streamline your operations seamlessly.",
    iconName: "Share2",
  },
  {
    title: "Performance Optimization",
    description: "Make your website load faster, feel smoother, and achieve top Core Web Vitals scores.",
    iconName: "Zap",
  },
  {
    title: "Project Management",
    description: "Keep the work structured, organized, strictly on track, and clearly updated at every milestone.",
    iconName: "FolderKanban",
  },
  {
    title: "Client Communication",
    description: "Maintain clear, friendly, and timely communication throughout the entire development lifecycle.",
    iconName: "MessageSquare",
  },
];

export const showcaseProjects: ShowcaseProject[] = [
  {
    id: "business-website",
    title: "Business Website",
    category: "Corporate & Agency",
    description:
      "A professional and modern business website with essential company features, fast loading times, and a clean, user-friendly design.",
    tags: ["WordPress", "Custom CSS", "Responsive", "SEO Ready"],
    themeColor: "#3B82F6",
    bgGradient: "from-blue-500/10 via-indigo-500/5 to-transparent",
    badgeText: "Showcase Only",
    mockupType: "business",
  },
  {
    id: "ai-web-app",
    title: "AI Web Application",
    category: "Intelligent Software",
    description:
      "A web application empowered with modern AI capabilities to automate business tasks, generate insights, and provide smarter workflows.",
    tags: ["Next.js", "AI API", "Tailwind CSS", "Automation"],
    themeColor: "#8B5CF6",
    bgGradient: "from-purple-500/10 via-pink-500/5 to-transparent",
    badgeText: "Showcase Only",
    mockupType: "ai",
  },
  {
    id: "custom-saas",
    title: "Custom SaaS Platform",
    category: "Cloud Software",
    description:
      "A custom SaaS-style web platform with user management, subscription capability, intuitive dashboard features, and a scalable architecture.",
    tags: ["React", "Node.js", "Supabase", "REST API"],
    themeColor: "#10B981",
    bgGradient: "from-emerald-500/10 via-teal-500/5 to-transparent",
    badgeText: "Showcase Only",
    mockupType: "saas",
  },
  {
    id: "ecommerce-solution",
    title: "eCommerce Solution",
    category: "Digital Retail",
    description:
      "A complete eCommerce website with seamless product management, shopping cart, secure payment gateway, and a frictionless customer journey.",
    tags: ["WooCommerce", "eCommerce", "Payment Gateways", "Speed Optimized"],
    themeColor: "#EC4899",
    bgGradient: "from-pink-500/10 via-rose-500/5 to-transparent",
    badgeText: "Showcase Only",
    mockupType: "ecommerce",
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "1",
    title: "Discover",
    description: "Understand your goals, requirements, and the big picture.",
    iconName: "Search",
  },
  {
    step: "2",
    title: "Plan",
    description: "Define the approach, features, and a clear roadmap.",
    iconName: "ListTodo",
  },
  {
    step: "3",
    title: "Build",
    description: "Develop the solution with clean code and best practices.",
    iconName: "Code",
  },
  {
    step: "4",
    title: "Optimize",
    description: "Test, refine, and optimize for performance, security, and usability.",
    iconName: "Sparkles",
  },
];

export const sampleTestimonials: TestimonialItem[] = [
  {
    id: "rev-1",
    quote: "A highly professional and reliable developer. Communicates well and delivers quality work.",
    clientType: "Client Review",
    avatarInitials: "C",
    accentColor: "#3B82F6",
  },
  {
    id: "rev-2",
    quote: "Great technical skills and a problem-solving mindset. Very cooperative and easy to work with.",
    clientType: "Client Review",
    avatarInitials: "Q",
    accentColor: "#8B5CF6",
  },
  {
    id: "rev-3",
    quote: "Delivered a clean, well-structured solution and was responsive throughout the project. A solid and talented professional.",
    clientType: "Client Review",
    avatarInitials: "D",
    accentColor: "#06B6D4",
  },
];
