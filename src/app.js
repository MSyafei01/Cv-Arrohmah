// Simple JavaScript untuk Monascho website
console.log('🚀 Monascho website loaded successfully!');

document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ DOM fully loaded');
    
    // Mobile menu functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            this.textContent = nav.classList.contains('active') ? '✕' : '☰';
        });
        console.log('✅ Mobile menu initialized');
    }
    
    // Simple animations
    const animateElements = document.querySelectorAll('.fade-in, .slide-in');
    
    animateElements.forEach((el, index) => {
        setTimeout(() => {

            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 200);
    });
    
    // Form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Terima kasih! Pesan Anda telah terkirim.');
            this.reset();
        });
    }
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (header) {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });
    
    console.log('✅ All JavaScript functionality loaded');
});

// Fallback: Jika masih putih, tambah alert
setTimeout(() => {
    if (document.body.innerHTML.trim() === '') {
        console.log('⚠️ Body is empty, adding fallback content');
        document.body.innerHTML = `
            <div style="padding: 50px; text-align: center;">
                <h1>Monascho Website</h1>
                <p>Website sedang dalam pengembangan</p>
                <a href="index.html">Kembali ke Home</a>
            </div>
        `;
    }
}, 1000);