# Md. Juel Rahman — Personal Portfolio Website

[![Next.js](https://img.shields.io/badge/Next.js-15.5-6847E8?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0-6847E8?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-6847E8?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-6847E8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Deployment](https://img.shields.io/badge/Hostinger-Live-28B77A?style=for-the-badge&logo=hostinger&logoColor=white)](https://juelrahman.me)

Modern, premium-standard personal portfolio website for **Md. Juel Rahman** — AI Engineer | Full-Stack Developer.

Live Domain: [https://juelrahman.me](https://juelrahman.me)  
Repository: [https://github.com/juelrahmanbd/juelrahman-personal-portfolio](https://github.com/juelrahmanbd/juelrahman-personal-portfolio)

---

## 🎨 Visual Identity & Color System

- **Primary Purple:** `#6847E8` (Brand Accent & Key CTAs)
- **Deep Purple:** `#5234CC` (Gradient Endpoint & Hover Depth)
- **Soft Lavender:** `#F1EDFF` (Pill Backgrounds & Ambient Accents)
- **Light Background:** `#FAFAFF` (Canvas Root)
- **White:** `#FFFFFF` (Card Surfaces & Glass Containers)
- **Dark Navy:** `#11152F` (Primary Typography & Footer)
- **Secondary Text:** `#626780` (Body Copy & Descriptions)
- **Border:** `#E9E7F5` (Subtle Card & Divider Borders)
- **Success Green:** `#28B77A` (Status Indicators & Checkmarks)

---

## 📁 Architecture & File Structure

```
├── src/
│   ├── app/
│   │   ├── globals.css            # Custom CSS variables, typography utilities
│   │   ├── layout.tsx             # Root Layout with Plus Jakarta Sans & SEO metadata
│   │   ├── page.tsx               # Complete single-page portfolio layout
│   │   ├── robots.ts              # SEO Robots configuration
│   │   └── sitemap.ts             # Dynamic XML sitemap
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx         # Sticky navigation, pill menu & mobile drawer
│   │   │   └── Footer.tsx         # Dark navy footer, columns, and social links
│   │   └── sections/
│   │       ├── Hero.tsx           # Typography hero, floating UI elements & trust cards
│   │       ├── About.tsx          # Biography & Development Approach card
│   │       ├── Services.tsx       # 11 Digital service cards with custom icons
│   │       ├── Skills.tsx         # 7 Categorized skill groups with tech pills
│   │       ├── WhyChooseMe.tsx    # 8 "What You Can Expect" value cards
│   │       ├── Portfolio.tsx      # 4 Showcase project cards with laptop mockups
│   │       ├── Process.tsx        # 4-Step horizontal/vertical development process
│   │       ├── Testimonials.tsx   # Client feedback sample review cards
│   │       ├── CtaBanner.tsx      # Purple gradient call-to-action banner
│   │       └── Contact.tsx        # 3 Contact cards & validated inquiry form
│   ├── data/
│   │   └── portfolioData.ts       # Centralized, strongly-typed portfolio content
│   └── lib/
│       └── utils.ts               # Utility helpers (cn with clsx & tailwind-merge)
├── eslint.config.mjs              # ESLint 9 Flat Config
├── next.config.mjs                # Next.js production configuration
├── postcss.config.mjs             # PostCSS configuration
├── tailwind.config.ts             # Tailwind design tokens & typography scale
└── tsconfig.json                  # TypeScript strict configuration
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js >= 18.18.0
- npm >= 9.0.0

### Run Locally
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build for Production
```bash
npm run build
npm run start
```

---

## ⚙️ Configuration & Customization

All website content, services, skills, and contact info are centrally managed in:
[`src/data/portfolioData.ts`](src/data/portfolioData.ts)

To configure your verified contact information:
- Update `siteConfig.contact.email`
- Update `siteConfig.contact.whatsapp`
- Update social links (`github`, `linkedin`, `youtube`)
