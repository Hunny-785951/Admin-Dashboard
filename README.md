<div align="center">
  <img src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/layout-dashboard.svg" alt="Admin Dashboard Logo" width="120" height="120" />
  
  # Admin Dashboard PRO MAX

  <p><strong>A Next-Generation, Enterprise-Ready React Admin Dashboard</strong></p>

  <p>
    <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React 19" />
    <img src="https://img.shields.io/badge/Vite-5.0+-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/TailwindCSS-3.4+-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Framer%20Motion-12+-0055FF?style=flat-square&logo=framer&logoColor=white" alt="Framer Motion" />
    <img src="https://img.shields.io/badge/Zustand-5.0+-FF4154?style=flat-square" alt="Zustand" />
    <img src="https://img.shields.io/badge/Accessibility-WCAG%202.3-4CAF50?style=flat-square" alt="Accessibility WCAG 2.3" />
  </p>

  <p>
    <a href="#-features">Features</a> •
    <a href="#-tech-stack">Tech Stack</a> •
    <a href="#-installation">Installation</a> •
    <a href="#-architecture">Architecture</a> •
    <a href="#-performance--accessibility">Performance</a>
  </p>
</div>

---

## 📖 Overview

**Admin Dashboard PRO MAX** is a meticulously crafted, highly-optimized React application designed to deliver an unparalleled user experience. Built with a focus on modern development patterns, it achieves a "zero-compromise" balance between breathtaking aesthetics (glassmorphism, micro-animations, bespoke color palettes) and extreme performance metrics.

Whether you're managing complex eCommerce inventory, analyzing live data streams, or configuring deep system settings, this dashboard provides a flawless, accessible, and lightning-fast interface.

---

## ✨ Key Features

### 🎨 Premium Aesthetic Design
- **Warm Light Mode**: A bespoke, sophisticated neutral palette featuring Alabaster, Stone, and Taupe. Designed specifically to reduce eye strain and elevate the interface beyond generic, sterile defaults.
- **Deep Dark Mode**: A sleek slate and vibrant blue aesthetic optimized for low-light environments with precise contrast ratios.
- **Dynamic Glassmorphism**: Stunning, subtle frosted-glass overlays and backdrop filters.

### ⚡ Extreme Performance Optimization
- **React 19 Ready**: Fully refactored to utilize the latest native React APIs (e.g., native `ref` passing, zero legacy `forwardRef` bloat).
- **Intelligent Code Splitting**: 
  - Uses Framer Motion's `LazyMotion` combined with `domAnimation` to strip heavy animation libraries from the initial load bundle.
  - Employs dynamic `React.lazy()` imports and `<Suspense>` boundaries for heavy data visualization libraries (Recharts).

### ♿ Enterprise-Grade Accessibility (a11y)
- **WCAG 2.3.3 Compliant**: Fully supports OS-level `prefers-reduced-motion` to automatically disable animations for users with vestibular sensitivities.
- **Semantic Structure**: Meaningful HTML5 semantics, robust ARIA labeling, and complete keyboard navigability (focus states, tab indexes, and `onKeyDown` handlers).

---

## 🛠 Tech Stack

| Category | Technology |
| :--- | :--- |
| **Core Framework** | React (v19), Vite |
| **Routing** | React Router DOM (v7) |
| **Styling Engine** | Tailwind CSS, `tailwindcss-animated` |
| **Animation** | Framer Motion (Lazy Loaded) |
| **State Management** | Zustand (with persistent local storage) |
| **Data Visualization** | Recharts |
| **Iconography** | Lucide React |

---

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v20.0.0 or higher recommended)
- npm or yarn

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-org/admin-dashboard.git
   cd admin-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   > The application will be running at `http://localhost:5173` by default.

4. **Build for Production**
   ```bash
   npm run build
   ```

---

## 📁 Project Architecture

The codebase enforces a highly modular, scalable feature-based structure:

```text
src/
├── components/           # Reusable, atomic UI components
│   ├── common/           # Buttons, Badges, Cards
│   └── navigation/       # Sidebar, Top Navbar
├── layouts/              # Structural wrappers (Admin, Auth)
├── lib/                  # Utilities (e.g., Tailwind class merging via clsx)
├── motion/               # Centralized Framer Motion variants
├── pages/                # Route-level views
│   ├── Dashboard/        # Analytics, Charts, Overview
│   ├── eCommerce/        # Inventory Management
│   ├── Settings/         # User Preferences, Theme Toggles
│   └── Users/            # User Lists and Data Tables
├── store/                # Zustand state slices (uiStore)
├── App.jsx               # Application router and global Motion config
└── index.css             # Global CSS variables and Tailwind directives
```

---

## 🩺 Performance & Quality Control

This project adheres to rigorous quality standards and is continually audited using ESLint and **React Doctor**.

To run a static analysis check:
```bash
npm run lint
```

To run a comprehensive diagnostic for performance and accessibility bottlenecks:
```bash
npm run doctor
```

---

## 🤝 Contributing

We welcome contributions to make this dashboard even better!
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

<div align="center">
  <p>Built with 🤍 for next-generation web applications.</p>
</div>

<div align="right">
<i> Built by : Himesh M. Solanki </i>
</div>

<div align="right">
<i> InternID : CITS3961 </i>
</div>