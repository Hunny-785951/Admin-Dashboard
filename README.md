<div align="center">
  <img src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/layout-dashboard.svg" alt="Admin Dashboard Logo" width="100" height="100" />
  
  # Admin Dashboard Template
  
  <p><strong>A Modern, High-Performance, and Production-Ready React Admin Dashboard</strong></p>

  <p>
    <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React 19" />
    <img src="https://img.shields.io/badge/Vite-5.0+-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/TailwindCSS-3.4+-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Framer%20Motion-12+-0055FF?style=flat-square&logo=framer&logoColor=white" alt="Framer Motion" />
    <img src="https://img.shields.io/badge/Zustand-5.0+-FF4154?style=flat-square" alt="Zustand" />
  </p>

  <p>
    <a href="#-overview">Overview</a> •
    <a href="#-key-features">Key Features</a> •
    <a href="#-tech-stack">Tech Stack</a> •
    <a href="#-getting-started">Getting Started</a> •
    <a href="#-project-structure">Project Structure</a>
  </p>
</div>

---

## 📖 Overview

**Admin Dashboard Template** is a meticulously crafted, highly-optimized React application designed to serve as the foundation for your next web application backend or management system. 

Built with modern development patterns in mind, this template achieves a perfect balance between breathtaking aesthetics—featuring glassmorphism, fluid micro-animations, and sophisticated color palettes—and extreme performance. Whether you're managing complex user data, tracking analytics, or configuring deep system settings, this dashboard provides a flawless, accessible, and lightning-fast user interface.

---

## ✨ Key Features

### 🎨 Premium Aesthetics & UI/UX
- **Responsive Design**: Flawless layout adaptation across desktop, tablet, and mobile devices.
- **Glassmorphism UI**: Beautiful frosted-glass overlays and backdrop filters for a premium feel.
- **Dark/Light Mode**: Seamless toggling between a warm light theme (designed to reduce eye strain) and a sleek dark theme (optimized for low-light environments).
- **Micro-Animations**: Smooth, 60fps transitions and interactive feedback powered by Framer Motion.

### ⚡ Extreme Performance
- **React 19 & Vite**: Built on the latest React core and Vite for ultra-fast Hot Module Replacement (HMR) and optimized production builds.
- **Intelligent Code Splitting**: Heavy components like data charts are lazy-loaded to keep the initial bundle size small and load times instantaneous.

### 🛠 Powerful Data Management
- **Zustand State**: Lightweight, boilerplate-free state management with persistent local storage capabilities.
- **Recharts Integration**: Beautiful, interactive, and responsive data visualizations ready out of the box.

---

## 💻 Tech Stack

| Category | Technology |
| :--- | :--- |
| **Core Framework** | React (v19) |
| **Build Tool** | Vite |
| **Routing** | React Router DOM (v7) |
| **Styling Engine** | Tailwind CSS v3.4+, `tailwindcss-animated` |
| **Animation** | Framer Motion |
| **State Management** | Zustand |
| **Data Visualization** | Recharts |
| **Icons** | Lucide React |

---

## 🚀 Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/en/) (v18.0.0 or higher recommended)
- npm (comes with Node.js) or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/admin-dashboard.git
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
   > The application will be running at `http://localhost:5173` by default. Open this URL in your browser to view the dashboard.

4. **Build for Production**
   ```bash
   npm run build
   ```
   > This command optimizes the application for best performance and outputs the files to the `dist/` directory.

---

## 📁 Project Structure

The codebase follows a modular, feature-based architecture to ensure scalability:

```text
src/
├── components/           # Reusable UI components (Buttons, Cards, Modals)
│   ├── common/           # Generic atomic components
│   └── navigation/       # Navbar, Sidebar, and menus
├── layouts/              # Structural wrappers (e.g., Admin Layout)
├── lib/                  # Utilities and helpers (e.g., class merging)
├── pages/                # Route-level views (Dashboard, Settings, Users, etc.)
├── store/                # Zustand global state management
├── App.jsx               # Application router setup
├── index.css             # Global CSS variables and Tailwind directives
└── main.jsx              # React DOM mounting point
```

---

## 🩺 Performance & Quality Control

This project adheres to rigorous quality standards and is continually audited.

- **Static Analysis (Linting)**: Ensure code quality by running ESLint.
  ```bash
  npm run lint
  ```
- **React Doctor**: Run comprehensive diagnostics for performance and bottlenecks.
  ```bash
  npm run doctor
  ```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! 
If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

---

<div align="center">
  <p>Built with 🤍 for next-generation web applications.</p>
</div>

<br />

<div align="right">
  <i><strong>Built by:</strong> Himesh M. Solanki </i> <br />
  <i><strong>InternID:</strong> CITS3961</i>
</div>