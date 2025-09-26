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

    // Function to build JavaScript
    async function buildJS() {
    try {
        await esbuild.build({
        entryPoints: [path.join(__dirname, '../src/app.js')],
        bundle: true,
        outfile: path.join(__dirname, '../public/assets/js/app.bundle.js'),
        minify: false,
        sourcemap: true,
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

    // Initial build
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
    if (filename && (filename.endsWith('.js') || filename.endsWith('.tsx'))) {
        console.log(`📦 JavaScript file changed: ${filename}`);
        buildJS();
    }
    });