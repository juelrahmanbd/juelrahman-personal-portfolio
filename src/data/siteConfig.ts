export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  personal: {
    fullName: string;
    wordmark: string;
    title: string;
    role: string;
    location: string;
    availability: {
      status: boolean;
      text: string;
    };
    email: string;
    github: string;
    linkedin: string;
  };
  navigation: NavItem[];
  hero: {
    badge: string;
    headline: {
      regular: string;
      accent: string;
    };
    description: string;
    ctaPrimary: {
      label: string;
      href: string;
    };
    ctaSecondary: {
      label: string;
      href: string;
    };
    coreCapabilities: {
      title: string;
      category: string;
    }[];
  };
}

export const siteConfig: SiteConfig = {
  personal: {
    fullName: "Md Juel Rahman",
    wordmark: "JUEL.",
    title: "Md Juel Rahman — AI-Focused Full-Stack Web Developer",
    role: "AI-Focused Full-Stack Web Developer",
    location: "Bangladesh",
    availability: {
      status: true,
      text: "Available for select projects",
    },
    email: "juelrahman09@gmail.com",
    github: "https://github.com/juelrahmanbd",
    linkedin: "https://linkedin.com/in/juelrahman",
  },
  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Expertise", href: "#expertise" },
    { label: "Projects", href: "#projects" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    badge: "Available for select projects",
    headline: {
      regular: "Building",
      accent: "intelligent digital experiences.",
    },
    description:
      "I'm Md Juel Rahman — an AI-focused Full-Stack Web Developer building modern websites, intelligent applications, and scalable digital solutions for businesses worldwide.",
    ctaPrimary: {
      label: "Explore My Work",
      href: "#projects",
    },
    ctaSecondary: {
      label: "Let's Talk",
      href: "#contact",
    },
    coreCapabilities: [
      { category: "Web Engineering", title: "Full-Stack Architecture & Next.js" },
      { category: "CMS Platforms", title: "Enterprise & Custom WordPress" },
      { category: "AI Systems", title: "LLM Integrations & Intelligent Agents" },
      { category: "Cloud & APIs", title: "Scalable Microservices & REST/GraphQL" },
    ],
  },
};
