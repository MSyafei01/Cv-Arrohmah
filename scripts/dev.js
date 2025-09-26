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

    // Function to copy HTML files
    function copyHTML() {
    const publicDir = path.join(__dirname, '../public');
    
    // Create basic HTML files
    const pages = [
        { name: 'index', title: 'Monascho - Home' },
        { name: 'about', title: 'Tentang Kami - Monascho' },
        { name: 'products', title: 'Produk - Monascho' },
        { name: 'testimonials', title: 'Testimoni - Monascho' },
        { name: 'contact', title: 'Kontak - Monascho' }
    ];
    
    pages.forEach(page => {
        const content = `<!DOCTYPE html>
    <html lang="id">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${page.title}</title>
        <link rel="stylesheet" href="assets/css/main.min.css">
    </head>
    <body>
        <div id="app"></div>
        <script src="assets/js/app.bundle.js"></script>
    </body>
    </html>`;
        
        const filename = page.name === 'index' ? 'index.html' : `${page.name}.html`;
        fs.writeFileSync(path.join(publicDir, filename), content);
    });
    
    console.log('✅ HTML files copied successfully');
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