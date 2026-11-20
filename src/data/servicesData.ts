export interface ServiceDeliverable {
  title: string;
  desc: string;
  iconName: string;
}

export interface ServiceStackItem {
  category: string;
  tools: string[];
  note: string;
}

export interface ServiceChallenge {
  title: string;
  desc: string;
}

export interface ServiceSolution {
  title: string;
  desc: string;
}

export interface ServiceWorkflowStep {
  step: string;
  title: string;
  desc: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceDetail {
  id: string;
  index: string; // "01" through "12"
  slug: string;
  title: string;
  shortDescription: string;
  category:
    | "WordPress & eCommerce"
    | "Full-Stack & SaaS"
    | "AI & Automation"
    | "SEO, Speed & Security";
  iconType: string;
  accentColor: string;
  heroTagline: string;
  valueProposition: string;
  quickSpecs: {
    idealFor: string;
    coreStack: string;
    deliveryApproach: string;
    keyFocus: string;
  };
  challenges: ServiceChallenge[];
  solutions: ServiceSolution[];
  deliverables: ServiceDeliverable[];
  stack: ServiceStackItem[];
  workflow: ServiceWorkflowStep[];
  standards: {
    performance: string;
    security: string;
    maintainability: string;
  };
  faqs: ServiceFAQ[];
  relatedSlugs: string[];
}

export const servicesData: ServiceDetail[] = [
  {
    id: "svc-01",
    index: "01",
    slug: "wordpress-divi-5-development",
    title: "WordPress & Divi 5 Development",
    shortDescription:
      "Custom themes, plugins, and native page-builder solutions optimized for performance.",
    category: "WordPress & eCommerce",
    iconType: "wordpress-divi",
    accentColor: "#21759B",
    heroTagline:
      "High-Performance Custom WordPress & Native Divi 5 Architecture",
    valueProposition:
      "I engineer clean, lightweight WordPress architectures and native Divi 5 builds designed for blistering speed, uncompromising security, and effortless editorial control—completely free of bloated third-party plugin stacks.",
    quickSpecs: {
      idealFor:
        "Growing businesses, marketing agencies, content publishers, and enterprise brands needing editable custom websites.",
      coreStack:
        "WordPress 6.x, Divi 5, Custom PHP 8.3, Tailwind CSS, ACF Pro, MySQL / MariaDB",
      deliveryApproach:
        "Modular architecture, clean PHP templates, zero jQuery dependency, automated staging pipeline",
      keyFocus:
        "Sub-second load times, 95+ PageSpeed Mobile, editorial flexibility, strict security hardening",
    },
    challenges: [
      {
        title: "Bloated Page Builders & Plugin Overhead",
        desc: "Websites loaded down with 40+ plugins, legacy shortcodes, and bulky CSS that destroy PageSpeed and mobile responsiveness.",
      },
      {
        title: "Brittle Customizations That Break on Updates",
        desc: "Themes with hardcoded hacks that fail whenever WordPress core or parent builder updates are applied.",
      },
      {
        title: "Security Holes & Vulnerable Dependencies",
        desc: "Outdated themes and unvetted plugins that expose sites to brute-force attacks, code injections, and malware.",
      },
      {
        title: "Rigid Client Editing Experience",
        desc: "Content teams struggling with complex backend layouts where a single accidental click destroys the page structure.",
      },
    ],
    solutions: [
      {
        title: "Native Divi 5 Modular Architecture",
        desc: "Built entirely on Divi 5's rewritten React/TypeScript core, eliminating legacy Divi 4 shortcode bloat for maximum execution speed.",
      },
      {
        title: "Custom Gutenberg & ACF Pro Blocks",
        desc: "Tailored editorial controls where marketing teams can update copy, media, and layouts without breaking design consistency.",
      },
      {
        title: "Deep Security Hardening",
        desc: "REST API lockdown, disabled XML-RPC, strict nonces, sanitized DB queries, 2FA enforcement, and zero default file-editing permissions.",
      },
      {
        title: "Asset Optimization & Clean CSS",
        desc: "Modular stylesheet loading, tree-shaken CSS, lazy asset hydration, and native WebP image delivery ensuring 95+ Core Web Vitals.",
      },
    ],
    deliverables: [
      {
        title: "Custom Divi 5 Child Theme",
        desc: "Tailor-made, update-safe child theme architected strictly according to WordPress coding standards.",
        iconName: "Code2",
      },
      {
        title: "Modular Custom Block Library",
        desc: "Reusable, styled editorial components tailored to your brand style guide and content hierarchy.",
        iconName: "Blocks",
      },
      {
        title: "Core Web Vitals Optimization",
        desc: "Full performance audit, critical CSS inlining, browser caching rules, and asset minification.",
        iconName: "Gauge",
      },
      {
        title: "Enterprise Security Hardening",
        desc: "Implementation of CSP headers, brute-force shields, secure salting, and automated offsite backups.",
        iconName: "ShieldCheck",
      },
      {
        title: "Staging-to-Production CI Pipeline",
        desc: "Safe deployment workflow allowing you to review revisions in a private staging sandbox before going live.",
        iconName: "GitBranch",
      },
      {
        title: "Client Editorial Documentation",
        desc: "Recorded walkthroughs and structured documentation showing your team how to publish content effortlessly.",
        iconName: "BookOpen",
      },
    ],
    stack: [
      {
        category: "CMS & Framework",
        tools: ["WordPress 6.x", "Divi 5", "PHP 8.3", "Advanced Custom Fields Pro"],
        note: "Modern, secure PHP stack leveraging Divi 5's new high-speed headless-ready API.",
      },
      {
        category: "Frontend Styling",
        tools: ["Tailwind CSS", "Vanilla JavaScript (ES6+)", "Vite Asset Pipeline"],
        note: "Lightweight utility-first styling with zero jQuery bloat.",
      },
      {
        category: "Database & Caching",
        tools: ["MySQL 8.0", "Redis Object Cache", "Hostinger Edge CDN"],
        note: "Persistent server-level caching with instant dynamic page invalidation.",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Discovery & Architecture Planning",
        desc: "Auditing content models, page hierarchies, custom field needs, and third-party integrations.",
      },
      {
        step: "02",
        title: "Child Theme & Modular Component Build",
        desc: "Developing custom Divi 5 layouts, ACF blocks, and responsive styling in an isolated development environment.",
      },
      {
        step: "03",
        title: "Performance & Security Hardening",
        desc: "Configuring Redis object caching, asset compression, image pipelines, and hardening server headers.",
      },
      {
        step: "04",
        title: "Staging Review & Quality Assurance",
        desc: "Cross-device browser testing, accessibility validation, form testing, and client revision reviews.",
      },
      {
        step: "05",
        title: "Zero-Downtime Deployment & Handover",
        desc: "Deploying to production, DNS verification, search console submission, and client training delivery.",
      },
    ],
    standards: {
      performance:
        "Targeting 95+ Google PageSpeed mobile scores, sub-800ms Largest Contentful Paint (LCP), and 0 Cumulative Layout Shift (CLS).",
      security:
        "Parameterized SQL queries, nonces on all form actions, strict CSP headers, disabled directory browsing, and automated security scans.",
      maintainability:
        "100% update-safe child theme structure, well-commented PHP functions, and intuitive field definitions that any developer can maintain.",
    },
    faqs: [
      {
        question: "Why should we build with Divi 5 instead of older Divi versions?",
        answer:
          "Divi 5 is a complete, ground-up architectural rewrite built with React and modern TypeScript. It eliminates the heavy nested shortcodes of Divi 4, loads assets modularly on demand, and delivers significantly faster editor responsiveness and cleaner rendered DOM output.",
      },
      {
        question: "Can my team edit pages without knowing any code?",
        answer:
          "Yes. All typography, color schemes, and structural blocks are configured so your team can edit text, swap images, and create new pages via intuitive visual controls without risking layout breakage.",
      },
      {
        question: "Will existing plugins work with the new Divi 5 build?",
        answer:
          "We evaluate all necessary plugins during discovery. Essential tools (eCommerce, SEO, forms) are integrated cleanly, while redundant utility plugins are replaced with lightweight native custom code to preserve speed.",
      },
      {
        question: "Do you provide staging environments before launch?",
        answer:
          "Always. All development takes place on a password-protected staging URL. The live website remains untouched until you have thoroughly reviewed and approved the new build.",
      },
    ],
    relatedSlugs: [
      "ecommerce-woocommerce-systems",
      "technical-seo-speed-security",
      "website-migration-staging",
    ],
  },
  {
    id: "svc-02",
    index: "02",
    slug: "custom-website-development",
    title: "Custom Website Development",
    shortDescription:
      "Tailor-made, high-performance websites using modern web technologies and frameworks.",
    category: "Full-Stack & SaaS",
    iconType: "nodejs-code",
    accentColor: "#0284C7",
    heroTagline:
      "Precision-Engineered Bespoke Websites Tailored to Business Goals",
    valueProposition:
      "When template solutions limit your growth, I engineer tailor-made, high-velocity websites from scratch using Next.js, React, Node.js, and TypeScript—built for lightning-fast speeds, bespoke interactive user journeys, and robust enterprise scalability.",
    quickSpecs: {
      idealFor:
        "Tech startups, high-growth brands, B2B services, and companies demanding unique interactions and top-tier PageSpeed.",
      coreStack:
        "Next.js 15 (App Router), React 19, TypeScript, Node.js, Tailwind CSS, Lucide React",
      deliveryApproach:
        "Component-driven engineering, server-side rendering (SSR), static generation (SSG), clean semantic HTML5",
      keyFocus:
        "Flawless Core Web Vitals, custom UI micro-interactions, responsive fluidity, zero technical debt",
    },
    challenges: [
      {
        title: "Generic Templates That Look Like Competitors",
        desc: "Pre-made themes restrict brand distinction, force awkward UX compromises, and contain heavy code your business never uses.",
      },
      {
        title: "Sluggish Performance & Poor Conversion Rates",
        desc: "Bloated script libraries and unoptimized client rendering that cause slow Time-to-Interactive (TTI) and user bounce.",
      },
      {
        title: "Poor SEO Architecture & Metadata Gaps",
        desc: "Client-only SPA frameworks that fail to render clean OpenGraph previews, dynamic sitemaps, or structured schema for crawlers.",
      },
      {
        title: "Inflexible API and Automation Integrations",
        desc: "Inability to connect CRM webhooks, payment gateways, custom calculators, or external databases cleanly.",
      },
    ],
    solutions: [
      {
        title: "Full Bespoke UI/UX & Component Architecture",
        desc: "Every component is designed and coded specifically for your business workflow, ensuring brand authority and high conversion rates.",
      },
      {
        title: "Next.js App Router & Hybrid Rendering",
        desc: "Combines pre-rendered static content (SSG) for instant global edge delivery with dynamic server components where real-time data is needed.",
      },
      {
        title: "Dynamic Schema & Technical SEO",
        desc: "Semantic HTML5, automated XML sitemaps, JSON-LD structured data, and dynamic OpenGraph image generation.",
      },
      {
        title: "Type-Safe Modern Architecture",
        desc: "Full TypeScript implementation across props, API endpoints, and data layers preventing runtime errors in production.",
      },
    ],
    deliverables: [
      {
        title: "Custom Next.js / React Architecture",
        desc: "Production-ready codebase with clean directory structure, modular components, and reusable UI tokens.",
        iconName: "Code",
      },
      {
        title: "Tailwind CSS Design System",
        desc: "Strictly typed color palette, responsive typography scale, and accessible focus states matched to your brand.",
        iconName: "Palette",
      },
      {
        title: "Dynamic Interactive Components",
        desc: "Custom calculators, multi-step inquiry flows, interactive showcases, and smooth ambient animations.",
        iconName: "Cpu",
      },
      {
        title: "Automated Edge CI/CD Pipeline",
        desc: "GitHub webhook deployment pipeline delivering instant global CDN caching and atomic zero-downtime releases.",
        iconName: "Rocket",
      },
      {
        title: "Comprehensive Responsive Optimization",
        desc: "Pixel-perfect visual harmony and zero horizontal overflow across 375px mobile, tablet, and 4K ultra-wide screens.",
        iconName: "Smartphone",
      },
      {
        title: "Codebase Handover & Documentation",
        desc: "Git repository ownership, environment variable setup guide, and architectural documentation for your team.",
        iconName: "FileText",
      },
    ],
    stack: [
      {
        category: "Frontend Framework",
        tools: ["Next.js 15 (App Router)", "React 19", "TypeScript", "Tailwind CSS 3.4"],
        note: "Cutting-edge modern React ecosystem for ultimate rendering performance.",
      },
      {
        category: "Backend & Integrations",
        tools: ["Node.js", "Next.js Route Handlers", "REST / GraphQL APIs", "Resend / SendGrid"],
        note: "Secure serverless endpoints for form processing and third-party webhook handling.",
      },
      {
        category: "Tooling & Quality",
        tools: ["ESLint", "Prettier", "PostCSS", "Git / GitHub"],
        note: "Strict linting and typechecking pipelines enforcing clean code standards.",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Technical Scoping & Wireframing",
        desc: "Clarifying user personas, conversion goals, component hierarchies, and data models.",
      },
      {
        step: "02",
        title: "Design System & UI Prototyping",
        desc: "Establishing typography, color variables, spacing tokens, and responsive layout foundations.",
      },
      {
        step: "03",
        title: "Component Engineering & Interactivity",
        desc: "Building accessible React components, fluid animations, form validations, and routing architecture.",
      },
      {
        step: "04",
        title: "Performance, a11y & Edge Auditing",
        desc: "Lighthouse 100 audits, keyboard accessibility tests, cross-browser validation, and image compression.",
      },
      {
        step: "05",
        title: "Production Deployment & CDN Configuration",
        desc: "Configuring custom domain DNS, SSL certificates, edge cache rules, and production handover.",
      },
    ],
    standards: {
      performance:
        "Sub-500ms initial server response times, minimal JavaScript bundles, and 98+ PageSpeed mobile benchmarks.",
      security:
        "Strict Content Security Policies, sanitization on all user inputs, environment variable encapsulation, and SSL/TLS HTTPS enforcement.",
      maintainability:
        "Clean atomic component separation, strict TypeScript contracts, and standard Next.js conventions enabling any engineer to contribute effortlessly.",
    },
    faqs: [
      {
        question: "How does a custom Next.js site compare to WordPress?",
        answer:
          "Custom Next.js sites provide unmatched loading speeds, total design freedom, zero database bottlenecks, and superior resistance to common CMS vulnerabilities. They are ideal when maximum performance, unique branding, and custom web application capabilities are paramount.",
      },
      {
        question: "Can I manage content on a custom website?",
        answer:
          "Yes. We can integrate headless CMS options (such as Sanity, Strapi, or Supabase) or configure structured JSON/Markdown data files so non-technical team members can update text, projects, and media easily.",
      },
      {
        question: "Who owns the code upon completion?",
        answer:
          "You retain 100% intellectual property ownership of the entire repository, assets, and deployment configurations from day one.",
      },
      {
        question: "What hosting is recommended for custom websites?",
        answer:
          "Hostinger Node/VPS, Vercel, Netlify, or Cloudflare Pages are all exceptional options. We set up automated continuous deployment straight from your GitHub repository.",
      },
    ],
    relatedSlugs: [
      "full-stack-web-applications",
      "custom-saas-solutions",
      "technical-seo-speed-security",
    ],
  },
  {
    id: "svc-03",
    index: "03",
    slug: "full-stack-web-applications",
    title: "Full-Stack Web Applications",
    shortDescription:
      "Robust, scalable, and secure web applications with custom database architecture.",
    category: "Full-Stack & SaaS",
    iconType: "layers-cog",
    accentColor: "#339933",
    heroTagline:
      "Resilient End-to-End Web Applications Built for Heavy Business Workloads",
    valueProposition:
      "I engineer complete full-stack web platforms connecting reactive frontend interfaces with robust backend architectures, custom database schemas, authenticated access controls, and reliable real-time data pipelines.",
    quickSpecs: {
      idealFor:
        "Businesses creating internal operations software, customer portals, marketplace platforms, or data-intensive workflows.",
      coreStack:
        "React, Next.js, Node.js, Express, PostgreSQL / Supabase, Prisma ORM, Redis",
      deliveryApproach:
        "RESTful & Serverless API design, relational schema normalization, JWT/OAuth authentication",
      keyFocus:
        "Data integrity, low-latency API queries, role-based authorization, enterprise stability",
    },
    challenges: [
      {
        title: "Unscalable Backend Architectures",
        desc: "APIs that slow down under concurrent user requests due to unindexed queries and blocking synchronous operations.",
      },
      {
        title: "Weak Authentication & Authorization",
        desc: "Vulnerable login sessions, lack of granular Role-Based Access Control (RBAC), and exposed endpoints that risk sensitive data leaks.",
      },
      {
        title: "Disjointed Frontend and Backend Data States",
        desc: "Complex UI forms suffering from stale data, desynchronized caching, and unhandled network errors.",
      },
      {
        title: "Technical Debt & Spaghetti Codebases",
        desc: "Haphazardly assembled code lacking type contracts, database migrations, or structured error logging.",
      },
    ],
    solutions: [
      {
        title: "Normalized Relational Schemas & Indexing",
        desc: "PostgreSQL and Supabase data architectures with automated migrations, foreign key constraints, and optimized index trees.",
      },
      {
        title: "Hardened Role-Based Security",
        desc: "Enterprise authentication via Supabase Auth, NextAuth, or JWT with encrypted cookies, session invalidation, and strict RBAC guards.",
      },
      {
        title: "Reactive State Management & Optimistic UI",
        desc: "Clean client data fetching with React Query/SWR, optimistic UI updates, and real-time WebSocket subscriptions.",
      },
      {
        title: "Layered MVC Architecture & Type Safety",
        desc: "Strict separation between controllers, services, repositories, and UI components with end-to-end TypeScript models.",
      },
    ],
    deliverables: [
      {
        title: "Full-Stack System Architecture",
        desc: "Modular frontend UI and scalable backend services with comprehensive API route handling.",
        iconName: "Layers",
      },
      {
        title: "Database Modeling & Migrations",
        desc: "Fully normalized relational database schema with seed scripts, indexes, and automated Prisma migrations.",
        iconName: "Database",
      },
      {
        title: "Authentication & Authorization Engine",
        desc: "Secure user registration, password hashing (Argon2/Bcrypt), OAuth providers, and role-based permissions.",
        iconName: "Lock",
      },
      {
        title: "RESTful API with Swagger / Postman Specs",
        desc: "Self-documenting API endpoints with standardized JSON response schemas and error boundary handlers.",
        iconName: "Network",
      },
      {
        title: "Automated Data Validation Layer",
        desc: "Zod-powered runtime input validation on both frontend forms and backend endpoints preventing injection attacks.",
        iconName: "CheckCircle2",
      },
      {
        title: "Deployment & Environment Orchestration",
        desc: "Configured staging and production environments with automated connection pooling and backup schedules.",
        iconName: "Server",
      },
    ],
    stack: [
      {
        category: "Frontend UI Layer",
        tools: ["React 19", "Next.js", "TypeScript", "Tailwind CSS", "Zustand"],
        note: "Reactive user interface delivering sub-second state transitions.",
      },
      {
        category: "Backend & Runtime",
        tools: ["Node.js", "Express.js", "Next.js Server Actions", "Prisma ORM"],
        note: "High-throughput asynchronous event loop handling concurrent client requests.",
      },
      {
        category: "Database & Storage",
        tools: ["PostgreSQL", "Supabase", "Redis Cache", "AWS S3 / Supabase Storage"],
        note: "ACID-compliant relational storage with memory caching for sub-10ms queries.",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Entity-Relationship & Architecture Design",
        desc: "Mapping database entities, relationships, foreign keys, and access matrices.",
      },
      {
        step: "02",
        title: "API Foundation & Authentication Setup",
        desc: "Building authentication middleware, security guards, and baseline CRUD endpoints.",
      },
      {
        step: "03",
        title: "Frontend Application & State Wiring",
        desc: "Developing UI views, complex data tables, modal flows, and optimistic mutation states.",
      },
      {
        step: "04",
        title: "Security Hardening & Stress Testing",
        desc: "Executing rate-limiting audits, SQL injection prevention checks, and concurrent connection tests.",
      },
      {
        step: "05",
        title: "Production Launch & Data Seeding",
        desc: "Running production migrations, configuring backup snapshots, and handing over technical documentation.",
      },
    ],
    standards: {
      performance:
        "Sub-150ms average API response times, database connection pooling via PgBouncer, and aggressive Redis query caching.",
      security:
        "OWASP Top 10 compliance, CSRF token validation, HTTP-only secure cookies, and parameterized query execution.",
      maintainability:
        "Clean architecture separating business logic from transport protocols, 100% typed database models, and versioned migrations.",
    },
    faqs: [
      {
        question: "Can we use Supabase for our database and auth?",
        answer:
          "Yes. Supabase is one of our primary choices for full-stack projects because it provides a battle-tested PostgreSQL core, instant Row-Level Security (RLS), real-time subscriptions, and built-in auth without proprietary lock-in.",
      },
      {
        question: "How do you handle role permissions (e.g. Admin vs. Customer)?",
        answer:
          "We implement strict Role-Based Access Control (RBAC) enforced at both the database layer (via RLS / foreign keys) and the API middleware layer, ensuring unauthorized users can never access or modify restricted endpoints.",
      },
      {
        question: "Can this application integrate with our existing CRM or accounting tools?",
        answer:
          "Absolutely. We build modular integration adapters that connect with external APIs (Stripe, HubSpot, QuickBooks, Google Workspace, Slack) with built-in retry mechanisms and webhook listeners.",
      },
      {
        question: "What happens if our user base grows rapidly?",
        answer:
          "Our architectures separate stateless application servers from database connection pools, allowing horizontal scaling behind load balancers and CDNs without rewrites.",
      },
    ],
    relatedSlugs: [
      "custom-saas-solutions",
      "custom-website-development",
      "database-architecture-optimization",
    ],
  },
  {
    id: "svc-04",
    index: "04",
    slug: "ai-powered-web-applications",
    title: "AI-Powered Web Applications",
    shortDescription:
      "Intelligent web applications integrating advanced AI capabilities and generative workflows.",
    category: "AI & Automation",
    iconType: "ai-sparkles",
    accentColor: "#0EA5E9",
    heroTagline:
      "Transforming Business Logic with Production-Grade Generative & Predictive AI",
    valueProposition:
      "I architect intelligent web applications that integrate state-of-the-art Large Language Models, Retrieval-Augmented Generation (RAG) vector pipelines, and custom AI agents directly into real-world business workflows—delivering measurable automation and user delight.",
    quickSpecs: {
      idealFor:
        "Companies wanting custom AI copilots, automated customer agents, document analysis tools, or generative content workflows.",
      coreStack:
        "OpenAI API, Anthropic Claude, Google Gemini, LangChain, Pinecone / pgvector, Next.js, Node.js",
      deliveryApproach:
        "Server-side prompt engineering, streaming token responses, semantic embeddings, vector search",
      keyFocus:
        "Low latency, zero prompt injection vulnerabilities, factual reliability, cost-optimized token routing",
    },
    challenges: [
      {
        title: "AI Hallucinations & Inaccurate Outputs",
        desc: "Generic LLM implementations giving unreliable answers because they lack access to your company's proprietary data.",
      },
      {
        title: "High Latency & Clunky User Experience",
        desc: "Users waiting 10+ seconds for a response without streaming feedback or progressive UI rendering.",
      },
      {
        title: "Runaway API Costs & Uncontrolled Token Usage",
        desc: "Unoptimized prompts sending excessive context windows that cause astronomical monthly OpenAI or Anthropic bills.",
      },
      {
        title: "Prompt Injections & Data Privacy Leaks",
        desc: "Exposing API keys in client bundles or allowing malicious user inputs to hijack system prompts and extract confidential records.",
      },
    ],
    solutions: [
      {
        title: "Enterprise RAG & Semantic Vector Search",
        desc: "Indexing your documentation, contracts, or catalogs with pgvector or Pinecone so models answer strictly using verified facts.",
      },
      {
        title: "Real-Time Token Streaming (SSE)",
        desc: "Server-Sent Events streaming words to the user interface in real time (<250ms first-token latency) for a frictionless experience.",
      },
      {
        title: "Intelligent Model Routing & Caching",
        desc: "Routing simpler queries to lightweight fast models (GPT-4o mini / Claude Haiku) and complex reasoning to flagship models, with semantic caching.",
      },
      {
        title: "Encapsulated Server Gateways & Sanitization",
        desc: "All AI calls execute behind encrypted server route handlers with strict input sanitization, rate limiting, and prompt guards.",
      },
    ],
    deliverables: [
      {
        title: "Custom AI Assistant & Copilot Interfaces",
        desc: "Branded chat and copilot widgets with markdown formatting, code highlighting, and citation tags.",
        iconName: "Bot",
      },
      {
        title: "RAG Knowledge Base & Vector Indexing",
        desc: "Automated document ingestion pipeline (PDFs, Markdown, Web pages) converting content into semantic embeddings.",
        iconName: "FileSearch",
      },
      {
        title: "Custom AI Workflow & Agent Tool Calling",
        desc: "AI agents programmed with function calling to query internal databases, trigger emails, or generate structured JSON reports.",
        iconName: "Workflow",
      },
      {
        title: "Token Usage & Cost Control Dashboard",
        desc: "Monitoring system tracking token consumption, model response times, and per-user quota controls.",
        iconName: "BarChart3",
      },
      {
        title: "Structured Data Extraction Pipelines",
        desc: "Automated extraction pipelines converting messy invoices, resumes, or transcripts into structured database tables.",
        iconName: "Sparkles",
      },
      {
        title: "Safety & Prompt Defense Architecture",
        desc: "Multi-layer prompt engineering preventing jailbreaks, system prompt extraction, and out-of-scope conversations.",
        iconName: "ShieldAlert",
      },
    ],
    stack: [
      {
        category: "AI & LLM Providers",
        tools: ["OpenAI (GPT-4o)", "Anthropic Claude 3.5 Sonnet", "Google Gemini 1.5 Pro"],
        note: "Multi-provider architecture allowing seamless failover and optimal cost-to-performance routing.",
      },
      {
        category: "Vector Databases & Frameworks",
        tools: ["pgvector (PostgreSQL)", "Pinecone", "LangChain", "Vercel AI SDK"],
        note: "High-dimensional similarity search delivering sub-50ms context retrieval.",
      },
      {
        category: "Frontend & Streaming",
        tools: ["Next.js App Router", "Server-Sent Events (SSE)", "Tailwind CSS"],
        note: "Instant word-by-word streaming rendering with markdown parsing.",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "AI Opportunity & Data Auditing",
        desc: "Identifying high-ROI workflows, assessing proprietary knowledge sources, and defining accuracy metrics.",
      },
      {
        step: "02",
        title: "Embedding Pipeline & RAG Setup",
        desc: "Chunking, vectorizing, and indexing knowledge documents into high-performance vector databases.",
      },
      {
        step: "03",
        title: "System Prompt & Guardrail Engineering",
        desc: "Drafting strict system prompts, tool-calling schemas, few-shot examples, and fallback behaviors.",
      },
      {
        step: "04",
        title: "UI Streaming Integration & Testing",
        desc: "Connecting streaming endpoints to reactive frontend chat, review, and automation interfaces.",
      },
      {
        step: "05",
        title: "Cost Monitoring & Production Hardening",
        desc: "Setting up telemetry, cost alerting, prompt caching, and deployment to production edge servers.",
      },
    ],
    standards: {
      performance:
        "Sub-250ms first-token streaming latency, semantic vector search under 50ms, and prompt caching reducing repetitive token overhead by 70%.",
      security:
        "Zero API keys exposed to browser bundles, prompt injection defenses, PII masking, and isolated tenant RAG data spaces.",
      maintainability:
        "Modular prompt repositories, versioned model configurations, and decoupled LLM provider interfaces.",
    },
    faqs: [
      {
        question: "Will our proprietary business data be used to train public AI models?",
        answer:
          "No. We use commercial enterprise API tiers (OpenAI API, Anthropic, Google Cloud Vertex) whose contractual terms explicitly state that customer API data is never used to train or fine-tune public models.",
      },
      {
        question: "How do you prevent the AI from generating hallucinations?",
        answer:
          "We implement Retrieval-Augmented Generation (RAG). Instead of letting the model guess from general internet data, the system retrieves exact reference passages from your verified company documents and instructs the model to answer solely based on those citations.",
      },
      {
        question: "What are the ongoing costs of running an AI web application?",
        answer:
          "Ongoing costs depend on user query volume. By using token-efficient prompts, semantic caching, and routing simpler queries to economical models like GPT-4o mini, we keep operational API costs extremely low—often just a few dollars per thousand active conversations.",
      },
      {
        question: "Can the AI perform actions (like booking a meeting or updating a database)?",
        answer:
          "Yes. Using LLM Tool Calling / Function Calling, the AI can securely query database tables, validate inputs, send automated notification emails, or trigger external webhooks when the user requests it.",
      },
    ],
    relatedSlugs: [
      "api-integration-ai-automation",
      "full-stack-web-applications",
      "custom-saas-solutions",
    ],
  },
  {
    id: "svc-05",
    index: "05",
    slug: "custom-saas-solutions",
    title: "Custom SaaS Solutions",
    shortDescription:
      "Architecting multi-tenant Software-as-a-Service platforms, subscription systems, and user management.",
    category: "Full-Stack & SaaS",
    iconType: "cloud-saas",
    accentColor: "#004275",
    heroTagline:
      "Architecting Commercial Multi-Tenant Software-as-a-Service Platforms",
    valueProposition:
      "I turn software ideas into production-ready SaaS platforms equipped with robust multi-tenant data isolation, Stripe subscription billing, granular role permissions, user onboarding flows, and automated back-office telemetry.",
    quickSpecs: {
      idealFor:
        "Entrepreneurs, bootstrappers, and enterprises launching recurring-revenue subscription platforms or B2B tools.",
      coreStack:
        "Next.js, React, Node.js, PostgreSQL / Supabase, Stripe Billing, Tailwind CSS, Redis",
      deliveryApproach:
        "Multi-tenant database schema, Stripe webhook reconciliation, automated onboarding, transactional emails",
      keyFocus:
        "Tenant isolation, zero subscription billing edge-case failures, scalable user management, high conversion",
    },
    challenges: [
      {
        title: "Multi-Tenant Data Leaks",
        desc: "Poor architectural isolation where one company or user could accidentally view another tenant's private records.",
      },
      {
        title: "Billing Synchronization & Failed Payments",
        desc: "Stripe webhooks failing silently, leading to users getting free access or paying subscribers being incorrectly locked out.",
      },
      {
        title: "Complex Onboarding & High Churn",
        desc: "Convoluted signup steps with high friction that cause prospects to drop off before experiencing the core product value.",
      },
      {
        title: "Infrastructure Scaling Bottlenecks",
        desc: "Monolithic databases locking up when dozens of users execute reporting tasks simultaneously.",
      },
    ],
    solutions: [
      {
        title: "Strict Tenant Isolation & Row-Level Security",
        desc: "Enforcing tenant-scoped database queries and Supabase Row-Level Security (RLS) guaranteeing total cross-tenant isolation.",
      },
      {
        title: "Bulletproof Stripe Billing Engine",
        desc: "Complete subscription lifecycle handling: upgrades, downgrades, metered billing, automated invoice receipts, and dunning management.",
      },
      {
        title: "Frictionless Self-Serve Onboarding",
        desc: "Instant workspace provisioning, magic-link / OAuth signups, guided checklists, and automated transactional onboarding sequences.",
      },
      {
        title: "Asynchronous Background Jobs & Caching",
        desc: "Offloading intensive tasks (PDF generation, webhooks, analytics aggregation) to Redis/BullMQ background worker queues.",
      },
    ],
    deliverables: [
      {
        title: "Multi-Tenant Core Architecture",
        desc: "Workspace / Organization data model supporting team invites, seat licenses, and granular role assignments.",
        iconName: "Building2",
      },
      {
        title: "Stripe Subscription & Customer Portal",
        desc: "Turnkey integration with Stripe Checkout, Customer Portal, tiered pricing, coupon codes, and tax calculation.",
        iconName: "CreditCard",
      },
      {
        title: "User Management & Team Permissions",
        desc: "Role-Based Access Control (Owner, Admin, Member, Viewer) with secure audit logs and invitation tokens.",
        iconName: "Users",
      },
      {
        title: "Customer Analytics & Usage Tracking",
        desc: "Real-time usage counters, tier quota enforcement, and administrative SaaS performance dashboards.",
        iconName: "LineChart",
      },
      {
        title: "Transactional Email Automation",
        desc: "Branded automated emails for verification, password resets, payment notifications, and onboarding tips via Resend.",
        iconName: "Mail",
      },
      {
        title: "Production Infrastructure & CI/CD",
        desc: "Complete Docker/Serverless deployment setup with environment isolation, database backups, and SSL automation.",
        iconName: "CloudCog",
      },
    ],
    stack: [
      {
        category: "SaaS Application Stack",
        tools: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS"],
        note: "Fast, responsive app interface optimized for daily enterprise productivity.",
      },
      {
        category: "Billing & Subscriptions",
        tools: ["Stripe API", "Stripe Webhooks", "Stripe Customer Portal"],
        note: "Globally compliant recurring revenue infrastructure supporting cards, Apple Pay, and SEPA.",
      },
      {
        category: "Database & Workers",
        tools: ["PostgreSQL (Supabase)", "Prisma ORM", "Redis", "BullMQ"],
        note: "Robust relational data storage with asynchronous background worker queues.",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Business Model & Feature Scoping",
        desc: "Defining subscription tiers, seat structures, feature gates, and core workflow interactions.",
      },
      {
        step: "02",
        title: "Multi-Tenant Database & Auth Setup",
        desc: "Building the workspace/tenant data model, Row-Level Security policies, and authentication flows.",
      },
      {
        step: "03",
        title: "Core Feature Engine & Stripe Billing",
        desc: "Implementing the proprietary SaaS product features and wiring Stripe webhooks for subscription management.",
      },
      {
        step: "04",
        title: "Team Collaboration & Onboarding Polish",
        desc: "Building team invite systems, transactional email triggers, and frictionless initial onboarding walkthroughs.",
      },
      {
        step: "05",
        title: "Security Testing & Commercial Launch",
        desc: "Auditing multi-tenant leak vectors, testing edge-case webhook failures, and deploying to live production.",
      },
    ],
    standards: {
      performance:
        "Instant optimistic UI mutations, sub-200ms dashboard queries, and background asynchronous offloading for heavy operations.",
      security:
        "Row-Level Security on every table, encrypted Stripe secrets, tenant ID validation on every API request, and CSRF protection.",
      maintainability:
        "Feature-flagged modular code, typed webhook payload handlers, and clear database migration logs.",
    },
    faqs: [
      {
        question: "How long does it take to launch an MVP SaaS platform?",
        answer:
          "A scoped, commercial MVP with authentication, team workspaces, Stripe billing, and primary core features typically launches within 4 to 8 weeks depending on technical complexity.",
      },
      {
        question: "How are Stripe webhooks protected against missed events?",
        answer:
          "We verify Stripe cryptographic webhook signatures on every incoming event and implement idempotent database transactions with retry workers, guaranteeing no payment or cancellation event is ever lost.",
      },
      {
        question: "Can users invite team members to their subscription?",
        answer:
          "Yes. Our SaaS architectures feature team invitation workflows where workspace owners can invite teammates via email and assign specific roles (Admin, Editor, Viewer).",
      },
      {
        question: "Can we support both monthly and annual subscription billing?",
        answer:
          "Yes. We configure pricing tables that allow users to toggle between monthly and annual plans (including automated discount calculations) seamlessly handled by Stripe.",
      },
    ],
    relatedSlugs: [
      "full-stack-web-applications",
      "custom-admin-panels-portals",
      "ai-powered-web-applications",
    ],
  },
  {
    id: "svc-06",
    index: "06",
    slug: "ecommerce-woocommerce-systems",
    title: "eCommerce & WooCommerce Systems",
    shortDescription:
      "Conversion-focused online stores with seamless payment flows, memberships, and advanced management.",
    category: "WordPress & eCommerce",
    iconType: "ecommerce-cart",
    accentColor: "#7F54B3",
    heroTagline:
      "High-Conversion eCommerce Stores Engineered for Speed, Scale & Revenue",
    valueProposition:
      "I build custom, conversion-optimized WooCommerce and modern eCommerce platforms that combine frictionless checkout funnels, automated payment gateways, inventory synchronization, and sub-second load times that maximize sales.",
    quickSpecs: {
      idealFor:
        "DTC brands, B2B wholesale merchants, digital product sellers, and retailers looking to escape high SaaS platform fees.",
      coreStack:
        "WooCommerce, WordPress, Stripe, PayPal, Custom PHP, Next.js (Headless eCommerce optional)",
      deliveryApproach:
        "Streamlined 1-page checkout funnels, database query caching, automated inventory syncing, tax automation",
      keyFocus:
        "Frictionless checkout, cart abandonment reduction, mobile purchase speed, bulletproof security",
    },
    challenges: [
      {
        title: "High Checkout Abandonment Rates",
        desc: "Clunky default multi-step checkout pages requiring unnecessary clicks and causing mobile shoppers to abandon carts.",
      },
      {
        title: "Slow Cart & Checkout Performance",
        desc: "WooCommerce sites with heavy database overhead that take 4+ seconds to load cart or checkout pages.",
      },
      {
        title: "Failed Payment Gateway Webhooks",
        desc: "Orders stuck in 'pending' status due to misconfigured payment webhooks, leading to frustrated customers and support tickets.",
      },
      {
        title: "Messy Inventory & Shipping Rules",
        desc: "Difficulty handling complex shipping zones, wholesale tier pricing, digital downloads, or recurring memberships.",
      },
    ],
    solutions: [
      {
        title: "Optimized 1-Page Checkout Funnels",
        desc: "Custom-designed, mobile-first single-page checkout with express wallets (Apple Pay, Google Pay) and auto-address completion.",
      },
      {
        title: "High-Speed WooCommerce Database Tuning",
        desc: "High-Performance Order Storage (HPOS) configuration, disabled cart fragments on static pages, and Redis object caching.",
      },
      {
        title: "Reliable Multi-Gateway Payment Architecture",
        desc: "Fully verified integrations with Stripe, PayPal, Klarna, and local gateways with idempotent webhook reconciliation.",
      },
      {
        title: "Custom Shipping, Wholesale & Membership Rules",
        desc: "Tailored rules for dynamic tiered pricing, subscriptions, digital license generation, and automated shipping calculators.",
      },
    ],
    deliverables: [
      {
        title: "Custom WooCommerce Theme / Layouts",
        desc: "High-converting product catalog, filterable category archives, and responsive single product pages.",
        iconName: "ShoppingBag",
      },
      {
        title: "High-Conversion Express Checkout",
        desc: "Frictionless checkout experience supporting Apple Pay, Google Pay, credit cards, and buy-now-pay-later options.",
        iconName: "CreditCard",
      },
      {
        title: "HPOS & WooCommerce Performance Tuning",
        desc: "Migration to High-Performance Order Storage, query optimization, and sub-second cart loading speeds.",
        iconName: "Zap",
      },
      {
        title: "Automated Tax & Shipping Integration",
        desc: "Live calculation for regional sales taxes (Avalara/Stripe Tax) and carrier shipping APIs (FedEx, UPS, DHL).",
        iconName: "Truck",
      },
      {
        title: "Transactional Email & Invoice Templates",
        desc: "Branded HTML order confirmation emails, PDF invoice generation, and automated tracking notification flows.",
        iconName: "Receipt",
      },
      {
        title: "Payment Gateway Hardening & Webhook Audit",
        desc: "End-to-end sandbox testing of refunds, failed payments, subscription renewals, and 3D Secure authentication.",
        iconName: "ShieldCheck",
      },
    ],
    stack: [
      {
        category: "eCommerce Engine",
        tools: ["WooCommerce 8.x+", "WordPress 6.x", "HPOS (Custom Tables)", "PHP 8.3"],
        note: "Modern WooCommerce decoupled from postmeta tables for enterprise order concurrency.",
      },
      {
        category: "Payments & Wallets",
        tools: ["Stripe", "Apple Pay", "Google Pay", "PayPal Commerce", "Klarna"],
        note: "Express mobile checkouts designed to lift conversions by up to 35%.",
      },
      {
        category: "Caching & Edge",
        tools: ["Redis Object Cache", "Hostinger Edge CDN", "Cloudflare Super Page Cache"],
        note: "Smart edge rules bypassing cache exclusively for cart, checkout, and account pages.",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Product Catalog & Merchant Strategy",
        desc: "Analyzing product attributes, shipping logistics, currency requirements, and payment processing rules.",
      },
      {
        step: "02",
        title: "Custom Storefront & Funnel Engineering",
        desc: "Building intuitive category filtering, product image galleries, and streamlined 1-page checkout funnels.",
      },
      {
        step: "03",
        title: "Payment, Tax & Shipping Automation",
        desc: "Configuring payment gateway webhooks, automated sales tax calculations, and real-time shipping rate tables.",
      },
      {
        step: "04",
        title: "HPOS Optimization & Load Testing",
        desc: "Optimizing database queries, benchmarking checkout speed, and verifying mobile payment flows across devices.",
      },
      {
        step: "05",
        title: "Merchant Training & Live Transition",
        desc: "Testing live penny transactions, training store staff on order fulfillment, and initiating production launch.",
      },
    ],
    standards: {
      performance:
        "Sub-1.2s cart and checkout response times, lightweight scripts, and zero cart-fragment overhead on catalog pages.",
      security:
        "PCI-DSS compliant hosted payment tokenization, HTTPS 3D Secure 2.0 verification, and anti-fraud velocity filters.",
      maintainability:
        "Clean hook-based custom code placed in custom child themes and site-specific plugins rather than arbitrary functions.php hacks.",
    },
    faqs: [
      {
        question: "Can WooCommerce handle thousands of products and orders?",
        answer:
          "Yes. With WooCommerce's High-Performance Order Storage (HPOS), dedicated database indexing, and Redis caching, WooCommerce comfortably powers stores handling tens of thousands of products and high order volumes.",
      },
      {
        question: "Can we migrate products and customer accounts from Shopify?",
        answer:
          "Yes. We execute safe data migrations that import your products, customer records, historical orders, and SEO redirect maps without losing your search rankings.",
      },
      {
        question: "Do you support recurring subscriptions and memberships?",
        answer:
          "Absolutely. We build subscription architectures with automated monthly/annual billing, member-exclusive content gates, and self-service account management.",
      },
      {
        question: "How are credit cards handled securely?",
        answer:
          "All card details are tokenized directly through certified gateway providers (Stripe/PayPal). Sensitive credit card numbers never touch or store on your server, ensuring full PCI-DSS compliance.",
      },
    ],
    relatedSlugs: [
      "wordpress-divi-5-development",
      "technical-seo-speed-security",
      "website-migration-staging",
    ],
  },
  {
    id: "svc-07",
    index: "07",
    slug: "api-integration-ai-automation",
    title: "API Integration & AI Automation",
    shortDescription:
      "Connecting systems, automating workflows, and orchestrating intelligent data pipeline integrations.",
    category: "AI & Automation",
    iconType: "api-automation",
    accentColor: "#059669",
    heroTagline:
      "Unifying Disconnected Systems with Robust APIs & Intelligent Automated Pipelines",
    valueProposition:
      "I eliminate manual data entry and broken business processes by engineering bulletproof API connectors, event-driven webhooks, and AI-powered automation pipelines that synchronize your tech stack 24/7 with zero human intervention.",
    quickSpecs: {
      idealFor:
        "Operations teams, digital agencies, and businesses spending valuable hours moving data manually between tools.",
      coreStack:
        "Node.js, Express, REST / GraphQL, Webhooks, OpenAI API, Make / Zapier, PostgreSQL, Redis",
      deliveryApproach:
        "Event-driven architecture, resilient retry queues, structured JSON schemas, comprehensive error alerting",
      keyFocus:
        "100% data reliability, zero lost webhook payloads, exponential backoff retries, end-to-end security",
    },
    challenges: [
      {
        title: "Manual Copy-Pasting Across Disconnected Software",
        desc: "Teams wasting hundreds of hours every month manually copying leads, orders, or support requests between apps.",
      },
      {
        title: "Lost Webhooks & Silent Pipeline Failures",
        desc: "Third-party services failing without notification, leaving orders unprocessed or CRMs desynchronized.",
      },
      {
        title: "Rate Limits & API Quota Stockouts",
        desc: "Applications crashing when exceeding third-party API rate limits during traffic surges or bulk sync operations.",
      },
      {
        title: "Inflexible Pre-Built Connector Limitations",
        desc: "Off-the-shelf Zapier connectors that cannot handle complex custom business logic, data formatting, or conditional branching.",
      },
    ],
    solutions: [
      {
        title: "Custom Microservice Connectors & Webhook Handlers",
        desc: "Lightweight Node.js and Next.js route handlers programmed specifically to bridge your proprietary software with third-party APIs.",
      },
      {
        title: "Exponential Backoff & Dead-Letter Queues",
        desc: "Redis-backed BullMQ message queues that automatically retry failed API calls and alert engineering if an endpoint remains down.",
      },
      {
        title: "Rate-Limiting & Token Bucket Algorithms",
        desc: "Intelligent throttling ensuring your integrations stay within third-party rate limits while processing maximum data throughput.",
      },
      {
        title: "AI-Augmented Data Cleaning & Parsing",
        desc: "Integrating LLM extractors that normalize messy incoming data, summarize customer messages, and categorize records before saving.",
      },
    ],
    deliverables: [
      {
        title: "Custom REST / Webhook Integration Suite",
        desc: "Dedicated webhook endpoints with signature validation, payload parsing, and bidirectional synchronization.",
        iconName: "Network",
      },
      {
        title: "Resilient Asynchronous Queue Engine",
        desc: "Message queue infrastructure handling high-volume background jobs with automatic retry logic.",
        iconName: "Cpu",
      },
      {
        title: "CRM & ERP Automated Workflows",
        desc: "Automated pipelines synchronizing leads, deals, contacts, and transactions across HubSpot, Salesforce, and custom DBs.",
        iconName: "RefreshCw",
      },
      {
        title: "Intelligent Email & Document Parsers",
        desc: "AI pipelines that parse incoming emails, PDF invoices, and form submissions into structured database records.",
        iconName: "FileText",
      },
      {
        title: "Real-Time Error Alerting & Logs",
        desc: "Slack or email notifications alerting your team instantly if an external service experiences an outage.",
        iconName: "Bell",
      },
      {
        title: "Comprehensive API Documentation",
        desc: "Postman collections, payload schemas, and environment configuration instructions for ongoing maintenance.",
        iconName: "BookOpen",
      },
    ],
    stack: [
      {
        category: "Integration Core",
        tools: ["Node.js", "Express", "Next.js Route Handlers", "Axios / Fetch"],
        note: "Fast asynchronous runtime with custom HTTP middleware and signature verification.",
      },
      {
        category: "Queues & Caching",
        tools: ["Redis", "BullMQ", "PostgreSQL"],
        note: "Persistent message queues ensuring zero dropped payloads during third-party outages.",
      },
      {
        category: "Third-Party Services",
        tools: ["Stripe", "HubSpot", "OpenAI", "Google Workspace", "Slack API"],
        note: "Standardized authentication using OAuth 2.0 and encrypted API bearer keys.",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Workflow Mapping & Schema Audit",
        desc: "Documenting trigger events, data payloads, transformation logic, and endpoint specifications.",
      },
      {
        step: "02",
        title: "Authentication & Security Architecture",
        desc: "Establishing secure credential storage, OAuth token refresh flows, and webhook signature verification.",
      },
      {
        step: "03",
        title: "Connector Engineering & Queue Setup",
        desc: "Building transformation middleware, queue workers, rate limiters, and idempotency keys.",
      },
      {
        step: "04",
        title: "Edge Case & Failure Simulation Testing",
        desc: "Simulating external downtime, bad payloads, and network timeouts to confirm recovery mechanisms.",
      },
      {
        step: "05",
        title: "Live Deployment & Telemetry Monitoring",
        desc: "Activating production pipelines, connecting Slack alerts, and monitoring live transaction health.",
      },
    ],
    standards: {
      performance:
        "Sub-100ms webhook receipt acknowledgments with asynchronous background queue processing.",
      security:
        "HMAC SHA-256 webhook signature validation, encrypted API secrets, and TLS 1.3 in-transit data protection.",
      maintainability:
        "Centralized API client classes, strict Zod schema validations, and detailed transaction logs for effortless debugging.",
    },
    faqs: [
      {
        question: "What happens if a third-party API (like HubSpot or Stripe) goes down temporarily?",
        answer:
          "Our integrations use asynchronous message queues with exponential backoff. If an external service is temporarily unreachable, the job waits safely in the queue and retries automatically once the service recovers, ensuring no data is ever lost.",
      },
      {
        question: "Can you connect proprietary software that doesn't have a Zapier app?",
        answer:
          "Yes. That is our core specialty. We write custom API adapters that communicate directly with any system supporting REST, GraphQL, SOAP, or webhooks.",
      },
      {
        question: "How do you protect webhook endpoints from hackers?",
        answer:
          "We verify the cryptographic HMAC signature attached to every incoming webhook payload, reject unauthenticated requests immediately, and apply IP allow-listing and rate limiting.",
      },
      {
        question: "Can we use AI to summarize or categorize data during the sync?",
        answer:
          "Yes. We frequently integrate LLM micro-steps in automation pipelines to automatically categorize incoming support tickets, extract line items from PDF attachments, or draft personalized follow-ups.",
      },
    ],
    relatedSlugs: [
      "ai-powered-web-applications",
      "full-stack-web-applications",
      "database-architecture-optimization",
    ],
  },
  {
    id: "svc-08",
    index: "08",
    slug: "technical-seo-speed-security",
    title: "Technical SEO, Speed & Security",
    shortDescription:
      "Optimizing website performance, enhancing loading speeds, and implementing advanced security.",
    category: "SEO, Speed & Security",
    iconType: "speedometer-shield",
    accentColor: "#059669",
    heroTagline:
      "Engineered for Maximum Search Rankings, Instant Load Speeds & Ironclad Security",
    valueProposition:
      "I transform sluggish, vulnerable websites into lightning-fast, search-dominant digital engines by systematically resolving Core Web Vitals bottlenecks, structural crawling barriers, and critical security vulnerabilities.",
    quickSpecs: {
      idealFor:
        "Websites failing Google Core Web Vitals, experiencing search traffic drops, or needing enterprise security hardening.",
      coreStack:
        "PageSpeed Insights, Chrome DevTools, Cloudflare, Security Headers, Redis, Schema.org",
      deliveryApproach:
        "Audit-driven remediation, asset tree-shaking, server-level caching, zero layout shift (CLS)",
      keyFocus:
        "95+ Mobile PageSpeed, sub-1s LCP, flawless crawlability, zero malware vulnerabilities",
    },
    challenges: [
      {
        title: "Failing Google Core Web Vitals (LCP, INP, CLS)",
        desc: "Pages that take seconds to render hero sections or shift around during loading, causing Google to downgrade organic rankings.",
      },
      {
        title: "Render-Blocking Scripts & Huge Asset Bundles",
        desc: "Megabytes of unoptimized JavaScript and CSS loading synchronously before the visitor can see any meaningful content.",
      },
      {
        title: "Indexation Errors & Broken Schema Markup",
        desc: "Missing canonical tags, incorrect robots.txt directives, and malformed JSON-LD preventing Google from displaying rich snippets.",
      },
      {
        title: "Vulnerable Headers & Brute-Force Exposure",
        desc: "Websites lacking Content Security Policies, exposed to cross-site scripting (XSS), clickjacking, and bot traffic attacks.",
      },
    ],
    solutions: [
      {
        title: "Systematic Core Web Vitals Remediation",
        desc: "Preloading critical hero fonts and images, inlining critical path CSS, and eliminating cumulative layout shifts completely.",
      },
      {
        title: "Advanced Server Caching & Edge Optimization",
        desc: "Configuring Redis object caching, Cloudflare Tiered Caching, HTTP/3, and modern image compression (WebP / AVIF).",
      },
      {
        title: "Clean JSON-LD Structured Schema & Sitemap Architecture",
        desc: "Injecting valid schema markup (Organization, Service, FAQ, Breadcrumbs) and generating automated XML sitemaps.",
      },
      {
        title: "Multi-Layer Security Hardening & CSP",
        desc: "Implementing strict Content Security Policy (CSP), HSTS, X-Frame-Options, rate limiting, and brute-force defenses.",
      },
    ],
    deliverables: [
      {
        title: "Full PageSpeed & Core Web Vitals Overhaul",
        desc: "Targeted remediation achieving 90–100 Google PageSpeed mobile and desktop scores.",
        iconName: "Zap",
      },
      {
        title: "Render-Blocking Asset Elimination",
        desc: "Deferred script loading, CSS code splitting, and automated critical CSS generation.",
        iconName: "Code",
      },
      {
        title: "Structured Data & Rich Snippet Implementation",
        desc: "Valid JSON-LD schema injection for services, FAQs, reviews, and breadcrumbs.",
        iconName: "Search",
      },
      {
        title: "Edge CDN & Caching Configuration",
        desc: "Fine-tuned Cloudflare or host-level edge caching rules delivering sub-100ms TTFB worldwide.",
        iconName: "Globe",
      },
      {
        title: "Enterprise HTTP Security Headers",
        desc: "A+ security grading on SecurityHeaders.com with CSP, HSTS, X-Content-Type, and Referrer policies.",
        iconName: "ShieldCheck",
      },
      {
        title: "Before & After Performance Audit Report",
        desc: "Transparent report documenting exact loading metrics, asset weight reductions, and search crawl improvements.",
        iconName: "FileCheck",
      },
    ],
    stack: [
      {
        category: "Diagnostics & Auditing",
        tools: ["Google PageSpeed Insights", "Lighthouse", "Chrome DevTools", "Google Search Console"],
        note: "Deep technical profiling identifying bottlenecks at the network, parser, and compositor levels.",
      },
      {
        category: "CDN & Edge Acceleration",
        tools: ["Cloudflare", "Hostinger Edge CDN", "HTTP/3", "Brotli"],
        note: "Global edge caching delivering assets from servers physically closest to each visitor.",
      },
      {
        category: "Security Headers & Hardening",
        tools: ["Content Security Policy (CSP)", "HSTS", "Fail2ban / WAF"],
        note: "Preventing cross-site scripting, unauthorized framing, and automated malicious scrapers.",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Diagnostic Profiling & Benchmark Capture",
        desc: "Recording baseline metrics across PageSpeed, Search Console crawl logs, and security header analyzers.",
      },
      {
        step: "02",
        title: "Asset Optimization & Critical Path Inlining",
        desc: "Compressing images, converting to WebP/AVIF, preloading fonts, and eliminating render-blocking CSS/JS.",
      },
      {
        step: "03",
        title: "Server & Edge Cache Tuning",
        desc: "Configuring Redis object caching, fast TTFB rules, Brotli compression, and CDN page caching.",
      },
      {
        step: "04",
        title: "Schema Markup & Technical SEO Audit",
        desc: "Validating structured JSON-LD data, canonical references, robots directives, and dynamic sitemaps.",
      },
      {
        step: "05",
        title: "Security Hardening & Final Benchmark Report",
        desc: "Applying security headers, running penetration scans, and delivering the verified Before/After performance report.",
      },
    ],
    standards: {
      performance:
        "Guaranteed passing grades on Core Web Vitals: LCP < 1.2s, INP < 200ms, and CLS = 0.",
      security:
        "A+ rating on SecurityHeaders.com, HSTS preloading enabled, and SSL Labs Grade A+ configuration.",
      maintainability:
        "Automated build-time optimization scripts and clean documentation ensuring speed improvements persist after future content updates.",
    },
    faqs: [
      {
        question: "How long does it take for Google to reflect Core Web Vitals improvements?",
        answer:
          "While lab tests (Lighthouse) show speed gains immediately, Google Chrome User Experience (CrUX) field data collects real-world user metrics over a rolling 28-day cycle, after which Search Console reflects the updated passing status.",
      },
      {
        question: "Will speed optimizations break my website's visual design?",
        answer:
          "Never. We do not disable necessary design features. We optimize how assets are loaded (deferring non-critical scripts, inlining critical above-the-fold CSS, preloading key fonts) so the exact same design renders twice as fast.",
      },
      {
        question: "What is Schema Markup and why does it help SEO?",
        answer:
          "Schema Markup is structured machine-readable code (JSON-LD) that tells search engines exactly what your business, services, pricing, and FAQs are. It allows Google to generate rich snippet search results (star ratings, FAQ dropdowns, breadcrumbs), dramatically lifting click-through rates.",
      },
      {
        question: "Can you fix security vulnerabilities on an existing site?",
        answer:
          "Yes. We conduct complete security hardening audits to identify outdated packages, inject strict security headers, configure firewall rules, and close unauthorized access vectors.",
      },
    ],
    relatedSlugs: [
      "wordpress-divi-5-development",
      "custom-website-development",
      "maintenance-hardening-support",
    ],
  },
  {
    id: "svc-09",
    index: "09",
    slug: "website-migration-staging",
    title: "Website Migration, Staging & Zero-Downtime Upgrades",
    shortDescription:
      "Frictionless migration between hosts, safe staging-to-production deployment pipelines, and database transfers without downtime.",
    category: "WordPress & eCommerce",
    iconType: "server-migration",
    accentColor: "#0284C7",
    heroTagline:
      "Seamless Server & Platform Migrations with Zero Downtime and Zero SEO Loss",
    valueProposition:
      "I manage complex server migrations, platform switches, and staging environment architectures with surgical precision—ensuring zero downtime, zero lost customer transactions, and 100% preservation of your SEO rankings.",
    quickSpecs: {
      idealFor:
        "Merchants changing hosts, moving from staging to live, or upgrading major CMS / database versions safely.",
      coreStack:
        "SSH / Bash, rsync, WP-CLI, MySQL dump, Cloudflare DNS, Hostinger / Cloudways / AWS",
      deliveryApproach:
        "Pre-migration sandbox verification, low-TTL DNS switching, automated URL search-and-replace",
      keyFocus:
        "Zero downtime, 100% data fidelity, SEO URL redirect preservation, staging isolation",
    },
    challenges: [
      {
        title: "Costly Downtime During DNS Propagation",
        desc: "Websites going offline for hours or days during server transfers, losing valuable customer inquiries and sales.",
      },
      {
        title: "Lost Customer Transactions & Database Desync",
        desc: "Orders or form submissions made during the migration window disappearing due to poor database cutoff timing.",
      },
      {
        title: "Broken Permalinks & Google Traffic Disasters",
        desc: "Improper URL rewrites and missing 301 redirects causing 404 errors that obliterate years of organic search equity.",
      },
      {
        title: "Corrupted Serialized Database Records",
        desc: "Standard SQL find-and-replace queries breaking serialized PHP strings, corrupting theme settings and widget configurations.",
      },
    ],
    solutions: [
      {
        title: "Zero-Downtime Low-TTL DNS Cutover",
        desc: "Lowering DNS TTLs in advance and syncing files/databases in the background so the switchover happens instantaneously.",
      },
      {
        title: "Transaction-Safe Maintenance Mode & Final Delta Sync",
        desc: "Temporarily freezing new orders, pulling the final delta snapshot, and repointing DNS in under 60 seconds.",
      },
      {
        title: "WP-CLI Safe Serialized Search & Replace",
        desc: "Using native CLI tools that safely recalculate serialized string lengths, ensuring zero corrupted settings.",
      },
      {
        title: "Comprehensive 301 Redirect Mapping & Auditing",
        desc: "Creating 1-to-1 redirect tables for all legacy URLs, validated against crawl logs to preserve 100% of organic traffic.",
      },
    ],
    deliverables: [
      {
        title: "Full Website & Database Migration",
        desc: "Complete transfer of all core files, themes, media uploads, and relational database tables.",
        iconName: "Server",
      },
      {
        title: "Isolated Staging Sandbox Setup",
        desc: "Password-protected staging copy with automated staging-to-production synchronization.",
        iconName: "GitBranch",
      },
      {
        title: "SEO Permalink & 301 Redirect Preservation",
        desc: "Exhaustive URL mapping and server-level 301 redirects preventing 404 search rank penalties.",
        iconName: "Link2",
      },
      {
        title: "SSL Certificate & DNS Optimization",
        desc: "Automated Let's Encrypt / Cloudflare SSL installation, SPF/DKIM email record preservation, and low-TTL DNS management.",
        iconName: "ShieldCheck",
      },
      {
        title: "Pre & Post-Migration Verification Audit",
        desc: "Thorough testing of contact forms, checkouts, user logins, and database integrity before decommissioning old servers.",
        iconName: "CheckCircle2",
      },
      {
        title: "Full Off-Site Backup Archive",
        desc: "Complete encrypted snapshot of the legacy environment stored safely on off-site cloud storage.",
        iconName: "HardDrive",
      },
    ],
    stack: [
      {
        category: "Migration & CLI Tools",
        tools: ["SSH / SFTP", "rsync", "WP-CLI", "mysqldump", "Git"],
        note: "Direct server-to-server data transfers bypassing slow browser upload limits.",
      },
      {
        category: "DNS & Edge Routing",
        tools: ["Cloudflare DNS", "Hostinger hPanel", "Let's Encrypt SSL"],
        note: "Fast global DNS propagation with sub-5-minute TTL thresholds.",
      },
      {
        category: "Verification",
        tools: ["Screaming Frog SEO Spider", "Chrome DevTools", "Mail-Tester"],
        note: "Comprehensive link crawl and transactional email deliverability checks.",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Target Server & Pre-Flight Audit",
        desc: "Verifying PHP versions, database collation, server memory limits, and DNS access.",
      },
      {
        step: "02",
        title: "Baseline Backup & Staging Clone",
        desc: "Generating full off-site snapshots and deploying a private staging sandbox on the destination host.",
      },
      {
        step: "03",
        title: "Sandbox Testing & Configuration",
        desc: "Testing forms, eCommerce checkout, user accounts, and fixing serialized database paths.",
      },
      {
        step: "04",
        title: "Low-TTL Cutover & Final Delta Sync",
        desc: "Reducing DNS TTLs, executing the final data delta sync, and switching traffic with zero downtime.",
      },
      {
        step: "05",
        title: "Post-Migration Crawl & Decommissioning",
        desc: "Running full link crawlers, verifying SSL certificates, and confirming healthy search console status.",
      },
    ],
    standards: {
      performance:
        "Zero seconds of website downtime during switchover and verified faster TTFB on the upgraded destination server.",
      security:
        "Encrypted SSH data transit, immediate update of database credentials and salts, and active SSL enforcement.",
      maintainability:
        "Permanent 1-click staging sandbox setup allowing all future updates to be tested safely before touching production.",
    },
    faqs: [
      {
        question: "Will my website go offline during the migration?",
        answer:
          "No. We set up and verify the entire website on the new server before any DNS records are updated. When DNS is switched, visitors smoothly transition to the new host with zero interruption.",
      },
      {
        question: "Will moving to a new host hurt my Google SEO rankings?",
        answer:
          "When executed properly, migrations do not harm SEO—in fact, moving to a faster host often improves rankings. We ensure all URL structures are preserved 100% and any changed URLs receive permanent server-level 301 redirects.",
      },
      {
        question: "What happens to emails associated with our domain?",
        answer:
          "We preserve all existing MX, SPF, DKIM, and DMARC DNS records so your business email continues sending and receiving uninterrupted throughout the migration.",
      },
      {
        question: "Can you migrate between completely different hosting companies?",
        answer:
          "Yes. We migrate between any web hosts (Hostinger, SiteGround, Bluehost, WP Engine, Cloudways, DigitalOcean, AWS) using secure direct server-to-server SSH transfers.",
      },
    ],
    relatedSlugs: [
      "wordpress-divi-5-development",
      "ecommerce-woocommerce-systems",
      "maintenance-hardening-support",
    ],
  },
  {
    id: "svc-10",
    index: "10",
    slug: "database-architecture-optimization",
    title: "Database Architecture & Backend Optimization",
    shortDescription:
      "Scalable PostgreSQL, MySQL, and Supabase database modeling, query indexing, caching layers, and high-concurrency tuning.",
    category: "Full-Stack & SaaS",
    iconType: "database-schema",
    accentColor: "#004275",
    heroTagline:
      "Engineering High-Throughput, Low-Latency Relational Data Architectures",
    valueProposition:
      "I design scalable relational database architectures, optimize sluggish queries, implement automated indexing strategies, and configure memory caching layers that transform bottlenecked databases into lightning-fast data backbones.",
    quickSpecs: {
      idealFor:
        "Growing applications experiencing slow queries, database CPU spikes, locking issues, or complex reporting bottlenecks.",
      coreStack:
        "PostgreSQL, MySQL, Supabase, Redis, Prisma, PgBouncer, EXPLAIN ANALYZE",
      deliveryApproach:
        "Normalized relational modeling, composite indexing, connection pooling, read replicas",
      keyFocus:
        "Sub-10ms query execution, zero deadlocks, ACID compliance, high concurrency throughput",
    },
    challenges: [
      {
        title: "Slow Database Queries & CPU Spikes",
        desc: "Unindexed sequential table scans causing database servers to hit 100% CPU usage as record counts grow.",
      },
      {
        title: "Deadlocks & Connection Pool Exhaustion",
        desc: "Concurrent transactions locking the same tables, throwing 500 error timeouts to active users.",
      },
      {
        title: "Denormalized, Inconsistent Schemas",
        desc: "Messy schemas without foreign key constraints, leading to orphaned rows, duplicate records, and data integrity corruption.",
      },
      {
        title: "Lack of Automated Backups & Disaster Recovery",
        desc: "No point-in-time recovery strategy in place if database records are accidentally corrupted or dropped.",
      },
    ],
    solutions: [
      {
        title: "Deep EXPLAIN ANALYZE Query Optimization",
        desc: "Profiling slow query execution plans, refactoring expensive joins, and deploying targeted B-Tree and GIN indexes.",
      },
      {
        title: "Connection Pooling with PgBouncer",
        desc: "Implementing transaction-level connection pooling allowing thousands of concurrent client requests on lean server hardware.",
      },
      {
        title: "Normalized Relational Schemas & Constraints",
        desc: "Refactoring database models to 3NF standards with strict foreign keys, cascading rules, and automated migration scripts.",
      },
      {
        title: "Multi-Tier Caching with Redis",
        desc: "Caching high-frequency read queries in memory with automated cache invalidation upon record mutations.",
      },
    ],
    deliverables: [
      {
        title: "Slow Query Audit & Execution Plan Profiling",
        desc: "Deep analysis identifying top resource-draining queries and exact indexing remediation recommendations.",
        iconName: "SearchCheck",
      },
      {
        title: "Optimized Indexing & Schema Refactor",
        desc: "Targeted deployment of single, composite, and partial indexes eliminating sequential table scans.",
        iconName: "Database",
      },
      {
        title: "Connection Pooling & Concurrency Tuning",
        desc: "PgBouncer or server connection pooling configuration preventing connection exhaustion under heavy load.",
        iconName: "Cpu",
      },
      {
        title: "Redis In-Memory Caching Architecture",
        desc: "Fast memory caching layer delivering repetitive queries in sub-5 milliseconds.",
        iconName: "Zap",
      },
      {
        title: "Automated Backup & Point-in-Time Recovery",
        desc: "Configured automated backup snapshots with disaster recovery failover procedures.",
        iconName: "HardDrive",
      },
      {
        title: "Comprehensive Schema Documentation",
        desc: "Entity-Relationship Diagrams (ERD) and technical specifications for developer onboarding.",
        iconName: "FileText",
      },
    ],
    stack: [
      {
        category: "Databases",
        tools: ["PostgreSQL 16", "MySQL 8.0", "Supabase", "SQLite (Embedded)"],
        note: "ACID-compliant relational engines supporting complex joins and JSONB indexing.",
      },
      {
        category: "Optimization & Pooling",
        tools: ["PgBouncer", "EXPLAIN ANALYZE", "Prisma ORM", "Redis"],
        note: "High-concurrency infrastructure decoupling connection scaling from server memory limits.",
      },
      {
        category: "Monitoring & Health",
        tools: ["pg_stat_statements", "Datadog / Prometheus", "CloudWatch"],
        note: "Continuous telemetry tracking query execution latency and index hit ratios.",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Performance Profiling & Bottleneck Discovery",
        desc: "Enabling query log monitors (pg_stat_statements) to identify top CPU-consuming database operations.",
      },
      {
        step: "02",
        title: "Schema Normalization & Index Design",
        desc: "Restructuring tables, verifying foreign keys, and crafting composite indexes to accelerate queries.",
      },
      {
        step: "03",
        title: "Connection Pooling & Cache Layer Setup",
        desc: "Deploying connection poolers and integrating Redis caching for repetitive read operations.",
      },
      {
        step: "04",
        title: "Benchmark Stress Testing",
        desc: "Simulating heavy concurrent user loads to verify that query execution times remain low under pressure.",
      },
      {
        step: "05",
        title: "Production Migration & Monitoring",
        desc: "Applying index migrations with zero downtime (CONCURRENTLY) and setting up automated health alerts.",
      },
    ],
    standards: {
      performance:
        "Index hit ratio above 99%, 95th percentile query execution under 20ms, and zero sequential scans on tables over 10k rows.",
      security:
        "Encrypted connections (SSL/TLS), strict database user least-privilege permissions, and encrypted backups at rest.",
      maintainability:
        "Versioned migrations using Prisma or Flyway ensuring every schema change is reproducible across dev, staging, and prod.",
    },
    faqs: [
      {
        question: "Can indexes be added without locking our live production database?",
        answer:
          "Yes. In PostgreSQL, we create indexes using the CONCURRENTLY directive, and in MySQL we use online DDL algorithms, ensuring your live application remains fully operational with zero downtime.",
      },
      {
        question: "How much faster will our application feel after database optimization?",
        answer:
          "Applications with unindexed queries typically experience dramatic improvements—frequently dropping API endpoint response times from 3–5 seconds down to under 50 milliseconds.",
      },
      {
        question: "Do you work with both PostgreSQL and MySQL / MariaDB?",
        answer:
          "Yes. We have deep expertise optimizing both PostgreSQL (including Supabase, Neon, AWS RDS) and MySQL/MariaDB environments.",
      },
      {
        question: "How do you prevent data loss during database refactoring?",
        answer:
          "We take full verified backup snapshots prior to any modification and execute schema changes in atomic transactions with automated rollback scripts.",
      },
    ],
    relatedSlugs: [
      "full-stack-web-applications",
      "custom-saas-solutions",
      "api-integration-ai-automation",
    ],
  },
  {
    id: "svc-11",
    index: "11",
    slug: "custom-admin-panels-portals",
    title: "Custom Admin Panels, Client Portals & Dashboards",
    shortDescription:
      "Secure operational back-offices, role-based client portals, analytics visualizers, and internal business tools.",
    category: "Full-Stack & SaaS",
    iconType: "admin-dashboard",
    accentColor: "#7E3BD0",
    heroTagline:
      "High-Efficiency Operational Back-Offices & Secure Client Portals",
    valueProposition:
      "I design and engineer tailor-made internal tools, role-based client portals, and executive analytics dashboards that replace messy spreadsheets with intuitive, real-time web operational command centers.",
    quickSpecs: {
      idealFor:
        "Agencies, service businesses, and operations teams needing custom client portals or internal back-offices.",
      coreStack:
        "React, Next.js, TypeScript, Tailwind CSS, Supabase / PostgreSQL, TanStack Table",
      deliveryApproach:
        "Role-based authentication, responsive tabular data controls, CSV/PDF export, real-time metrics",
      keyFocus:
        "Operational efficiency, intuitive daily workflows, strict role security, data visibility",
    },
    challenges: [
      {
        title: "Disorganized Spreadsheets & Data Silos",
        desc: "Teams wasting hours updating multiple spreadsheets that fall out of sync, risk accidental deletion, and lack access control.",
      },
      {
        title: "Unprofessional Client Communication Channels",
        desc: "Exchanging sensitive deliverables, invoices, or approvals over scattered email threads and WhatsApp chats.",
      },
      {
        title: "Lack of Real-Time Business Visibility",
        desc: "Executives unable to view daily sales, active project statuses, or team KPIs without compiling manual reports.",
      },
      {
        title: "Slow, Clunky Generic Admin Tools",
        desc: "Pre-built admin interfaces (like default phpMyAdmin or generic CMS grids) that are confusing and dangerous for non-technical staff.",
      },
    ],
    solutions: [
      {
        title: "Tailor-Made Operations Dashboards",
        desc: "Custom web panels designed specifically around your team's exact daily tasks, terminology, and approval flows.",
      },
      {
        title: "Secure Branded Client Portals",
        desc: "Password-protected client areas where customers view project status, download deliverables, and upload assets securely.",
      },
      {
        title: "High-Performance Data Tables & Filters",
        desc: "Powered by TanStack Table: instant search, multi-column sorting, facet filtering, pagination, and 1-click CSV/Excel export.",
      },
      {
        title: "Granular Role-Based Access Controls",
        desc: "Ensuring staff only see the exact tools they need, while sensitive financial and admin controls remain restricted.",
      },
    ],
    deliverables: [
      {
        title: "Custom Back-Office Admin Interface",
        desc: "Intuitive administrative dashboard with navigation, search, notifications, and responsive controls.",
        iconName: "LayoutDashboard",
      },
      {
        title: "Branded Client Self-Service Portal",
        desc: "Customer-facing area with project milestones, document repositories, and direct messaging channels.",
        iconName: "Users",
      },
      {
        title: "Advanced Data Table Engine",
        desc: "Fast, filterable data tables with column toggles, batch actions, and CSV/PDF export capabilities.",
        iconName: "Table",
      },
      {
        title: "Interactive KPI & Analytics Charts",
        desc: "Real-time visual graphs tracking revenue, task completion rates, customer activity, and operational velocity.",
        iconName: "BarChart2",
      },
      {
        title: "Granular Role & Permission Manager",
        desc: "User management panel allowing administrators to assign and revoke permissions instantly.",
        iconName: "Shield",
      },
      {
        title: "Audit Trail & Activity Logging",
        desc: "Automated logging system recording which team members created, modified, or deleted records.",
        iconName: "History",
      },
    ],
    stack: [
      {
        category: "Frontend UI & State",
        tools: ["React 19", "Next.js", "TypeScript", "Tailwind CSS", "TanStack Table / Query"],
        note: "Fast, keyboard-friendly user experience designed for heavy daily operational use.",
      },
      {
        category: "Backend & Database",
        tools: ["Node.js", "Supabase / PostgreSQL", "Prisma ORM"],
        note: "Enterprise relational database with real-time updates and strict Row-Level Security.",
      },
      {
        category: "Charts & Visuals",
        tools: ["Recharts", "Lucide React", "Date-fns"],
        note: "Lightweight, responsive charting library rendering smooth analytical trends.",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Workflow Analysis & Data Modeling",
        desc: "Mapping your team's operational steps, necessary data columns, permission tiers, and reporting needs.",
      },
      {
        step: "02",
        title: "UI Prototype & Layout Wireframing",
        desc: "Designing the administrative layout, responsive sidebar navigation, data table controls, and modal forms.",
      },
      {
        step: "03",
        title: "Table Engineering & API Integration",
        desc: "Developing fast search, multi-column sorting, batch operations, and real-time database connections.",
      },
      {
        step: "04",
        title: "Role Security & Audit Trail Wiring",
        desc: "Implementing authentication guards, role restrictions, and automated change-history audit trails.",
      },
      {
        step: "05",
        title: "Team Onboarding & Staging Handover",
        desc: "Testing with real team members, collecting workflow feedback, and deploying the live operational panel.",
      },
    ],
    standards: {
      performance:
        "Sub-100ms client search filtering across thousands of records, zero layout shifts, and fast modal response times.",
      security:
        "Session expiration policies, role validation on every server action, encrypted communication, and audit logging.",
      maintainability:
        "Clean component separation between table views, form modals, and API hooks with complete TypeScript typing.",
    },
    faqs: [
      {
        question: "Can our clients upload large files through the portal?",
        answer:
          "Yes. We integrate secure cloud storage (AWS S3, Supabase Storage) with presigned URLs, allowing clients to upload large documents and video assets directly to cloud buckets with zero server timeouts.",
      },
      {
        question: "Can we restrict different employees to different parts of the panel?",
        answer:
          "Absolutely. We configure granular Role-Based Access Control (e.g., Billing Admin, Project Manager, Support Agent, Viewer) so staff only view the tools relevant to their responsibilities.",
      },
      {
        question: "Can we export reports to Excel and CSV?",
        answer:
          "Yes. Every data table includes 1-click export options supporting filtered subsets of records or full database table dumps in CSV and Excel formats.",
      },
      {
        question: "Can the portal match our company's exact branding?",
        answer:
          "Every portal is bespoke. We style the interface with your brand colors, logo, typography, and custom domain (e.g., portal.yourcompany.com).",
      },
    ],
    relatedSlugs: [
      "full-stack-web-applications",
      "custom-saas-solutions",
      "database-architecture-optimization",
    ],
  },
  {
    id: "svc-12",
    index: "12",
    slug: "maintenance-hardening-support",
    title: "Ongoing Maintenance, Hardening & Priority Support",
    shortDescription:
      "Continuous vulnerability patching, uptime monitoring, automated off-site backups, and SLA-backed engineering support.",
    category: "SEO, Speed & Security",
    iconType: "shield-maintenance",
    accentColor: "#059669",
    heroTagline:
      "Proactive Engineering Maintenance, Security Hardening & Rapid Technical Support",
    valueProposition:
      "I protect your web investment with proactive technical maintenance, continuous security hardening, automated off-site cloud backups, and dedicated priority support—ensuring your mission-critical applications remain fast, secure, and always online.",
    quickSpecs: {
      idealFor:
        "Businesses, eCommerce brands, and agencies that cannot afford unexpected website downtime, malware, or broken updates.",
      coreStack:
        "Uptime Monitoring, Automated Cloud Backups, Security Audits, WP-CLI, Git CI/CD, Priority SLA",
      deliveryApproach:
        "Staging-tested updates, automated daily backups, 24/7 uptime monitoring, rapid incident response",
      keyFocus:
        "Zero downtime updates, immediate security vulnerability mitigation, proactive speed upkeep",
    },
    challenges: [
      {
        title: "Unexpected Crashes After Core / Plugin Updates",
        desc: "Updating plugins or dependencies on production without testing, resulting in broken layouts or 500 server errors.",
      },
      {
        title: "Malware Injections & Blacklist Penalties",
        desc: "Unpatched vulnerabilities allowing malicious scripts to infect files, causing Google to flag the domain as dangerous.",
      },
      {
        title: "Lack of Verified Restorable Backups",
        desc: "Assuming hosting backups are working, only to discover they are corrupted or incomplete when a disaster strikes.",
      },
      {
        title: "Slow Developer Response Times When Emergencies Occur",
        desc: "Waiting days for an agency or freelancer to respond when your checkout or contact forms are down.",
      },
    ],
    solutions: [
      {
        title: "Staging-First Safe Update Protocol",
        desc: "All CMS core, theme, and plugin updates are tested on an isolated staging clone before deploying to production.",
      },
      {
        title: "Proactive Security Scanning & Hardening",
        desc: "Continuous malware scanning, WAF firewall rules, disabled dangerous functions, and instant zero-day patch deployments.",
      },
      {
        title: "Automated Off-Site Daily Backups",
        desc: "Encrypted daily backups stored securely on external cloud storage (AWS S3) with monthly test-restore verifications.",
      },
      {
        title: "24/7 Uptime Monitoring & Rapid Incident Response",
        desc: "Real-time monitoring pinging your site every 60 seconds, alerting us immediately if downtime or SSL issues arise.",
      },
    ],
    deliverables: [
      {
        title: "Staging-Tested Core & Dependency Updates",
        desc: "Scheduled, conflict-free updates applied safely to keep your software modern and secure.",
        iconName: "RefreshCw",
      },
      {
        title: "Daily Automated Off-Site Backups",
        desc: "Full file and database snapshots stored on separate cloud infrastructure with rapid 1-click restore capability.",
        iconName: "HardDrive",
      },
      {
        title: "24/7 Uptime & SSL Monitoring",
        desc: "Automated monitors checking site availability, response times, and SSL certificate expiration every minute.",
        iconName: "Activity",
      },
      {
        title: "Continuous Security Auditing & Patching",
        desc: "Regular malware scans, brute-force monitoring, file change alerts, and firewall rule updates.",
        iconName: "ShieldAlert",
      },
      {
        title: "Monthly Technical Health & Performance Reports",
        desc: "Clear executive summary detailing updates applied, security scans, uptime percentage, and speed scores.",
        iconName: "FileCheck",
      },
      {
        title: "Priority Developer Support Allocation",
        desc: "Dedicated monthly development hours for content updates, new feature additions, and emergency fixes.",
        iconName: "Clock",
      },
    ],
    stack: [
      {
        category: "Monitoring & Alerting",
        tools: ["UptimeRobot / Better Uptime", "Sentry Error Tracking", "Cloudflare WAF"],
        note: "Instant SMS and Slack notifications triggered within 60 seconds of any anomaly.",
      },
      {
        category: "Backup & Infrastructure",
        tools: ["AWS S3 / Wasabi", "Duplicator Pro / UpdraftPlus", "WP-CLI / SSH"],
        note: "Redundant off-site cloud storage completely independent of your primary web host.",
      },
      {
        category: "Security Tools",
        tools: ["Wordfence / Sucuri", "Fail2ban", "SecurityHeaders.com"],
        note: "Multi-layered defense mitigating brute force, SQL injection, and unauthorized file edits.",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Initial Audit & Staging Setup",
        desc: "Auditing existing plugins, security vulnerabilities, creating an off-site baseline backup, and establishing staging.",
      },
      {
        step: "02",
        title: "Monitoring & Firewall Activation",
        desc: "Connecting 60-second uptime monitors, configuring Cloudflare WAF, and setting up automated incident alerts.",
      },
      {
        step: "03",
        title: "Scheduled Staging Updates & QA",
        desc: "Testing updates in the staging sandbox, verifying forms, checkouts, and visual elements before live release.",
      },
      {
        step: "04",
        title: "Proactive Security Scans & Backups",
        desc: "Executing daily off-site database and file snapshots with automated malware scanning.",
      },
      {
        step: "05",
        title: "Monthly Health Reporting & Consultation",
        desc: "Delivering monthly performance metrics, uptime audits, and strategic recommendations for upcoming features.",
      },
    ],
    standards: {
      performance:
        "99.9% guaranteed uptime tracking, sub-2-hour emergency response SLA, and continuous speed monitoring.",
      security:
        "Daily off-site cloud snapshots, zero unpatched known vulnerabilities, and strict firewall rate-limiting.",
      maintainability:
        "Transparent change logs recorded in Git, documented staging environments, and zero proprietary lock-in.",
    },
    faqs: [
      {
        question: "Why can't I just click 'Update' on plugins myself in WordPress?",
        answer:
          "Clicking 'Update' directly on a live site frequently triggers plugin conflicts, broken styles, or critical PHP fatal errors that take your site offline. We test every update on an isolated staging clone first to ensure complete safety before touching your live site.",
      },
      {
        question: "How fast do you respond if my website ever goes down?",
        answer:
          "Our automated monitors alert us within 60 seconds of any outage. Priority maintenance clients receive rapid emergency response times to restore service immediately.",
      },
      {
        question: "Are backups stored on the same server as my website?",
        answer:
          "No. Storing backups on the same server is dangerous—if the server crashes or gets compromised, the backups are lost too. We transfer encrypted backups directly to dedicated off-site cloud storage (AWS S3).",
      },
      {
        question: "Can I use my monthly support hours for adding new website features?",
        answer:
          "Yes. Unused monthly support hours can be applied toward content updates, landing page builds, speed enhancements, or custom development tasks.",
      },
    ],
    relatedSlugs: [
      "technical-seo-speed-security",
      "wordpress-divi-5-development",
      "website-migration-staging",
    ],
  },
];

// Helper to get top 8 services for homepage
export const coreServices = servicesData.slice(0, 8);

// Helper to get all categories
export const serviceCategories = [
  "All Services",
  "WordPress & eCommerce",
  "Full-Stack & SaaS",
  "AI & Automation",
  "SEO, Speed & Security",
] as const;

export type ServiceCategory = (typeof serviceCategories)[number];

// Helper to get service by slug
export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return servicesData.find((svc) => svc.slug === slug);
}
