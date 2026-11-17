# Md Juel Rahman — Personal Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-15.2-190C2B?style=for-the-badge&logo=next.js&logoColor=F6D1DD)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0-190C2B?style=for-the-badge&logo=react&logoColor=F6D1DD)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-190C2B?style=for-the-badge&logo=typescript&logoColor=F6D1DD)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-190C2B?style=for-the-badge&logo=tailwindcss&logoColor=F6D1DD)](https://tailwindcss.com/)
[![WCAG AAA](https://img.shields.io/badge/WCAG_2.1-AAA_Compliant-emerald-400?style=for-the-badge)](https://www.w3.org/WAI/WCAG21/quickref/)
[![Deployment](https://img.shields.io/badge/Hostinger-Auto_Deploy_Ready-F6D1DD?style=for-the-badge&logo=hostinger&logoColor=190C2B)](https://www.hostinger.com/)

Production-ready foundation and design system for **Md Juel Rahman** — AI-Focused Full-Stack Web Developer.

---

## 🎨 Visual Identity & Design System

- **Primary Background:** `#190C2B` (Deep Nocturnal Plum)
- **Secondary Background:** `#231136` (Elevated Plum)
- **Surface:** `#321B49` (Card Surface) & `#3F225C` (Elevated Surface)
- **Primary Accent:** `#F6D1DD` (Soft Rose Pink)
- **Secondary Accent:** `#E8AFC5` (Muted Rose)
- **Typography:** Plus Jakarta Sans (Variable Sans) + JetBrains Mono (Code/Metadata)
- **Specification:** Full design system tokens and component documentation available in [`docs/design-system.md`](docs/design-system.md).

---

## 🚀 Getting Started

### Prerequisites
- Node.js >= 18.18.0
- npm >= 9.0.0

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to view the design system specimen.

### Production Build
```bash
npm run build
npm run start
```

### Linting
```bash
npm run lint
```

---

## 📁 Project Architecture

```
├── docs/
│   └── design-system.md       # Comprehensive Design System Documentation
├── src/
│   ├── app/
│   │   ├── globals.css        # CSS variables, typography utilities, animations
│   │   ├── layout.tsx         # Root layout with Plus Jakarta Sans & viewport
│   │   └── page.tsx           # Design System & Foundation Interactive Specimen
│   ├── components/
│   │   └── ui/                # Atomic design system UI primitives
│   │       ├── Badge.tsx
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Container.tsx
│   │       ├── Divider.tsx
│   │       ├── FormField.tsx
│   │       ├── IconContainer.tsx
│   │       ├── Section.tsx
│   │       ├── TextLink.tsx
│   │       └── index.ts
│   └── lib/
│       └── utils.ts           # Utility helper (cn with clsx & tailwind-merge)
├── eslint.config.mjs          # Next.js 15 ESLint Flat Config
├── next.config.mjs            # Next.js production configuration
├── postcss.config.mjs         # PostCSS configuration
├── tailwind.config.ts         # Design tokens, color palette, responsive scale
└── tsconfig.json              # TypeScript strict configuration
```

---

## 🛡️ Quality Assurance & Accessibility

- **WCAG 2.1 AAA:** All text/background combinations meet or exceed 7:1 AAA contrast ratios.
- **Fluid Typography:** Scales responsively between mobile and desktop using `clamp()`.
- **Keyboard Navigation:** High-contrast focus indicators on all interactive elements.
- **Reduced Motion:** Automatic CSS motion reduction for users with accessibility preferences.
- **Strict TypeScript:** 100% type-checked with zero compilation warnings.

---

## 🚢 Deployment

Connected to **Hostinger Automatic Deployment** via GitHub `main` branch.
Pushes to `main` trigger automatic deployment on Hostinger's hosting environment.
