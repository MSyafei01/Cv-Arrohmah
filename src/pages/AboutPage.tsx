    import Header from '../components/Header';
    import Footer from '../components/Footer';
    import VideoEmbed from '../components/VideoEmbed';

    const AboutPage = () => {
    return `
        ${Header()}
        
        <section class="hero" style="background-image: linear-gradient(135deg, #2c3e50 0%, #3498db 100%)">
        <div class="container">
            <h1>Tentang Monascho</h1>
            <p>Sejarah dan perjalanan perusahaan kami menuju kesuksesan</p>
        </div>
        </section>
        
        <section class="section">
        <div class="about-content">
            <div class="grid grid-2">
            <div class="text-content slide-in-left">
                <h2>Sejarah Kami</h2>
                <p>Monascho didirikan pada tahun 2010 dengan misi untuk menyediakan produk berkualitas tinggi dengan harga kompetitif. Dari awal yang sederhana, kami telah berkembang menjadi perusahaan terkemuka di industri kami.</p>
                <p>Dengan komitmen pada inovasi dan kualitas, kami terus mengembangkan produk dan layanan untuk memenuhi kebutuhan pasar yang selalu berubah.</p>
            </div>
            <div class="image-content slide-in-right">
                <img src="assets/img/company-history.jpg" alt="Sejarah Perusahaan">
            </div>
            </div>
        </div>
        </section>
        
        <section class="section" style="background-color: #f8f9fa;">
        <div class="container">
            <h2 class="section-title">Visi & Misi</h2>
            <div class="grid grid-2">
            <div class="fade-in">
                <h3>Visi</h3>
                <p>Menjadi perusahaan terdepan dalam industri dengan menyediakan solusi inovatif dan berkualitas tinggi yang meningkatkan kehidupan pelanggan kami.</p>
            </div>
            <div class="fade-in">
                <h3>Misi</h3>
                <p>Memberikan produk dan layanan terbaik melalui inovasi berkelanjutan, komitmen pada kualitas, dan fokus pada kepuasan pelanggan.</p>
            </div>
            </div>
        </div>
        </section>
        
        <section class="section">
        <div class="container">
            <h2 class="section-title">Video Perusahaan</h2>
            ${VideoEmbed({ videoId: 'dQw4w9WgXcQ', title: 'Profil Perusahaan Monascho' })}
        </div>
        </section>
        
        ${Footer()}
    `;
    };

    export default AboutPage;