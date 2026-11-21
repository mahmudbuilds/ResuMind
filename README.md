# 📄 ResuMind — Client-Side ATS Resume Parser & Keyword Matcher

<div align="center">

[![Live Demo](https://img.shields.io/badge/Demo-resumind--khaki.vercel.app-4F46E5?style=for-the-badge&logo=vercel&logoColor=white)](https://resumind-khaki.vercel.app/)
[![React Router](https://img.shields.io/badge/React_Router-7.10.1-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-4.1.13-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

**100% client-side ATS resume parser and job-description keyword matcher with coordinate-aware multi-column PDF extraction and zero server PII storage.**

[🚀 Live Demo](https://resumind-khaki.vercel.app/) · [Report Bug](https://github.com/mahmudbuilds/ResuMind/issues) · [Request Feature](https://github.com/mahmudbuilds/ResuMind/issues)

</div>

---

## 📖 Overview

**ResuMind** is a privacy-first, client-side resume analysis tool built with **React Router 7** and **TypeScript**. Instead of uploading sensitive personal resumes to a custom backend database, ResuMind processes PDF documents directly in the browser using `pdfjs-dist` with a local Web Worker (`/pdf.worker.min.mjs`) and matches resume content against target job descriptions with **zero server-side PII storage**.

---

## 🚀 Key Features

### 1. 100% Client-Side PDF Parsing & Extraction
- **Browser-Native PDF Processing:** Uses `pdfjs-dist` and a local Web Worker to parse and render complex multi-column PDF layouts directly in the browser.
- **ATS Compatibility Scoring:** Evaluates document structure, formatting hygiene, and section completeness into an interactive 0–100 ATS score.
- **Job-Description Keyword Matching:** Compares resume content against a target role's job description to surface keyword gaps and actionable bullet-point improvements.

### 2. Zero Server PII Storage
- **No Custom Backend Database:** ResuMind never persists personal resumes or PII on an application server.
- **Client-Owned Session State:** Uses React Router 7 + Zustand for local state management, with optional browser-side storage via Puter.js user-scoped containers.

### 3. Interactive Visual Reporting
- **Animated Score Gauges:** Visualizes overall compatibility and per-section breakdowns (`ScoreGauge`, `ScoreCircle`, `ATS`, `Details`).
- **Actionable Section Breakdown:** Granular feedback across Contact Info, Experience, Education, Tone & Style, and Skills.

---

## 🛠️ Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework** | [React Router 7](https://reactrouter.com/) (Framework Mode), React 19 |
| **Language** | TypeScript 5.9 |
| **Styling** | Tailwind CSS v4, Radix UI Accordion, Lucide Icons |
| **PDF Engine** | `pdfjs-dist` (100% client-side parsing & canvas rendering) |
| **State** | Zustand + React Hooks |
| **Deployment** | Vite, Docker, [Vercel](https://resumind-khaki.vercel.app/) |

---

## 📦 Installation & Setup

```bash
# 1. Clone the repository
git clone https://github.com/mahmudbuilds/ResuMind.git
cd ResuMind

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app locally.