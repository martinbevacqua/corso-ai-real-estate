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
        rootMargin: '50px',
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
        // Check if element is already in viewport on page load
        const rect = el.getBoundingClientRect();
        const isInViewport = (
            rect.top < window.innerHeight &&
            rect.bottom > 0 &&
            rect.left < window.innerWidth &&
            rect.right > 0
        );

        if (isInViewport) {
            // Element already visible - add class immediately
            el.classList.add('visible');
        }

        // Also observe for future scroll events
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

    // ========================================
    // QUIZ INIZIALE - PRE ASSESSMENT
    // ========================================
    let scoreQuizIniziale = 0;

    window.verificaQuizIniziale = function() {
        const risposteCorrette = {
            'q2-init': 'b', // Allucinazione = AI inventa
            'q3-init': 'b', // Non inserire codice fiscale
            'q4-init': 'b', // Prompt = istruzione
            'q5-init': 'b'  // ChatGPT non naviga di base
        };

        let punteggio = 0;
        let risposte = 0;

        // Q1 e una domanda di esperienza, non ha risposta giusta/sbagliata
        const q1 = document.querySelector('input[name="q1-init"]:checked');
        if (q1) risposte++;

        // Verifica le altre domande
        for (const [name, correct] of Object.entries(risposteCorrette)) {
            const selected = document.querySelector(`input[name="${name}"]:checked`);
            if (selected) {
                risposte++;
                if (selected.value === correct) {
                    punteggio++;
                }
            }
        }

        // Verifica che tutte le domande siano state risposte
        if (risposte < 5) {
            alert('Per favore rispondi a tutte le domande prima di continuare.');
            return;
        }

        scoreQuizIniziale = punteggio;

        // Mostra risultati
        const risultati = document.getElementById('risultati-quiz-iniziale');
        const icona = document.getElementById('risultato-icona');
        const titolo = document.getElementById('risultato-titolo');
        const score = document.getElementById('risultato-score');
        const messaggio = document.getElementById('risultato-messaggio');

        risultati.style.display = 'block';

        if (punteggio === 4) {
            icona.style.background = 'linear-gradient(135deg, var(--success) 0%, var(--accent-cyan) 100%)';
            icona.textContent = '🌟';
            titolo.textContent = 'Ottimo Punto di Partenza!';
            score.textContent = `${punteggio}/4 risposte corrette`;
            messaggio.innerHTML = `
                <p style="margin-bottom: var(--space-2);"><strong>Hai gia una buona base!</strong></p>
                <p style="color: var(--text-secondary);">Conosci i concetti fondamentali. Questo corso ti aiutera a passare da utente base a power user con tecniche avanzate di prompting e workflow professionali.</p>
            `;
        } else if (punteggio >= 2) {
            icona.style.background = 'linear-gradient(135deg, var(--warning) 0%, var(--accent-pink) 100%)';
            icona.textContent = '💡';
            titolo.textContent = 'Buon Inizio!';
            score.textContent = `${punteggio}/4 risposte corrette`;
            messaggio.innerHTML = `
                <p style="margin-bottom: var(--space-2);"><strong>Hai alcune nozioni, ma c'e margine di crescita.</strong></p>
                <p style="color: var(--text-secondary);">Perfetto! Questo corso colmera le lacune e ti dara strumenti pratici per usare l'AI in modo professionale. Presta particolare attenzione al Modulo 1 sulle fondamenta.</p>
            `;
        } else {
            icona.style.background = 'linear-gradient(135deg, var(--accent-purple) 0%, var(--accent-cyan) 100%)';
            icona.textContent = '🚀';
            titolo.textContent = 'Pronto per Imparare!';
            score.textContent = `${punteggio}/4 risposte corrette`;
            messaggio.innerHTML = `
                <p style="margin-bottom: var(--space-2);"><strong>Partirai da zero - e va benissimo!</strong></p>
                <p style="color: var(--text-secondary);">Questo corso e pensato proprio per te. Ti guideremo passo passo, dalle basi fino alle tecniche avanzate. Alla fine sarai in grado di usare l'AI come un vero professionista.</p>
            `;
        }

        // Nascondi il bottone verifica
        document.getElementById('verifica-quiz-iniziale').style.display = 'none';

        // Scroll ai risultati
        risultati.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    // ========================================
    // QUIZ FINALE - POST ASSESSMENT
    // ========================================
    window.verificaQuizFinale = function() {
        const container = document.getElementById('quiz-finale-container');
        const questions = container.querySelectorAll('.quiz-question');
        let punteggio = 0;
        let risposte = 0;

        questions.forEach((question, index) => {
            const options = question.querySelectorAll('.quiz-option');
            const selected = question.querySelector('input:checked');
            const feedback = question.querySelector('.quiz-feedback');

            if (selected) {
                risposte++;
                const label = selected.closest('label');
                const isCorrect = label.dataset.correct === 'true';

                if (isCorrect) {
                    punteggio++;
                    label.style.borderColor = 'var(--success)';
                    label.style.background = 'rgba(16, 185, 129, 0.1)';
                    feedback.style.display = 'block';
                    feedback.style.background = 'rgba(16, 185, 129, 0.1)';
                    feedback.style.color = 'var(--success)';
                    feedback.innerHTML = '✓ Corretto!';
                } else {
                    label.style.borderColor = 'var(--error)';
                    label.style.background = 'rgba(239, 68, 68, 0.1)';

                    // Trova e evidenzia la risposta corretta
                    options.forEach(opt => {
                        if (opt.dataset.correct === 'true') {
                            opt.style.borderColor = 'var(--success)';
                            opt.style.background = 'rgba(16, 185, 129, 0.1)';
                        }
                    });

                    feedback.style.display = 'block';
                    feedback.style.background = 'rgba(239, 68, 68, 0.1)';
                    feedback.style.color = 'var(--error)';
                    feedback.innerHTML = '✗ La risposta corretta e evidenziata in verde';
                }
            }
        });

        // Verifica che tutte le domande siano state risposte
        if (risposte < 10) {
            alert('Per favore rispondi a tutte le 10 domande prima di verificare.');
            return;
        }

        // Mostra risultati finali
        const risultati = document.getElementById('risultati-quiz-finale');
        const icona = document.getElementById('risultato-finale-icona');
        const titolo = document.getElementById('risultato-finale-titolo');
        const score = document.getElementById('risultato-finale-score');
        const messaggio = document.getElementById('risultato-finale-messaggio');

        risultati.style.display = 'block';

        const percentuale = (punteggio / 10) * 100;

        if (percentuale >= 90) {
            icona.style.background = 'linear-gradient(135deg, var(--success) 0%, var(--accent-cyan) 100%)';
            icona.textContent = '🏆';
            titolo.textContent = 'Eccellente! Sei un Power User!';
            score.textContent = `${punteggio}/10 (${percentuale}%)`;
            messaggio.innerHTML = `
                <p style="margin-bottom: var(--space-2);"><strong>Hai padroneggiato i concetti del corso!</strong></p>
                <p style="color: var(--text-secondary);">Sei pronto per applicare queste competenze nel tuo lavoro quotidiano. Ricorda di salvare i prompt template e di sperimentare con le tecniche avanzate.</p>
            `;
        } else if (percentuale >= 70) {
            icona.style.background = 'linear-gradient(135deg, var(--accent-purple) 0%, var(--accent-cyan) 100%)';
            icona.textContent = '⭐';
            titolo.textContent = 'Ottimo Lavoro!';
            score.textContent = `${punteggio}/10 (${percentuale}%)`;
            messaggio.innerHTML = `
                <p style="margin-bottom: var(--space-2);"><strong>Hai acquisito una solida comprensione!</strong></p>
                <p style="color: var(--text-secondary);">Rivedi le risposte sbagliate per consolidare le aree dove hai ancora margine di miglioramento. La pratica rendera perfetti!</p>
            `;
        } else if (percentuale >= 50) {
            icona.style.background = 'linear-gradient(135deg, var(--warning) 0%, var(--accent-pink) 100%)';
            icona.textContent = '💪';
            titolo.textContent = 'Buon Progresso!';
            score.textContent = `${punteggio}/10 (${percentuale}%)`;
            messaggio.innerHTML = `
                <p style="margin-bottom: var(--space-2);"><strong>Hai imparato le basi, ma c'e ancora da fare.</strong></p>
                <p style="color: var(--text-secondary);">Ti consigliamo di ripassare i moduli dove hai avuto piu difficolta. Usa la Prompt Library per fare pratica con esempi reali.</p>
            `;
        } else {
            icona.style.background = 'linear-gradient(135deg, var(--error) 0%, var(--warning) 100%)';
            icona.textContent = '📚';
            titolo.textContent = 'Serve un Ripasso';
            score.textContent = `${punteggio}/10 (${percentuale}%)`;
            messaggio.innerHTML = `
                <p style="margin-bottom: var(--space-2);"><strong>Non preoccuparti - l'apprendimento richiede tempo!</strong></p>
                <p style="color: var(--text-secondary);">Ti consigliamo di rileggere i moduli con calma e fare gli esercizi pratici. L'AI si impara facendo, non solo leggendo.</p>
            `;
        }

        // Mostra confronto pre/post
        document.getElementById('score-iniziale-display').textContent = `${scoreQuizIniziale}/4`;
        document.getElementById('score-finale-display').textContent = `${punteggio}/10`;

        // Nascondi il bottone verifica
        document.getElementById('verifica-quiz-finale').style.display = 'none';

        // Disabilita le opzioni
        container.querySelectorAll('input').forEach(input => {
            input.disabled = true;
        });

        // Scroll ai risultati
        risultati.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    // ========================================
    // QUIZ OPTIONS HOVER EFFECT
    // ========================================
    document.querySelectorAll('.quiz-option').forEach(option => {
        option.addEventListener('mouseenter', function() {
            if (!this.querySelector('input').disabled) {
                this.style.borderColor = 'var(--accent-purple)';
            }
        });
        option.addEventListener('mouseleave', function() {
            if (!this.querySelector('input:checked') && !this.querySelector('input').disabled) {
                this.style.borderColor = 'transparent';
            }
        });
        option.addEventListener('click', function() {
            const name = this.querySelector('input').name;
            document.querySelectorAll(`input[name="${name}"]`).forEach(input => {
                input.closest('label').style.borderColor = 'transparent';
                input.closest('label').style.background = 'var(--bg-tertiary)';
            });
            this.style.borderColor = 'var(--accent-purple)';
            this.style.background = 'rgba(139, 92, 246, 0.1)';
        });
    });

    console.log('🚀 Corso AI Generativa - Inizializzato');
});
