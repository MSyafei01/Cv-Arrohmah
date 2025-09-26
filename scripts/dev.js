    const esbuild = require('esbuild');
    const sass = require('sass');
    const fs = require('fs');
    const path = require('path');

    // Function to compile SCSS to CSS
    function compileSass() {
    try {
        const result = sass.compile(path.join(__dirname, '../src/styles/main.scss'), {
        style: 'expanded'
        });
        
        // Ensure directory exists
        const cssDir = path.join(__dirname, '../public/assets/css');
        if (!fs.existsSync(cssDir)) {
        fs.mkdirSync(cssDir, { recursive: true });
        }
        
        fs.writeFileSync(path.join(cssDir, 'main.min.css'), result.css);
        console.log('✅ SCSS compiled successfully');
    } catch (error) {
        console.error('❌ Error compiling SCSS:', error);
    }
    }

    // Function to build JavaScript (VANILLA JS)
    async function buildJS() {
    try {
        await esbuild.build({
        entryPoints: [path.join(__dirname, '../src/app.js')],
        bundle: true,
        outfile: path.join(__dirname, '../public/assets/js/app.bundle.js'),
        minify: false,
        target: ['es6']
        });
        console.log('✅ JavaScript built successfully');
    } catch (error) {
        console.error('❌ Error building JavaScript:', error);
    }
    }

    // Function to create proper HTML files
function createHTML() {
  const publicDir = path.join(__dirname, '../public');
  
  // Full HTML content for index.html
  const indexHTML = `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Monascho - Home</title>
    <link rel="stylesheet" href="assets/css/main.min.css">
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

    <section class="hero">
        <div class="container">
            <h1>Selamat Datang di Monascho</h1>
            <p>Perusahaan terdepan dalam menyediakan solusi berkualitas tinggi untuk kebutuhan bisnis Anda</p>
            <a href="about.html" class="btn">Pelajari Lebih Lanjut</a>
        </div>
    </section>

    <section class="section">
        <div class="container">
            <h2 class="section-title">Mengapa Memilih Kami</h2>
            <div class="grid grid-3">
                <div class="fade-in">
                    <h3>Kualitas Terjamin</h3>
                    <p>Produk kami melalui proses quality control yang ketat</p>
                </div>
                <div class="fade-in">
                    <h3>Pengalaman 10+ Tahun</h3>
                    <p>Sudah melayani ribuan klien di seluruh Indonesia</p>
                </div>
                <div class="fade-in">
                    <h3>Layanan 24/7</h3>
                    <p>Tim support siap membantu Anda kapan saja</p>
                </div>
            </div>
        </div>
    </section>

    <section class="section" style="background-color: #f8f9fa;">
        <div class="container">
            <div class="grid grid-2">
                <div class="slide-in-left">
                    <h2>Tentang Perusahaan Kami</h2>
                    <p>Monascho didirikan dengan visi untuk menjadi pemimpin dalam industri kami. Dengan komitmen pada kualitas, inovasi, dan kepuasan pelanggan.</p>
                    <a href="about.html" class="btn">Baca Selengkapnya</a>
                </div>
                <div class="slide-in-right">
                    <img src="https://via.placeholder.com/500x300" alt="Tentang Monascho" style="width:100%; border-radius:8px;">
                </div>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>Monascho</h3>
                    <p>Perusahaan terdepan dalam menyediakan solusi berkualitas tinggi.</p>
                </div>
                <div class="footer-section">
                    <h3>Link Cepat</h3>
                    <a href="index.html">Beranda</a>
                    <a href="about.html">Tentang</a>
                    <a href="products.html">Produk</a>
                    <a href="testimonials.html">Testimoni</a>
                    <a href="contact.html">Kontak</a>
                </div>
                <div class="footer-section">
                    <h3>Kontak</h3>
                    <p>Email: info@monascho.com</p>
                    <p>Telp: (021) 1234-5678</p>
                    <p>Alamat: Jakarta, Indonesia</p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 Monascho. Semua hak dilindungi.</p>
            </div>
        </div>
    </footer>

    <script src="assets/js/app.bundle.js"></script>
</body>
</html>`;

        // Basic HTML template for other pages
    const basicHTML = (title, pageName) => `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} - Monascho</title>
    <link rel="stylesheet" href="assets/css/main.min.css">
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

    <section class="hero">
        <div class="container">
            <h1>${title}</h1>
            <p>Halaman ${pageName} Monascho</p>
        </div>
    </section>

    <section class="section">
        <div class="container">
            <h2>Konten ${title}</h2>
            <p>Halaman ini sedang dalam pengembangan.</p>
            <a href="index.html" class="btn">Kembali ke Beranda</a>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <p>&copy; 2025 Monascho. Semua hak dilindungi.</p>
        </div>
    </footer>

    <script src="assets/js/app.bundle.js"></script>
</body>
</html>`;

        // Create all HTML files
        const pages = [
            { file: 'index.html', content: indexHTML },
            { file: 'about.html', content: basicHTML('Tentang Kami', 'tentang') },
            { file: 'products.html', content: basicHTML('Produk', 'produk') },
            { file: 'testimonials.html', content: basicHTML('Testimoni', 'testimoni') },
            { file: 'contact.html', content: basicHTML('Kontak', 'kontak') }
        ];

        pages.forEach(page => {
            fs.writeFileSync(path.join(publicDir, page.file), page.content);
        });

        console.log('✅ HTML files created successfully');
        }

    // Create assets directories if they don't exist
    function createDirs() {
    const dirs = [
        path.join(__dirname, '../public/assets/css'),
        path.join(__dirname, '../public/assets/js'),
        path.join(__dirname, '../public/assets/img')
    ];
    
    dirs.forEach(dir => {
        if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
        }
    });
    }

    // Initial build
    createDirs();
    compileSass();
    buildJS();
    copyHTML();

    // Watch for changes
    console.log('👀 Watching for changes...');

    fs.watch(path.join(__dirname, '../src/styles'), { recursive: true }, (eventType, filename) => {
    if (filename && filename.endsWith('.scss')) {
        console.log(`📦 SCSS file changed: ${filename}`);
        compileSass();
    }
    });

    fs.watch(path.join(__dirname, '../src'), { recursive: true }, (eventType, filename) => {
    if (filename && filename.endsWith('.js')) {
        console.log(`📦 JavaScript file changed: ${filename}`);
        buildJS();
    }
    });