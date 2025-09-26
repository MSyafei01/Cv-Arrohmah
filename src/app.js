        import { gsap } from 'gsap';
        import { ScrollTrigger } from 'gsap/ScrollTrigger';

        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);

        // Import components (simplified for static site)
        import HomePage from './pages/HomePage';
        import AboutPage from './pages/AboutPage';
        import ProductsPage from './pages/ProductsPage';
        import TestimonialsPage from './pages/TestimonialsPage';
        import ContactPage from './pages/ContactPage';

        // Router for SPA-like behavior
        class Router {
        constructor() {
            this.routes = {
            '/': HomePage,
            '/index.html': HomePage,
            '/about.html': AboutPage,
            '/products.html': ProductsPage,
            '/testimonials.html': TestimonialsPage,
            '/contact.html': ContactPage
            };
            
            this.init();
        }
        
        init() {
            // Handle initial load
            this.navigate(window.location.pathname);
            
            // Handle back/forward navigation
            window.addEventListener('popstate', () => {
            this.navigate(window.location.pathname);
            });
            
            // Handle link clicks
            document.addEventListener('click', (e) => {
            if (e.target.matches('[data-link]')) {
                e.preventDefault();
                this.navigate(e.target.href);
            }
            });
        }
        
        navigate(path) {
            const route = this.routes[path] || HomePage;
            
            // Update content
            document.getElementById('app').innerHTML = route();
            
            // Update browser history
            window.history.pushState(null, null, path);
            
            // Initialize animations
            this.initAnimations();
            
            // Scroll to top
            window.scrollTo(0, 0);
        }
        
        initAnimations() {
            // Initialize GSAP animations
            gsap.fromTo('.fade-in', 
            { opacity: 0, y: 30 },
            { 
                opacity: 1, 
                y: 0, 
                duration: 0.8, 
                stagger: 0.2,
                scrollTrigger: {
                trigger: '.fade-in',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
                }
            }
            );
            
            gsap.fromTo('.slide-in-left', 
            { opacity: 0, x: -50 },
            { 
                opacity: 1, 
                x: 0, 
                duration: 0.8,
                scrollTrigger: {
                trigger: '.slide-in-left',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
                }
            }
            );
            
            gsap.fromTo('.slide-in-right', 
            { opacity: 0, x: 50 },
            { 
                opacity: 1, 
                x: 0, 
                duration: 0.8,
                scrollTrigger: {
                trigger: '.slide-in-right',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
                }
            }
            );
            
            // Hero animation
            gsap.fromTo('.hero h1', 
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, delay: 0.3 }
            );
            
            gsap.fromTo('.hero p', 
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1, delay: 0.6 }
            );
            
            gsap.fromTo('.hero .btn', 
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 0.8, delay: 0.9 }
            );
        }
        }

        // Initialize the router when DOM is loaded
        document.addEventListener('DOMContentLoaded', () => {
        new Router();
        });

        // Handle form submissions
        
        document.addEventListener('submit', (e) => {
        if (e.target.matches('form')) {
            e.preventDefault();
            
            const submitBtn = e.target.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            // Show loading state
            submitBtn.innerHTML = '<span class="loading"></span> Mengirim...';
            submitBtn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
            alert('Terima kasih! Pesan Anda telah terkirim. Kami akan menghubungi Anda segera.');
            e.target.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            }, 2000);
        }
        });

        // Mobile menu functionality
        document.addEventListener('click', (e) => {
        if (e.target.matches('.menu-toggle')) {
            const nav = document.querySelector('.nav');
            const toggle = document.querySelector('.menu-toggle');
            
            nav.classList.toggle('active');
            toggle.textContent = nav.classList.contains('active') ? '✕' : '☰';
        }
        
        // Close menu when clicking on a link
        if (e.target.matches('.nav-link')) {
            const nav = document.querySelector('.nav');
            const toggle = document.querySelector('.menu-toggle');
            
            nav.classList.remove('active');
            toggle.textContent = '☰';
        }
        });

        // Header scroll effect
        window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        });