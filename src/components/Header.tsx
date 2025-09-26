/*    import { useEffect, useState } from 'react';

    const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return `
        <header class="header ${isScrolled ? 'scrolled' : ''}">
        <div class="container">
            <a href="/" class="logo">Monascho</a>
            
            <button class="menu-toggle" onclick="toggleMenu()">
            ${isMenuOpen ? '✕' : '☰'}
            </button>
            
            <nav class="nav ${isMenuOpen ? 'active' : ''}">
            <ul class="nav-list">
                <li><a href="index.html" class="nav-link" onclick="closeMenu()">Beranda</a></li>
                <li><a href="about.html" class="nav-link" onclick="closeMenu()">Tentang</a></li>
                <li><a href="products.html" class="nav-link" onclick="closeMenu()">Produk</a></li>
                <li><a href="testimonials.html" class="nav-link" onclick="closeMenu()">Testimoni</a></li>
                <li><a href="contact.html" class="nav-link" onclick="closeMenu()">Kontak</a></li>
            </ul>
            </nav>
        </div>
        </header>
        
        <script>
        function toggleMenu() {
            document.querySelector('.nav').classList.toggle('active');
            document.querySelector('.menu-toggle').textContent = 
            document.querySelector('.nav').classList.contains('active') ? '✕' : '☰';
        }
        
        function closeMenu() {
            document.querySelector('.nav').classList.remove('active');
            document.querySelector('.menu-toggle').textContent = '☰';
        }
        </script>
    `;
    };

    export default Header;
    */