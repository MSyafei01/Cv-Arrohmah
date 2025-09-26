/*    import Header from '../components/Header';
    import Footer from '../components/Footer';

    const TestimonialsPage = () => {
    const testimonials = [
        {
        id: 1,
        text: "Produk Monascho sangat berkualitas dan pelayanannya memuaskan. Sangat recommended!",
        author: "Budi Santoso",
        position: "Direktur, PT. Contoh"
        },
        {
        id: 2,
        text: "Kerjasama dengan Monascho memberikan hasil yang luar biasa untuk bisnis kami.",
        author: "Sari Dewi",
        position: "Manager, CV. Contoh Lain"
        },
        {
        id: 3,
        text: "Tim Monascho profesional dan responsif. Solusi yang mereka tawarkan tepat sasaran.",
        author: "Ahmad Fauzi",
        position: "Owner, Toko Contoh"
        }
    ];

    return `
        ${Header()}
        
        <section class="hero" style="background-image: linear-gradient(135deg, #2c3e50 0%, #3498db 100%)">
        <div class="container">
            <h1>Testimoni Pelanggan</h1>
            <p>Apa kata mereka tentang pengalaman bekerja sama dengan kami</p>
        </div>
        </section>
        
        <section class="section">
        <div class="testimonials-slider">
            <div class="grid grid-3">
            ${testimonials.map(testimonial => `
                <div class="testimonial fade-in">
                <div class="testimonial-text">
                    ${testimonial.text}
                </div>
                <div class="testimonial-author">${testimonial.author}</div>
                <div class="testimonial-position">${testimonial.position}</div>
                </div>
            `).join('')}
            </div>
        </div>
        </section>
        
        ${Footer()}
    `;
    };

    export default TestimonialsPage;

    */