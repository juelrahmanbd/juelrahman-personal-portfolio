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
    "I build modern websites, custom web applications, intelligent software solutions, and AI-powered digital products that help individuals and businesses grow, automate work, and do more online.",
  about: {
    badge: "About Me",
    heading: "A Practical, Solution-Focused Developer & AI Engineer",
    paragraphs: [
      "I'm Md. Juel Rahman, a tech professional with 7–8 years of practical experience in website development and digital solutions. I work at the intersection of full-stack development and AI to build modern, reliable, and business-focused web solutions.",
      "My expertise includes professional business websites, custom WordPress development, full-stack web applications, API integrations, database-driven systems, eCommerce platforms, AI-powered applications, and business automation.",
      "My career direction is to create practical, scalable, and intelligent digital products that solve real problems, streamline operations, and deliver long-term value. I believe in writing clean and maintainable code, keeping solutions secure and user-focused, and always aligning the technology with business goals.",
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
    email: "contact@juelrahman.dev",
    whatsapp: "+880 18-XXXXXXX",
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
  { name: "Services", href: "#services" },
  { name: "Skills", href: "#skills" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

export const trustHighlights = [
  {
    icon: "Calendar",
    title: "7–8 Years",
    subtitle: "Practical Experience",
  },
  {
    icon: "Sparkles",
    title: "AI-Powered",
    subtitle: "Solutions",
  },
  {
    icon: "Layers",
    title: "Full-Stack",
    subtitle: "Development",
  },
  {
    icon: "Globe",
    title: "WordPress &",
    subtitle: "Custom Web Apps",
  },
];

export const trustedTechnologies = [
  { name: "HTML5", icon: "Code2", color: "#E34F26" },
  { name: "CSS3", icon: "Palette", color: "#1572B6" },
  { name: "JavaScript", icon: "FileCode2", color: "#F7DF1E" },
  { name: "Node.js", icon: "Server", color: "#339933" },
  { name: "Express.js", icon: "Cpu", color: "#000000" },
  { name: "PHP", icon: "Terminal", color: "#777BB4" },
  { name: "WordPress", icon: "Globe", color: "#21759B" },
  { name: "WooCommerce", icon: "ShoppingCart", color: "#96588A" },
  { name: "Supabase", icon: "Database", color: "#3ECF8E" },
  { name: "Firebase", icon: "Flame", color: "#FFCA28" },
  { name: "MongoDB", icon: "Database", color: "#47A248" },
  { name: "Tailwind CSS", icon: "Sparkles", color: "#06B6D4" },
  { name: "GitHub", icon: "GitBranch", color: "#181717" },
  { name: "Figma", icon: "Figma", color: "#F24E1E" },
  { name: "ChatGPT", icon: "Bot", color: "#10A37F" },
  { name: "Cursor", icon: "Compass", color: "#000000" },
  { name: "Claude", icon: "Brain", color: "#D97706" },
  { name: "OpenAI Codex", icon: "Binary", color: "#4F46E5" },
  { name: "Google Antigravity", icon: "Rocket", color: "#6847E8" },
];

export const servicesList: ServiceItem[] = [
  {
    id: "wordpress-dev",
    title: "Professional WordPress Website Development",
    description:
      "Custom, business-ready WordPress websites with a professional look, security hardening, and high-performance setup.",
    iconName: "Globe",
    accentColor: "#3B82F6",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    id: "custom-website",
    title: "Custom Website Design and Development",
    description:
      "Modern, responsive, and high-performing custom websites tailored specifically to your unique brand and business goals.",
    iconName: "Layout",
    accentColor: "#8B5CF6",
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    id: "fullstack-apps",
    title: "Full-Stack Web Application Development",
    description:
      "End-to-end web applications with robust database architectures, clean RESTful APIs, and reliable user authentication.",
    iconName: "Layers",
    accentColor: "#06B6D4",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    id: "ai-apps",
    title: "AI-Powered Web Application Development",
    description:
      "Intelligent web applications powered by modern LLMs, automated reasoning, and AI integrations for real-world business use cases.",
    iconName: "Sparkles",
    accentColor: "#EC4899",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    id: "saas-solutions",
    title: "Custom SaaS and Software Solutions",
    description:
      "Scalable, feature-rich SaaS platforms and custom web software engineered for growth, multi-tenancy, and recurring value.",
    iconName: "Cpu",
    accentColor: "#F43F5E",
    gradient: "from-rose-500 to-red-600",
  },
  {
    id: "ecommerce-dev",
    title: "eCommerce Website Development",
    description:
      "High-converting online stores with WooCommerce, payment gateway integrations, seamless inventory management, and smooth checkouts.",
    iconName: "ShoppingCart",
    accentColor: "#E11D48",
    gradient: "from-pink-600 to-rose-700",
  },
  {
    id: "plugin-dev",
    title: "Custom WordPress Plugin Development",
    description:
      "Bespoke WordPress plugins and extensions written with clean OOP PHP to add specialized business features without bloat.",
    iconName: "Puzzle",
    accentColor: "#6847E8",
    gradient: "from-[#6847E8] to-[#5234CC]",
  },
  {
    id: "api-automation",
    title: "API Integration and Automation",
    description:
      "Connect, sync, and automate your third-party tools, CRM systems, webhooks, and business workflows to eliminate manual work.",
    iconName: "Workflow",
    accentColor: "#10B981",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    id: "redesign-migration",
    title: "Website Redesign and Migration",
    description:
      "Give your outdated website a modern UI refresh, superior mobile responsiveness, and zero-downtime server or CMS migration.",
    iconName: "RefreshCw",
    accentColor: "#2563EB",
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    id: "technical-seo",
    title: "Technical SEO and Website Optimization",
    description:
      "Improve your website speed, Core Web Vitals, semantic markup, and crawlability to boost organic search engine rankings.",
    iconName: "Search",
    accentColor: "#0284C7",
    gradient: "from-sky-500 to-blue-600",
  },
  {
    id: "security-maintenance",
    title: "Website Security and Maintenance",
    description:
      "Keep your website hardened against vulnerabilities, with ongoing security scans, core updates, backups, and 99.9% uptime monitoring.",
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
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Responsive Web Design",
      "Component Architecture",
    ],
  },
  {
    title: "Backend Development",
    badgeLabel: "Backend",
    iconName: "Server",
    skills: [
      "Node.js",
      "Express.js",
      "PHP (Modern OOP)",
      "RESTful APIs",
      "User Authentication",
      "Server-side Programming",
    ],
  },
  {
    title: "Content Management Systems",
    badgeLabel: "CMS",
    iconName: "Globe",
    skills: [
      "WordPress",
      "Divi 4 & Divi 5",
      "Divi Theme Builder",
      "Elementor Pro",
      "WooCommerce",
      "Custom Themes",
      "Custom Plugins",
    ],
  },
  {
    title: "Database Engineering",
    badgeLabel: "Databases",
    iconName: "Database",
    skills: [
      "Supabase",
      "Firebase",
      "MongoDB",
      "SQL Databases",
      "Schema Design",
      "Data Relationships",
    ],
  },
  {
    title: "AI & Workflow Automation",
    badgeLabel: "AI & Automation",
    iconName: "Sparkles",
    skills: [
      "AI-Assisted Coding",
      "AI API Integration",
      "AI-Powered Applications",
      "Prompt Engineering",
      "Workflow Automation",
      "Intelligent Agents",
    ],
  },
  {
    title: "SEO, Security & Optimization",
    badgeLabel: "SEO / Security / Optimization",
    iconName: "ShieldCheck",
    skills: [
      "Technical SEO",
      "On-Page SEO",
      "Google Search Console",
      "Google Analytics",
      "Rank Math SEO",
      "Core Web Vitals",
      "Website Speed Optimization",
      "WordPress Security Hardening",
    ],
  },
  {
    title: "Modern Development Tools",
    badgeLabel: "Development Tools",
    iconName: "Terminal",
    skills: [
      "Git & GitHub",
      "Figma",
      "Hostinger & Cloud Environments",
      "ChatGPT & Claude",
      "Cursor & Codex",
      "Google Antigravity",
    ],
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
    step: "01",
    title: "Discover",
    description: "Understand your goals, requirements, audience, and the big picture challenges.",
    iconName: "Search",
  },
  {
    step: "02",
    title: "Plan",
    description: "Define the architecture, tech stack, feature roadmap, and interface blueprints.",
    iconName: "ListTodo",
  },
  {
    step: "03",
    title: "Build",
    description: "Develop the solution with clean code, modern practices, and regular progress updates.",
    iconName: "Code",
  },
  {
    step: "04",
    title: "Optimize",
    description: "Test, refine, and optimize for peak performance, security, SEO, and usability.",
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
