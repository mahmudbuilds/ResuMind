# 📄 **AI Resume Analyzer - ResuMind**

<div align="center">

![ResuMind Banner](https://img.shields.io/badge/AI-Resume_Analyzer-4F46E5?style=for-the-badge&logo=react&logoColor=white)
[![React Router](https://img.shields.io/badge/React_Router-7.10.1-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-4.1.13-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

**An intelligent, AI-powered resume analyzer that instantly decodes resumes to provide actionable insights, ATS compatibility scores, and optimization recommendations for job seekers and recruiters.**

[🚀 Live Demo](#) • [📖 Documentation](#features) • [🐛 Report Bug](#) • [✨ Request Feature](#)

</div>

---

## 🌟 **Overview**

**ResuMind** is a modern, full-stack web application that leverages AI to analyze resumes and provide comprehensive feedback. Whether you're a job seeker looking to optimize your resume for Applicant Tracking Systems (ATS) or a recruiter evaluating candidates, ResuMind delivers instant, actionable insights with a beautiful, intuitive interface.

### **Why ResuMind?**

- 🎯 **ATS Optimization**: Get real-time scores showing how well your resume performs with Applicant Tracking Systems
- 🤖 **AI-Powered Analysis**: Intelligent parsing and evaluation of resume content
- 📊 **Visual Insights**: Beautiful score visualizations with gauges, circles, and badges
- 💾 **Resume Management**: Track multiple resumes and their performance over time
- 🔒 **Secure & Private**: Built with Puter.js for secure authentication and data storage
- ⚡ **Lightning Fast**: Server-side rendering with React Router for optimal performance

---

## ✨ **Features**

### **Core Functionality**

- **📤 Smart Resume Upload**
  - Drag-and-drop interface with React Dropzone
  - PDF parsing with pdfjs-dist
  - Instant file validation and preview

- **🎯 ATS Score Analysis**
  - Comprehensive ATS compatibility scoring (0-100)
  - Color-coded feedback (Red/Yellow/Green)
  - Specific improvement suggestions
  - Impact assessment on job search success

- **📈 Visual Score Displays**
  - **Score Gauge**: Animated arc gauge with percentage display
  - **Score Circle**: Circular progress indicator
  - **Score Badge**: Quick-glance rating badges
- **📋 Detailed Resume Breakdown**
  - Section-by-section analysis
  - Strengths and weaknesses identification
  - Actionable improvement tips
  - Professional summary generation

- **🗂️ Resume Dashboard**
  - View all analyzed resumes in one place
  - Track scores and improvements over time
  - Quick access to detailed reports
  - Resume comparison capabilities

### **Technical Features**

- ⚡ **Server-Side Rendering (SSR)** for optimal performance and SEO
- 🔥 **Hot Module Replacement (HMR)** for rapid development
- 🎨 **Modern UI/UX** with TailwindCSS and custom animations
- � **Fully Responsive** design for all devices
- 🔐 **Secure Authentication** with Puter.js
- � **Cloud Storage** for resume data persistence
- 🎭 **Type-Safe** with TypeScript throughout
- 🧩 **Component-Based Architecture** for maintainability

---

## 🛠️ **Tech Stack**

### **Frontend**

- **React 19.2.3** - Modern React with latest features
- **React Router 7.10.1** - Full-stack routing with SSR
- **TypeScript 5.9.2** - Type safety and better DX
- **TailwindCSS 4.1.13** - Utility-first styling
- **Lucide React** - Beautiful, consistent icons
- **React Dropzone** - Elegant file upload UX

### **Backend & Services**

- **React Router Server** - Node.js server with SSR
- **Puter.js** - Authentication and cloud storage
- **PDF.js** - Client-side PDF parsing
- **Zustand** - Lightweight state management

### **Development Tools**

- **Vite 7.1.7** - Next-generation build tool
- **Docker** - Containerization for deployment
- **ESLint & Prettier** - Code quality and formatting

---

## 🚀 **Getting Started**

### **Prerequisites**

- Node.js 18+ and npm/pnpm/yarn
- Git

### **Installation**

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/ai-resume-analyzer.git
   cd ai-resume-analyzer
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**

   Navigate to `http://localhost:5173` and start analyzing resumes!

---

## 📦 **Building for Production**

### **Standard Build**

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

The build outputs to:

```
build/
├── client/    # Static assets (CSS, JS, images)
└── server/    # Server-side code
```

### **Docker Deployment**

```bash
# Build Docker image
docker build -t resumind-app .

# Run container
docker run -p 3000:3000 resumind-app
```

**Deploy to:**

- AWS ECS / Fargate
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway
- Vercel
- Netlify

---

## 📁 **Project Structure**

```
ai-resume-analyzer/
├── app/
│   ├── components/          # React components
│   │   ├── ATS.tsx         # ATS score display
│   │   ├── Details.tsx     # Resume details view
│   │   ├── FileUploader.tsx # Upload interface
│   │   ├── ScoreGauge.tsx  # Gauge visualization
│   │   ├── ScoreCircle.tsx # Circle visualization
│   │   ├── ScoreBadge.tsx  # Badge component
│   │   ├── Summary.tsx     # Resume summary
│   │   └── ...
│   ├── routes/             # Route handlers
│   │   ├── home.tsx        # Dashboard
│   │   ├── upload.tsx      # Upload page
│   │   ├── resume.tsx      # Resume detail view
│   │   └── auth.tsx        # Authentication
│   ├── lib/                # Utilities
│   │   ├── puter.ts        # Puter.js integration
│   │   └── utils.ts        # Helper functions
│   ├── app.css             # Global styles
│   └── root.tsx            # App root
├── public/                 # Static assets
│   ├── icons/             # SVG icons
│   └── images/            # Images and backgrounds
├── types/                 # TypeScript definitions
├── Dockerfile             # Container configuration
└── package.json           # Dependencies
```

---

## 🎨 **Key Components**

### **ATS Score Component**

Displays comprehensive ATS compatibility analysis with:

- Dynamic color-coded scoring (0-100)
- Visual status indicators
- Specific improvement suggestions
- Impact assessment on job search

### **Score Visualizations**

Three distinct visualization components:

- **Gauge**: Arc-style progress indicator
- **Circle**: Circular progress ring
- **Badge**: Quick-glance score badge

### **File Uploader**

Elegant drag-and-drop interface with:

- PDF file validation
- Visual upload feedback
- Error handling
- Preview capabilities

---

## 🔐 **Authentication & Storage**

ResuMind uses **Puter.js** for:

- 🔒 Secure user authentication
- 💾 Cloud-based key-value storage
- 🔑 Session management
- 🌐 Cross-device synchronization

All resume data is securely stored and associated with authenticated users.

---

## 🎯 **Use Cases**

### **For Job Seekers**

- ✅ Optimize resumes for ATS systems
- ✅ Get instant feedback on resume quality
- ✅ Track improvements over multiple versions
- ✅ Increase interview callback rates

### **For Recruiters**

- ✅ Quickly evaluate candidate resumes
- ✅ Standardize resume assessment
- ✅ Identify top candidates faster
- ✅ Provide feedback to applicants

---

## 🤝 **Contributing**

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 **Acknowledgments**

- **React Router Team** - For the amazing full-stack framework
- **Puter.js** - For secure authentication and storage
- **PDF.js** - For reliable PDF parsing
- **Lucide** - For beautiful icons
- **TailwindCSS** - For the utility-first CSS framework

---

## 📧 **Contact**

**Your Name** - [@yourtwitter](https://twitter.com/yourtwitter) - your.email@example.com

**Project Link**: [https://github.com/yourusername/ai-resume-analyzer](https://github.com/yourusername/ai-resume-analyzer)

---

<div align="center">

**Built with ❤️ using React Router, TypeScript, and TailwindCSS**

⭐ Star this repo if you find it helpful!

</div>
