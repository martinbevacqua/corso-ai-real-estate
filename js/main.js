/* ========================================
   AI GENERATIVA PER REAL ESTATE
   Main JavaScript
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {

    // ========================================
    // SMOOTH SCROLL
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navHeight = document.querySelector('.module-nav')?.offsetHeight || 0;
                const targetPosition = target.offsetTop - navHeight - 20;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ========================================
    // NAVIGATION ACTIVE STATE
    // ========================================
    const navModules = document.querySelectorAll('.nav-module');
    const modules = document.querySelectorAll('.module');
    const progressFill = document.querySelector('.progress-fill');

    function updateActiveNav() {
        const scrollPosition = window.scrollY + 200;

        modules.forEach((module, index) => {
            const moduleTop = module.offsetTop;
            const moduleBottom = moduleTop + module.offsetHeight;

            if (scrollPosition >= moduleTop && scrollPosition < moduleBottom) {
                navModules.forEach(nav => nav.classList.remove('active'));
                navModules[index]?.classList.add('active');

                // Update progress bar
                const progress = ((index + 1) / modules.length) * 100;
                if (progressFill) {
                    progressFill.style.width = progress + '%';
                }
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav();

    // ========================================
    // COPY TO CLIPBOARD
    // ========================================
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', async function() {
            const codeBlock = this.closest('.code-block');
            const code = codeBlock.querySelector('.code-content') || codeBlock;
            const text = code.textContent.trim();

            try {
                await navigator.clipboard.writeText(text);

                // Visual feedback
                const originalText = this.innerHTML;
                this.innerHTML = `
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Copiato!
                `;
                this.classList.add('copied');

                setTimeout(() => {
                    this.innerHTML = originalText;
                    this.classList.remove('copied');
                }, 2000);
            } catch (err) {
                console.error('Errore copia:', err);
            }
        });
    });

    // ========================================
    // SOLUTION TOGGLES
    // ========================================
    document.querySelectorAll('.solution-toggle').forEach(toggle => {
        toggle.addEventListener('click', function() {
            const content = this.nextElementSibling;
            this.classList.toggle('active');
            content.classList.toggle('show');
        });
    });

    // ========================================
    // PROMPT LIBRARY TABS
    // ========================================
    const promptTabs = document.querySelectorAll('.prompt-tab');
    const promptContents = document.querySelectorAll('.prompt-content');

    promptTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const target = this.dataset.tab;

            // Update tabs
            promptTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            // Update content
            promptContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === target) {
                    content.classList.add('active');
                }
            });
        });
    });

    // ========================================
    // ANIMATE ON SCROLL
    // ========================================
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });

    // ========================================
    // STICKY NAV - GLASSMORPHISM EFFECT
    // ========================================
    const moduleNav = document.querySelector('.module-nav');

    if (moduleNav) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                moduleNav.classList.add('scrolled');
            } else {
                moduleNav.classList.remove('scrolled');
            }
        });
    }

    // ========================================
    // KEYBOARD NAVIGATION
    // ========================================
    document.addEventListener('keydown', function(e) {
        // Arrow keys for module navigation
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            const activeNav = document.querySelector('.nav-module.active');
            const nextNav = activeNav?.nextElementSibling;
            if (nextNav && nextNav.classList.contains('nav-module')) {
                nextNav.click();
            }
        }

        if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            const activeNav = document.querySelector('.nav-module.active');
            const prevNav = activeNav?.previousElementSibling;
            if (prevNav && prevNav.classList.contains('nav-module')) {
                prevNav.click();
            }
        }
    });

    // ========================================
    // EXERCISE TIMER (Optional)
    // ========================================
    window.startTimer = function(minutes, displayElement) {
        let time = minutes * 60;
        const timer = setInterval(() => {
            const mins = Math.floor(time / 60);
            const secs = time % 60;
            displayElement.textContent = `${mins}:${secs.toString().padStart(2, '0')}`;

            if (time <= 0) {
                clearInterval(timer);
                displayElement.textContent = 'Tempo scaduto!';
                displayElement.style.color = '#ef4444';
            }
            time--;
        }, 1000);

        return timer;
    };

    // ========================================
    // DOWNLOAD PROMPT AS TXT
    // ========================================
    window.downloadPrompt = function(promptText, filename) {
        const blob = new Blob([promptText], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename || 'prompt.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    console.log('🚀 Corso AI Generativa - Inizializzato');
});
