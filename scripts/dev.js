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

    // Function to build JavaScript (VANILLA JS ONLY)
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

    // Function to create assets directories
    function createDirs() {
    const dirs = [
        path.join(__dirname, '../public/assets/css'),
        path.join(__dirname, '../public/assets/js'),
        path.join(__dirname, '../public/assets/img')
    ];
    
    let createdCount = 0;
    dirs.forEach(dir => {
        if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
        createdCount++;
        console.log(`📁 Created directory: ${dir}`);
        }
    });
    
    if (createdCount > 0) {
        console.log(`✅ Created ${createdCount} directories`);
    }
    }

    // Function to check if HTML files exist, if not create basic ones
    function checkHTMLFiles() {
    const publicDir = path.join(__dirname, '../public');
    const htmlFiles = ['index.html', 'about.html', 'products.html', 'testimonials.html', 'contact.html'];
    
    let missingFiles = [];
    
    htmlFiles.forEach(file => {
        const filePath = path.join(publicDir, file);
        if (!fs.existsSync(filePath)) {
        missingFiles.push(file);
        }
    });
    
    if (missingFiles.length > 0) {
        console.log('⚠️  Missing HTML files:', missingFiles.join(', '));
        console.log('💡 Please create HTML files manually in public/ folder');
        console.log('💡 Or run: npm run create-html to generate basic templates');
    } else {
        console.log('✅ All HTML files exist (will not be overwritten)');
    }
    }

    // Initial build
    console.log('🚀 Starting development build...');
    createDirs();
    compileSass();
    buildJS();
    checkHTMLFiles();

    // Watch for changes
    console.log('👀 Watching for changes...');
    console.log('💡 HTML files will NOT be overwritten automatically');
    console.log('💡 Manual HTML files are preserved in public/ folder');

    // Watch for SCSS changes only
    fs.watch(path.join(__dirname, '../src/styles'), { recursive: true }, (eventType, filename) => {
    if (filename && filename.endsWith('.scss')) {
        console.log(`📦 SCSS file changed: ${filename}`);
        compileSass();
    }
    });

    // Watch for JS changes only
    fs.watch(path.join(__dirname, '../src'), { recursive: true }, (eventType, filename) => {
    if (filename && filename.endsWith('.js')) {
        console.log(`📦 JavaScript file changed: ${filename}`);
        buildJS();
    }
    });