# Jash Popat — Personal Portfolio Website

A modern, fast, and responsive portfolio website showcasing my work across software development, graphic design, audio/video editing, and venture-building. 

This project is rebuilt from the ground up using **React**, **Vite**, and **React Router**, featuring an automated deployment pipeline powered by **GitHub Actions**.

Live site: [jashpopat.github.io](https://jashpopat.github.io)

---

## 🚀 Features

- **Multi-Page Navigation:** Seamless, client-side routing via React Router 7 for:
  - **Home:** Professional summary, core disciplines, and highlights.
  - **Studies & Work:** Academic credentials (UNSW Sydney Master of IT) and professional history.
  - **Projects:** Interactive showcase of software development and creative projects.
  - **Extracurriculars:** Leadership, community activities, and secondary interests.
  - **Contact:** Clean form and links to professional networks.
- **Modern Responsive Design:** Tailored CSS grid and flexbox layouts optimized for mobile, tablet, and desktop screens.
- **Structured Content Separation:** Key page content (such as internships, projects, and coursework) is stored in clean data models at the top of page components, allowing fast updates without modifying UI markup.
- **Automated CI/CD:** Integrated GitHub Actions workflow that automatically installs dependencies, builds the project, and deploys to GitHub Pages upon pushing to `main`.

---

## 🛠️ Technology Stack

- **Framework:** React 19
- **Bundler & Build Tool:** Vite 8 (extremely fast Hot Module Replacement)
- **Routing:** React Router 7
- **Styling:** Vanilla CSS3 (highly customized design tokens and layout grids)
- **Linter/Linter Engine:** Oxlint (fast Rust-based linter)

---

## 📂 Project Structure

```text
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions CI/CD deployment configuration
├── public/                   # Static assets (images, icons, resumes)
├── src/
│   ├── components/           # Reusable UI components (Nav, Footer, PathCrumb)
│   ├── pages/                # Individual page views (Home, Projects, etc.)
│   ├── App.jsx               # Main React Router setup
│   ├── main.jsx              # Application entry point
│   └── style.css             # Main styling, variables, and typography definitions
├── .gitignore                # Rules for files/folders to be ignored by Git
├── index.html                # Vite entry HTML template
├── package.json              # Project scripts and dependencies
└── vite.config.js            # Vite configuration settings
```

---

## 👤 About the Author

- **Name:** Jash Popat
- **Current Education:** Master of Information Technology (Cybersecurity) at UNSW Sydney.
- **Fields of Expertise:** Software Development, Cybersecurity, Graphic Design, Audio/Video Editing, and Entrepreneurship.
