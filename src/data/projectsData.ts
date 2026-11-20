export interface DeliverableItem {
  title: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  client: string;
  category: "WordPress & Divi 5" | "Business & Agency" | "Booking, eCommerce & Healthcare";
  liveUrl: string;
  displayUrl: string;
  previewImage: string;
  summary: string;
  description: string;
  highlights: string[];
  techStack: string[];
  scopeAndArchitecture: string[];
  keyFlows: string[];
  deliverables: DeliverableItem[];
  accentColor: string;
}

export const portfolioProjects: ProjectItem[] = [
  {
    id: "nebulix-staging",
    previewImage: "/projects/nebulix-staging.webp",
    slug: "nebulix-staging",
    title: "Nebulix — Professional Misting Systems (Staging)",
    shortTitle: "Nebulix Misting",
    client: "Nebulix Italia",
    category: "WordPress & Divi 5",
    liveUrl: "https://staging.nebulix.it/",
    displayUrl: "staging.nebulix.it",
    summary:
      "Staging build for Italian misting systems covering outdoor cooling (raffrescamento), mosquito control, odor suppression, humidity, livestock comfort, and dust control.",
    description:
      "A comprehensive staging and multi-application platform engineered for an Italian misting systems manufacturer. Built to structure complex industrial and residential cooling solutions into clear, accessible product applications and automated lead capture funnels.",
    highlights: [
      "Staging & Migration Workflow",
      "Multi-Application Service Structure",
      "Consultation & Lead Flow",
    ],
    techStack: [
      "WordPress",
      "Divi 5",
      "Custom CSS",
      "PHP",
      "Staging Subdomain Architecture",
      "Responsive Layout",
    ],
    scopeAndArchitecture: [
      "Engineered an isolated staging environment on a dedicated subdomain with safe migration pipelines to production.",
      "Architected custom Divi 5 layout templates for 6 application verticals (raffrescamento, zanzare, odori, umidità, zootecnia, polveri).",
      "Implemented high-performance asset optimization with responsive image delivery and minimal layout shift.",
      "Established multilingual and regional localization foundations tailored for European market compliance.",
    ],
    keyFlows: [
      "Application Discovery Flow: Prospective customers quickly identify their required misting solution by commercial or domestic use case.",
      "Technical Specification Intake: Structured quote forms capturing operating environment dimensions, water source, and cooling objectives.",
      "Admin Authoring Workflow: Modular Divi 5 sections allowing client teams to author new technical case studies without layout regression.",
    ],
    deliverables: [
      {
        title: "Divi 5 Custom Template Architecture",
        description:
          "Modular section layouts engineered for rapid page authoring and strict design consistency.",
      },
      {
        title: "Application Landing Pages",
        description:
          "6 dedicated industry solution pages optimized for search visibility and technical clarity.",
      },
      {
        title: "Lead Intake & Inquiry Forms",
        description:
          "Conversion-focused consultation forms routed to client sales teams with automated email notifications.",
      },
      {
        title: "Staging to Production Protocol",
        description:
          "Safe deployment pipeline preventing downtime or data loss during system updates.",
      },
    ],
    accentColor: "#004275",
  },
  {
    id: "simgolf-scandinavia",
    previewImage: "/projects/simgolf-scandinavia.webp",
    slug: "simgolf-scandinavia",
    title: "SimGolf Scandinavia — Golf Simulator Systems & Shop",
    shortTitle: "SimGolf Scandinavia",
    client: "SimGolf Scandinavia",
    category: "Booking, eCommerce & Healthcare",
    liveUrl: "https://simgolfscandinavia.com/",
    displayUrl: "simgolfscandinavia.com",
    summary:
      "Nordic golf simulator platform presenting SimBooth enclosures, launch monitors, software options, room size guides, club/private inquiries, and webshop flows.",
    description:
      "An end-to-end commercial and private golf simulator platform serving the Nordic market. Combines customized hardware configurators, enclosure dimension guides, software selection, and a streamlined webshop architecture.",
    highlights: [
      "Simulator Enclosure Configurator",
      "Product & Software Catalog",
      "Consultation & Shop UI",
    ],
    techStack: [
      "WordPress",
      "WooCommerce",
      "Custom Frontend",
      "Launch Monitor Integrations",
      "Dynamic Sizing Guides",
      "eCommerce Checkout",
    ],
    scopeAndArchitecture: [
      "Interactive SimBooth sizing and configuration guides for commercial clubs and private home installations.",
      "Curated catalog for high-precision launch monitors, projector enclosures, impact screens, and simulator turf options.",
      "Integrated WooCommerce shop architecture with multi-currency Nordic transaction readiness.",
      "High-speed product page layouts featuring high-res hardware specs, clearance requirements, and bundle options.",
    ],
    keyFlows: [
      "Room Dimension Assessment: Interactive sizing checklist guiding customers to the right booth enclosure based on ceiling height and width.",
      "Commercial Consultation Funnel: Direct quote intake for indoor golf facilities, hotels, and clubhouses requiring multi-bay installations.",
      "Seamless Cart & Checkout: Frictionless hardware & accessory purchase flow with transparent shipping details.",
    ],
    deliverables: [
      {
        title: "Hardware Configurator Architecture",
        description:
          "Structured product specification layouts for launch monitors, screens, and enclosures.",
      },
      {
        title: "Commercial Lead Pipeline",
        description:
          "Custom quote inquiry funnel for clubs and businesses requiring multi-bay installations.",
      },
      {
        title: "WooCommerce Storefront",
        description:
          "Fast, mobile-friendly shop with category filters, detailed specs, and secure checkout.",
      },
      {
        title: "Technical Room Guide",
        description:
          "Clear ceiling height, width, and depth calculation guides that eliminate purchasing friction.",
      },
    ],
    accentColor: "#0284C7",
  },
  {
    id: "meet-prosperity",
    previewImage: "/projects/meet-prosperity.webp",
    slug: "meet-prosperity",
    title: "Prosperity — Bookkeeping, Tax & Fractional CFO",
    shortTitle: "Prosperity Accounting",
    client: "Prosperity Accounting",
    category: "Business & Agency",
    liveUrl: "https://meetprosperity.com/",
    displayUrl: "meetprosperity.com",
    summary:
      "Service platform for Enrolled Agent tax preparation, monthly bookkeeping, controller support, and restaurant/hospitality CFO guidance across Nevada and California.",
    description:
      "A high-trust executive financial platform for businesses across Nevada and California. Engineered to showcase specialized bookkeeping, fractional CFO consulting, and Enrolled Agent tax services with high conversion authority.",
    highlights: [
      "Service & Industry Architecture",
      "Consultation Lead Capture",
      "Editorial Trust Layout",
    ],
    techStack: [
      "Modern Web Architecture",
      "Custom CSS",
      "Calendly / CRM Integration",
      "Tax Intake Workflows",
      "Mobile-Optimized UI",
    ],
    scopeAndArchitecture: [
      "Deep industry segmentation (Hospitality, Restaurants, Retail, Professional Services, High Net Worth).",
      "Direct consultation scheduler and discovery questionnaire integration.",
      "High-contrast editorial typography establishing institutional trust and regulatory compliance.",
      "Security-hardened contact and document intake pathways.",
    ],
    keyFlows: [
      "Industry-Specific Exploration: Prospective clients review tailored bookkeeping and CFO service packages.",
      "Discovery Call Scheduling: Direct calendar booking synced to executive consulting availability.",
      "Tax Season Prep Funnel: Step-by-step guidance on bookkeeping catch-up and tax filing requirements.",
    ],
    deliverables: [
      {
        title: "Authority Service Architecture",
        description:
          "Comprehensive breakdown of Bookkeeping, Fractional CFO, and Tax Services.",
      },
      {
        title: "Hospitality & Restaurant Landing Hub",
        description:
          "Specialized financial management solutions for food & beverage operators.",
      },
      {
        title: "Consultation Booking Flow",
        description:
          "Frictionless calendar scheduling embedded with automated client intake.",
      },
      {
        title: "Performance & Security Hardening",
        description:
          "Sub-second load speeds and strict SSL/privacy protections for financial clients.",
      },
    ],
    accentColor: "#0D9488",
  },
  {
    id: "tite-home",
    previewImage: "/projects/tite-home.webp",
    slug: "tite-home",
    title: "Tite Home — Solar, Airflow & Home Energy Efficiency",
    shortTitle: "Tite Home Energy",
    client: "Tite Home Energy",
    category: "Business & Agency",
    liveUrl: "https://titehome.com/",
    displayUrl: "titehome.com",
    summary:
      "Home energy efficiency and solar platform structured around airflow optimization, insulation/air sealing, solar & battery systems, and free home assessments.",
    description:
      "A modern residential energy efficiency platform built to educate homeowners on air tightness, insulation, and solar power. Features an intuitive 3-step energy approach and a high-converting home energy assessment intake.",
    highlights: [
      "3-Step Energy Approach",
      "Assessment & Qualification Flow",
      "Educational Resource Hub",
    ],
    techStack: [
      "Modern Web Framework",
      "Custom UI Components",
      "Assessment Intake Logic",
      "Interactive Energy Visuals",
      "Responsive Layout",
    ],
    scopeAndArchitecture: [
      "Clear narrative structure: Stop Air Leaks -> Optimize Insulation -> Power with Solar & Batteries.",
      "Interactive home assessment qualification form with address, home age, and energy bill inputs.",
      "Clear visual explainers illustrating HVAC efficiency, thermal boundaries, and utility rebates.",
      "Optimized mobile performance for localized homeowner ad campaigns.",
    ],
    keyFlows: [
      "Energy Savings Journey: Visual walkthrough explaining how air sealing precedes solar installation.",
      "Free Home Assessment Request: Multi-field qualification funnel capturing home square footage and heating type.",
      "Rebate & Incentive Exploration: Clear breakdown of federal and state energy tax credits.",
    ],
    deliverables: [
      {
        title: "3-Step Approach Architecture",
        description:
          "Structured visual roadmap demonstrating whole-home energy optimization.",
      },
      {
        title: "Home Assessment Funnel",
        description:
          "Custom qualification intake capturing key home specs and booking audit dates.",
      },
      {
        title: "Solar & Battery Solution Hub",
        description:
          "Educational pages detailing energy storage, net metering, and backup power.",
      },
      {
        title: "Local SEO & Speed Optimization",
        description:
          "Engineered for 95+ mobile performance and regional search dominance.",
      },
    ],
    accentColor: "#059669",
  },
  {
    id: "web-design-melbourne",
    previewImage: "/projects/web-design-melbourne.webp",
    slug: "web-design-melbourne",
    title: "Web Design Melbourne — Agency & Lead Generation Site",
    shortTitle: "Web Design Melbourne",
    client: "Web Designer Melbourne",
    category: "Business & Agency",
    liveUrl: "https://webdesignermelbourne.au/",
    displayUrl: "webdesignermelbourne.au",
    summary:
      "Agency website showcasing custom web design, WordPress/Shopify solutions, process steps, featured builds, and project inquiry intake for Melbourne businesses.",
    description:
      "A high-converting agency portfolio and client acquisition platform engineered for the Melbourne business ecosystem. Focuses on custom development, WordPress/Shopify implementations, and rapid project quote turnaround.",
    highlights: [
      "Service & Process Showcase",
      "Featured Work Grid",
      "Project Quote Form",
    ],
    techStack: [
      "WordPress / Custom Stacks",
      "Tailwind CSS",
      "Interactive Work Grid",
      "Lead Generation Forms",
      "SEO Architecture",
    ],
    scopeAndArchitecture: [
      "Showcase of responsive web design, eCommerce builds, speed optimization, and ongoing maintenance.",
      "Interactive portfolio showcase displaying responsive desktop and mobile viewports.",
      "Multi-tier project quote intake allowing clients to specify budget, timeline, and platform.",
      "Australian commercial SEO structuring targeting high-intent Melbourne commercial searches.",
    ],
    keyFlows: [
      "Case Study Exploration: Prospective clients review live website metrics, tech stacks, and results.",
      "Interactive Quote Intake: Direct step-by-step project inquiry form with budget and deadline pickers.",
      "Development Methodology Walkthrough: Clear 4-stage process establishing trust before discovery calls.",
    ],
    deliverables: [
      {
        title: "Agency Portfolio Showcase",
        description:
          "Filterable work grid presenting live client builds with interactive previews.",
      },
      {
        title: "Project Quote Calculator/Form",
        description:
          "High-converting lead intake capturing project goals, platforms, and target launch dates.",
      },
      {
        title: "WordPress & Shopify Service Hubs",
        description:
          "In-depth landing pages detailing CMS customization and eCommerce architecture.",
      },
      {
        title: "Local Australian SEO Architecture",
        description:
          "Structured schema markup and optimized localized page hierarchies.",
      },
    ],
    accentColor: "#2563EB",
  },
  {
    id: "hampton-homes-melbourne",
    previewImage: "/projects/hampton-homes-melbourne.webp",
    slug: "hampton-homes-melbourne",
    title: "Hampton Homes Melbourne — Custom Home Builders",
    shortTitle: "Hampton Homes",
    client: "Hampton Homes Australia",
    category: "WordPress & Divi 5",
    liveUrl: "https://www.hamptonhomesmelbourne.com.au/",
    displayUrl: "hamptonhomesmelbourne.com.au",
    summary:
      "Custom home builder website highlighting bespoke luxury homes, knock-down rebuilds, acreage builds, multi-stage construction journey, and project galleries.",
    description:
      "A luxury residential construction platform showcasing bespoke architectural homes across Melbourne. Built to convey craftsmanship, transparent 5-stage building journeys, knock-down rebuild expertise, and expansive photo galleries.",
    highlights: [
      "Custom Build Services",
      "5-Stage Construction Process",
      "Project Showcase & Stories",
    ],
    techStack: [
      "WordPress",
      "Divi 5 Architecture",
      "Custom Post Types",
      "High-Res Image Galleries",
      "Consultation Intake",
    ],
    scopeAndArchitecture: [
      "Bespoke luxury aesthetics with expansive photography layouts and subtle architectural accents.",
      "Structured 5-stage construction process walkthrough (Consult -> Design -> Permit -> Build -> Handover).",
      "Categorized project gallery covering Knock-Down Rebuilds, Hamptons Style, Acreage, and French Provincial.",
      "Client story and testimonial framework with suburb-specific case studies.",
    ],
    keyFlows: [
      "Portfolio Gallery Browsing: High-resolution architectural photography with floorplan and facade previews.",
      "Site Inspection & Consultation Booking: Tailored form capturing block dimensions, suburb, and budget.",
      "Knock-Down Rebuild Assessment: Specialized intake guiding homeowners looking to rebuild on their land.",
    ],
    deliverables: [
      {
        title: "Custom Divi 5 Architecture",
        description:
          "Bespoke builder theme templates with lightweight code and smooth typography.",
      },
      {
        title: "Architectural Gallery Engine",
        description:
          "Fast-loading project showcase with categorization by home style and suburb.",
      },
      {
        title: "5-Stage Journey Guide",
        description:
          "Transparent construction timeline reassuring prospective custom home buyers.",
      },
      {
        title: "Builder Consultation Intake",
        description:
          "Qualified lead generation form capturing land readiness and architectural preferences.",
      },
    ],
    accentColor: "#7E3BD0",
  },
  {
    id: "hypermed-wellness",
    previewImage: "/projects/hypermed-wellness.webp",
    slug: "hypermed-wellness",
    title: "HyperMed Wellness — Physician-Guided Recovery Care",
    shortTitle: "HyperMed Wellness",
    client: "HyperMed Clinical Wellness",
    category: "Booking, eCommerce & Healthcare",
    liveUrl: "https://www.hypermedwellness.com/",
    displayUrl: "hypermedwellness.com",
    summary:
      "Clinical wellness and recovery platform covering hyperbaric oxygen, red light bed, IV infusion, lymphatic care, PEMF, compression therapy, and consultation booking.",
    description:
      "An integrated clinical wellness and physician-guided recovery platform. Organizes 6 distinct therapeutic modalities into clean patient pathways, clinical evidence summaries, and direct consultation booking.",
    highlights: [
      "6 Therapy Modalities",
      "Guided Care Pathway",
      "Consultation Booking Flow",
    ],
    techStack: [
      "Modern Healthcare Web Platform",
      "Booking Engine Integration",
      "HIPAA/Privacy Ready",
      "Modality Architecture",
      "Mobile UX",
    ],
    scopeAndArchitecture: [
      "Dedicated modality hubs: Hyperbaric Oxygen Therapy (HBOT), Red Light Bed, IV Therapy, Lymphatic Drainage, PEMF, Compression.",
      "Physician-guided medical intake and appointment scheduling integration.",
      "High-trust clinical aesthetic adhering to medical clarity and patient reassurance.",
      "Membership & treatment package presentation with transparent protocols.",
    ],
    keyFlows: [
      "Condition & Goal Matching: Patients explore therapies based on recovery, longevity, athletic performance, or fatigue.",
      "Therapy Booking: Direct session scheduling with physician intake form pre-screening.",
      "Membership & Package Selection: Clear multi-session package comparison with straightforward onboarding.",
    ],
    deliverables: [
      {
        title: "6 Clinical Modality Landing Pages",
        description:
          "Detailed clinical overviews, benefits, session lengths, and scientific explanations.",
      },
      {
        title: "Patient Pathway Architecture",
        description:
          "Step-by-step onboarding guide from physician consultation to treatment plan.",
      },
      {
        title: "Appointment Scheduling Integration",
        description:
          "Seamless booking system capturing patient contact and health objectives.",
      },
      {
        title: "Speed & Mobile Clinical UX",
        description:
          "Instant mobile loading designed for patient accessibility and high conversion.",
      },
    ],
    accentColor: "#0284C7",
  },
];

export const portfolioCategories = [
  "All",
  "WordPress & Divi 5",
  "Business & Agency",
  "Booking, eCommerce & Healthcare",
] as const;

export type PortfolioCategory = (typeof portfolioCategories)[number];
