    const esbuild = require('esbuild');
    const sass = require('sass');
    const fs = require('fs');
    const path = require('path');

    // Function to compile SCSS to CSS (minified)
    function compileSass() {
    try {
        const result = sass.compile(path.join(__dirname, '../src/styles/main.scss'), {
        style: 'compressed'
        });
        
        // Ensure directory exists
        const cssDir = path.join(__dirname, '../public/assets/css');
        if (!fs.existsSync(cssDir)) {
        fs.mkdirSync(cssDir, { recursive: true });
        }
        
        fs.writeFileSync(path.join(cssDir, 'main.min.css'), result.css);
        console.log('✅ SCSS compiled and minified successfully');
    } catch (error) {
        console.error('❌ Error compiling SCSS:', error);
    }
    }

// Di scripts/dev.js - Ganti function buildJS() dengan:
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
    const srcDir = path.join(__dirname, '../src/pages');
    const publicDir = path.join(__dirname, '../public');
    
    // Create simplified HTML files for direct access
    const pages = ['HomePage', 'AboutPage', 'ProductsPage', 'TestimonialsPage', 'ContactPage'];
    
    pages.forEach(page => {
        const content = `
    <!DOCTYPE html>
    <html lang="id">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${page.replace('Page', '')} - Monascho</title>
        <meta name="description" content="Monascho - Perusahaan terdepan dalam industri">
        <link rel="stylesheet" href="assets/css/main.min.css">
        <link rel="icon" href="favicon.ico">
    </head>
    <body>
        <div id="app"></div>
        <script src="assets/js/app.bundle.js"></script>
    </body>
    </html>
        `;
        
        const filename = page === 'HomePage' ? 'index.html' : `${page.replace('Page', '').toLowerCase()}.html`;
        fs.writeFileSync(path.join(publicDir, filename), content);
    });
    
    console.log('✅ HTML files copied successfully');
    }

    // Create assets directories if they don't exist
    function createDirectories() {
    const dirs = [
        path.join(__dirname, '../public/assets/css'),
        path.join(__dirname, '../public/assets/js'),
        path.join(__dirname, '../public/assets/img'),
        path.join(__dirname, '../public/assets/fonts')
    ];
    
    dirs.forEach(dir => {
        if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
        }
    });
    
    console.log('✅ Directories created successfully');
    }

    // Main build function
    async function build() {
    console.log('🚀 Starting build process...');
    
    createDirectories();
    compileSass();
    await buildJS();
    copyHTML();
    
    console.log('🎉 Build completed successfully!');
    }

    build().catch(console.error);