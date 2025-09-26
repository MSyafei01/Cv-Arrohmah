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
        
        <!-- Konten lainnya -->
        
        <section class="section">
        <div class="container">
            <h2 class="section-title">Video Perusahaan</h2>
            ${VideoEmbed({ 
            videoId: 'dQw4w9WgXcQ', 
            title: 'Profil Perusahaan Monascho',
            width: '100%',
            height: '400'
            })}
        </div>
        </section>
        
        ${Footer()}
    `;
    };

    export default AboutPage;