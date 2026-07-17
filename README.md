# Saksham Singh Sachan - Premium Cybersecurity Portfolio

Welcome to the completely refactored, pure static version of the cybersecurity portfolio.

## Project Overview

This project has been heavily optimized for **GitHub Pages**. All backend dependencies, Next.js, React, Node.js, and build tools have been removed in favor of a blazing-fast, vanilla HTML/CSS/JS architecture. It retains the same premium 3D design, animations, and typography without requiring a server to run.

## Features

- **100% Static & Serverless:** Works natively by simply double-clicking `index.html`. No build steps required.
- **Cinematic Loader:** Matrix-style booting sequence rewritten in vanilla JS.
- **3D Hero Section:** Interactive rotating CyberSphere rebuilt with vanilla `Three.js`.
- **GSAP Scroll Animations:** High-performance scroll effects for all sections.
- **Deep Space Theme:** Preserved glassmorphism and animated gradients.
- **Cybersecurity Terminal:** Live simulated Nmap/Exploit terminal sequence.

## Technologies Used

- **HTML5 & CSS3**
- **Vanilla JavaScript (ES6)**
- **Tailwind CSS** (via CDN for local ease of use)
- **Three.js** (via CDN)
- **GSAP & ScrollTrigger** (via CDN)
- **Lucide Icons** (via CDN)

## Folder Structure

```text
/
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── script.js
│   │   └── three-sphere.js
│   ├── images/
│   ├── fonts/
│   └── icons/
├── .gitignore
└── README.md
```

## GitHub Pages Deployment Setup

This project is now 100% ready for GitHub Pages without any extra configurations or GitHub Actions. 

Upload it using these exact commands:

```bash
git init
git add .
git commit -m "Initial Commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git
git push -u origin main
```

Within a minute, your website will be live at `https://YOUR_USERNAME.github.io/`!
