    const fs = require('fs');
    const path = require('path');

    // Function to create basic HTML templates
    function createHTMLTemplates() {
    const publicDir = path.join(__dirname, '../public');
    
    // Ensure public directory exists
    if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
    }
    
    // Basic HTML template
    const htmlTemplate = (title, pageName) => `<!DOCTYPE html>
    <html lang="id">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title} - Monascho</title>
        <meta name="description" content="${title} - Monascho Company Profile">
        <link rel="stylesheet" href="assets/css/main.min.css">
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🏢</text></svg>">
    </head>
    <body>
        <header class="header">
            <div class="container">
                <a href="index.html" class="logo">Monascho</a>
                <button class="menu-toggle">☰</button>
                <nav class="nav">
                    <ul class="nav-list">
                        <li><a href="index.html" class="nav-link">Beranda</a></li>
                        <li><a href="about.html" class="nav-link">Tentang</a></li>
                        <li><a href="products.html" class="nav-link">Produk</a></li>
                        <li><a href="testimonials.html" class="nav-link">Testimoni</a></li>
                        <li><a href="contact.html" class="nav-link">Kontak</a></li>
                    </ul>
                </nav>
            </div>
        </header>

        <main>
            <section class="hero">
                <div class="container">
                    <h1>${title}</h1>
                    <p>Selamat datang di halaman ${pageName} Monascho</p>
                </div>
            </section>

            <section class="section">
                <div class="container">
                    <h2>Konten ${title}</h2>
                    <p>Halaman ini berisi informasi tentang ${pageName.toLowerCase()} perusahaan Monascho.</p>
                    
                    ${pageName === 'Beranda' ? `
                    <div class="grid grid-3">
                        <div class="fade-in">
                            <h3>Visi</h3>
                            <p>Menjadi perusahaan terdepan dalam industri</p>
                        </div>
                        <div class="fade-in">
                            <h3>Misi</h3>
                            <p>Memberikan solusi terbaik untuk klien</p>
                        </div>
                        <div class="fade-in">
                            <h3>Nilai</h3>
                            <p>Kualitas, inovasi, dan kepuasan pelanggan</p>
                        </div>
                    </div>
                    ` : ''}
                    
                    ${pageName === 'Kontak' ? `
                    <div class="contact-info">
                        <p><strong>Email:</strong> info@monascho.com</p>
                        <p><strong>Telepon:</strong> (021) 1234-5678</p>
                        <p><strong>Alamat:</strong> Jl. Contoh No. 123, Jakarta</p>
                    </div>
                    ` : ''}
                </div>
            </section>
        </main>

        <footer class="footer">
            <div class="container">
                <div class="footer-content">
                    <div class="footer-section">
                        <h3>Monascho</h3>
                        <p>Perusahaan terdepan dalam menyediakan solusi berkualitas tinggi.</p>
                    </div>
                    <div class="footer-section">
                        <h3>Menu</h3>
                        <a href="index.html">Beranda</a>
                        <a href="about.html">Tentang</a>
                        <a href="products.html">Produk</a>
                        <a href="testimonials.html">Testimoni</a>
                        <a href="contact.html">Kontak</a>
                    </div>
                    <div class="footer-section">
                        <h3>Kontak</h3>
                        <p>Email: info@monascho.com</p>
                        <p>Telepon: (021) 1234-5678</p>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; 2025 Monascho. Semua hak dilindungi.</p>
                </div>
            </div>
        </footer>

        <script src="assets/js/app.bundle.js"></script>
        
        <script>
            // Basic functionality
            document.addEventListener('DOMContentLoaded', function() {
                // Mobile menu
                const menuToggle = document.querySelector('.menu-toggle');
                const nav = document.querySelector('.nav');
                
                if (menuToggle && nav) {
                    menuToggle.addEventListener('click', function() {
                        nav.classList.toggle('active');
                        this.textContent = nav.classList.contains('active') ? '✕' : '☰';
                    });
                }
                
                // Simple animations
                const fadeElements = document.querySelectorAll('.fade-in');
                fadeElements.forEach((el, index) => {
                    setTimeout(() => {
                        el.style.opacity = '1';
                        el.style.transform = 'translateY(0)';
                    }, index * 200);
                });
            });
        </script>
    </body>
    </html>`;

    // Create HTML files
    const pages = [
        { file: 'index.html', title: 'Monascho', pageName: 'Beranda' },
        { file: 'about.html', title: 'Tentang Kami', pageName: 'Tentang' },
        { file: 'products.html', title: 'Produk', pageName: 'Produk' },
        { file: 'testimonials.html', title: 'Testimoni', pageName: 'Testimoni' },
        { file: 'contact.html', title: 'Kontak', pageName: 'Kontak' }
    ];

    let createdCount = 0;
    pages.forEach(page => {
        const filePath = path.join(publicDir, page.file);
        if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, htmlTemplate(page.title, page.pageName));
        console.log(`✅ Created: ${page.file}`);
        createdCount++;
        } else {
        console.log(`⚠️  Skipped: ${page.file} (already exists)`);
        }
    });

    if (createdCount > 0) {
        console.log(`🎉 Successfully created ${createdCount} HTML files`);
    } else {
        console.log('💡 All HTML files already exist');
    }
    }

    // Run the function
    createHTMLTemplates();