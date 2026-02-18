document.addEventListener('DOMContentLoaded', () => {

    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Animate once
            }
        });
    }, observerOptions);

    // Apply observer to sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('fade-in-section');
        observer.observe(section);
    });

    // Bar Chart Animation
    const bars = document.querySelectorAll('.bar');
    // Animate bars on load or view
    setTimeout(() => {
        bars.forEach((bar, index) => {
            bar.style.height = bar.dataset.height || bar.style.height; // Trigger transition if set via CSS
        });
    }, 500);


    // Mobile Menu Toggle (Basic)
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navList = document.querySelector('.nav-list');

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            // Toggle menu visibility
            if (navList.style.display === 'flex') {
                navList.style.display = 'none';
            } else {
                navList.style.display = 'flex';
                navList.style.flexDirection = 'column';
                navList.style.position = 'absolute';
                navList.style.top = '70px';
                navList.style.left = '0';
                navList.style.width = '100%';
                navList.style.background = 'rgba(5, 5, 5, 0.95)';
                navList.style.padding = '20px';
                navList.style.borderBottom = '1px solid rgba(255,255,255,0.1)';
            }
        });
    }

    // Theme Toggle Logic
    const themeToggleBtn = document.querySelector('.theme-toggle');
    const themeIcon = themeToggleBtn?.querySelector('i');

    // Check for saved user preference
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'light') {
        document.body.classList.add('light-mode');
        if (themeIcon) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');

            // Toggle Icon
            if (document.body.classList.contains('light-mode')) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
                localStorage.setItem('theme', 'light');
            } else {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
                localStorage.setItem('theme', 'dark');
            }
        });
    }

});
