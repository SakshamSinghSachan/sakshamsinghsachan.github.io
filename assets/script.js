// assets/js/script.js

// Initialize Lucide Icons
lucide.createIcons();

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Custom Cursor ---
    const dot = document.getElementById('cursor-dot');
    const outline = document.getElementById('cursor-outline');
    
    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;
        
        // Dot follows instantly
        dot.style.left = `${posX}px`;
        dot.style.top = `${posY}px`;
        
        // Outline follows with slight delay using GSAP
        gsap.to(outline, {
            x: posX,
            y: posY,
            duration: 0.15,
            ease: "back.out(1.7)"
        });
        
        // Center alignment fix for outline (since left/top aren't used for animation to improve perf)
        if(outline.style.left === "") {
             outline.style.left = `0px`;
             outline.style.top = `0px`;
        }
    });

    // --- 2. Cinematic Loader ---
    const loader = document.getElementById('loader');
    const loaderText = document.getElementById('loader-text');
    const loaderBar = document.getElementById('loader-bar');
    const mainContent = document.getElementById('main-content');
    
    const messages = [
        "Initializing...",
        "Loading Security Modules...",
        "Connecting to Secure Node...",
        "Launching Interface..."
    ];
    
    let msgIndex = 0;
    
    function updateLoader() {
        if (msgIndex < messages.length) {
            loaderText.innerText = messages[msgIndex];
            loaderBar.style.width = `${((msgIndex + 1) / messages.length) * 100}%`;
            msgIndex++;
            setTimeout(updateLoader, 800);
        } else {
            setTimeout(() => {
                loader.style.opacity = '0';
                setTimeout(() => {
                    loader.style.display = 'none';
                    mainContent.style.opacity = '1';
                    initGSAPAnimations();
                }, 1000);
            }, 400);
        }
    }
    
    updateLoader();

    // --- 3. Hero Typing Effect ---
    const titles = [
        "Cybersecurity Researcher",
        "Bug Hunter",
        "Web Security Enthusiast",
        "CTF Player",
        "Ethical Hacker"
    ];
    const typingSpan = document.getElementById('hero-typing');
    let titleIndex = 0;
    
    setInterval(() => {
        gsap.to(typingSpan, {
            opacity: 0,
            y: -10,
            duration: 0.5,
            onComplete: () => {
                titleIndex = (titleIndex + 1) % titles.length;
                typingSpan.innerText = titles[titleIndex];
                gsap.fromTo(typingSpan, {y: 10, opacity: 0}, {y: 0, opacity: 1, duration: 0.5});
            }
        });
    }, 3000);
    
    // Initial set
    typingSpan.innerText = titles[0];

    // --- 4. GSAP Scroll Animations ---
    function initGSAPAnimations() {
        // Hero Content Reveal
        gsap.to(".hero-content", {
            opacity: 1,
            x: 0,
            duration: 1,
            delay: 0.5,
            ease: "power3.out"
        });

        // Astrophysics Reveal
        gsap.to(".astro-text", {
            scrollTrigger: {
                trigger: "#astrophysics",
                start: "top 60%",
            },
            opacity: 1,
            x: 0,
            duration: 0.8
        });
        
        gsap.to(".astro-visual", {
            scrollTrigger: {
                trigger: "#astrophysics",
                start: "top 60%",
            },
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "back.out(1.2)"
        });

        // Parallax Stars
        gsap.to("#astro-bg", {
            scrollTrigger: {
                trigger: "#astrophysics",
                start: "top bottom",
                end: "bottom top",
                scrub: true
            },
            y: "30%"
        });

        // Chess Section
        gsap.to(".chess-text", {
            scrollTrigger: {
                trigger: "#chess",
                start: "top 60%",
            },
            opacity: 1,
            y: 0,
            duration: 0.8
        });
        
        gsap.to(".chess-visual", {
            scrollTrigger: {
                trigger: "#chess",
                start: "top 60%",
            },
            opacity: 1,
            scale: 1,
            duration: 1
        });
        
        // Populate Chess Skills dynamically
        const chessSkills = ["Strategy", "Pattern Recognition", "Tactical Thinking", "Long-Term Planning", "Decision Making Under Pressure"];
        const skillsContainer = document.getElementById("chess-skills");
        
        chessSkills.forEach((skill, index) => {
            const el = document.createElement("div");
            el.className = "flex items-center gap-4 glass-card p-4 rounded border-l-4 border-l-purple-nebula hover:border-l-electric-cyan transition-colors opacity-0 -translate-x-4";
            el.innerHTML = `<span class="text-2xl">♟</span><span class="font-mono text-white font-bold">${skill}</span>`;
            skillsContainer.appendChild(el);
            
            gsap.to(el, {
                scrollTrigger: {
                    trigger: "#chess",
                    start: "top 50%",
                },
                opacity: 1,
                x: 0,
                duration: 0.5,
                delay: index * 0.1
            });
        });

        // Cybersecurity Section Reveal
        gsap.to(".cyber-text", {
            scrollTrigger: {
                trigger: "#cybersecurity",
                start: "top 60%",
            },
            opacity: 1,
            x: 0,
            duration: 0.8
        });
        
        gsap.to(".cyber-visual", {
            scrollTrigger: {
                trigger: "#cybersecurity",
                start: "top 60%",
            },
            opacity: 1,
            scale: 1,
            duration: 0.8,
            onComplete: startTerminalEffect
        });
    }

    // --- 5. Cybersecurity Terminal Effect ---
    const terminalCommands = [
        "root@saksham:~# nmap -sS -O 192.168.1.1",
        "Starting Nmap 7.93 ( https://nmap.org )",
        "Host is up (0.0012s latency).",
        "Not shown: 996 closed tcp ports",
        "PORT    STATE SERVICE",
        "22/tcp  open  ssh",
        "80/tcp  open  http",
        "443/tcp open  https",
        "Device type: general purpose",
        "root@saksham:~# python3 exploit.py --target api.example.com",
        "[+] Exploit initialized...",
        "[+] Payload injected successfully.",
        "[+] Access granted."
    ];
    
    let terminalStarted = false;
    
    function startTerminalEffect() {
        if (terminalStarted) return;
        terminalStarted = true;
        
        const terminalContainer = document.getElementById('terminal-lines');
        let lineIndex = 0;
        
        const interval = setInterval(() => {
            if (lineIndex < terminalCommands.length) {
                const lineText = terminalCommands[lineIndex];
                const el = document.createElement("div");
                
                // Color formatting
                if (lineText.includes('root@')) {
                    el.className = "text-white mt-2";
                } else if (lineText.includes('[+]')) {
                    el.className = "text-electric-cyan";
                } else {
                    el.className = "text-green-500/70";
                }
                
                el.innerText = lineText;
                terminalContainer.appendChild(el);
                
                // GSAP slide in
                gsap.fromTo(el, {opacity: 0, x: -10}, {opacity: 1, x: 0, duration: 0.2});
                
                lineIndex++;
            } else {
                clearInterval(interval);
            }
        }, 500);
    }
    
    // --- 6. Matrix Background Decoration ---
    const matrixBg = document.getElementById('matrix-bg');
    const binString = "01010111 01100101 01100010 01010011 01100101 01100011 ";
    if (matrixBg) {
        matrixBg.innerText = binString.repeat(150);
    }
});
