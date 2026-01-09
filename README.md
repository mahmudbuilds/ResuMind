# 📄 **ResuMind: AI-Powered Resume Intelligence**

<div align="center">

![ResuMind Banner](https://img.shields.io/badge/AI-Resume_Analyzer-4F46E5?style=for-the-badge&logo=react&logoColor=white)
[![React Router](https://img.shields.io/badge/React_Router-7.10.1-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-4.1.13-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

**Stop guessing, start getting hired. ResuMind decodes the "black box" of ATS systems to give you a competitive edge.**

[**🚀 Live Demo**](https://resumind-khaki.vercel.app/) · [Report Bug](https://github.com/mahx-code/Resumind/issues) · [Request Feature](https://github.com/mahx-code/Resumind/issues)

</div>

---

## 📖 **Overview**

**ResuMind** is a high-performance, AI-driven platform designed to bridge the gap between job seekers and recruitment algorithms. By leveraging modern LLMs and intelligent parsing, ResuMind provides an "insider's view" of how your resume is perceived by both robots (ATS) and humans.

### **The Problem**
75% of resumes are rejected by Applicant Tracking Systems before a human even sees them due to formatting errors or keyword mismatches.

### **The Solution**
ResuMind analyzes your document's structure, keyword density, and formatting to provide a **real-time compatibility score** and actionable steps to optimize it for modern hiring workflows.

---

## 🚀 **Key Features**

### **1. Intelligent Parsing & Analysis**
* **Deep PDF Extraction:** Uses `pdfjs-dist` to handle complex multi-column layouts and extract text accurately.
* **ATS Compatibility Scoring:** A proprietary scoring algorithm (0-100) that mimics modern recruitment software.
* **Keyword Gap Analysis:** Identifies missing industry-standard skills based on your target role.

### **2. Dynamic Visualizations**
* **Interactive Gauges:** Real-time animated feedback on your resume’s health.
* **Section Breakdown:** Granular scoring for Contact Info, Experience, Education, and Skills.
* **Actionable Tips:** Not just scores, but specific "Fix-it" instructions for your bullet points.

### **3. Privacy-First Experience**
* **Puter.js Integration:** Secure, decentralized authentication and cloud storage via [Puter.com](https://puter.com).
* **Local Processing:** PDF text extraction happens in the browser to ensure maximum data privacy.

---

## 🛠️ **Tech Stack**

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | React 19, TypeScript, TailwindCSS 4, Lucide Icons |
| **Routing/SSR**| [React Router 7](https://reactrouter.com/) (Framework Mode) |
| **State** | Zustand (Global) & React Hooks (Local) |
| **Parsing** | PDF.js (Client-side extraction) |
| **Backend/Auth** | [Puter.js](https://puter.com/docs/puter-js) (Auth & Cloud KV Store) |
| **Deployment** | Docker, Vite, [Vercel](https://resumind-khaki.vercel.app/) |

---

## ⚙️ **How It Works**

1.  **Ingestion:** The user uploads a PDF via the drag-and-drop interface. `pdfjs-dist` extracts the raw text directly in the browser.
2.  **Analysis:** The extracted text is processed via AI logic to identify core entities such as job titles, dates, and technical skills.
3.  **Scoring:** The system runs a multi-pass check against common ATS rejection triggers like poor formatting, missing sections, or low keyword density.
4.  **Reporting:** Results are visualized through custom-built React components like `ScoreGauge` and `Details`.

---

## 📦 **Installation & Setup**

### **Local Development**

```bash
# 1. Clone the repository
git clone [https://github.com/mahx-code/Resumind.git](https://github.com/mahx-code/Resumind.git)

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev