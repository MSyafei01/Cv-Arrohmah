/*    import Header from '../components/Header';
    import Footer from '../components/Footer';

    const ContactPage = () => {
    return `
        ${Header()}
        
        <section class="hero" style="background-image: linear-gradient(135deg, #2c3e50 0%, #3498db 100%)">
        <div class="container">
            <h1>Hubungi Kami</h1>
            <p>Kami siap membantu Anda dengan solusi terbaik</p>
        </div>
        </section>
        
        <section class="section">
        <div class="contact-info">
            <div class="grid grid-2">
            <div class="contact-form slide-in-left">
                <h2>Kirim Pesan</h2>
                <form id="contactForm">
                <div class="form-group">
                    <label for="name">Nama Lengkap</label>
                    <input type="text" id="name" name="name" required>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="subject">Subjek</label>
                    <input type="text" id="subject" name="subject" required>
                </div>
                <div class="form-group">
                    <label for="message">Pesan</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit" class="btn">Kirim Pesan</button>
                </form>
            </div>
            
            <div class="contact-details slide-in-right">
                <h2>Informasi Kontak</h2>
                <div class="contact-item">
                <i>📍</i>
                <div>
                    <h3>Alamat</h3>
                    <p>Jl. Contoh No. 123<br>Jakarta 12345, Indonesia</p>
                </div>
                </div>
                
                <div class="contact-item">
                <i>📞</i>
                <div>
                    <h3>Telepon</h3>
                    <p>(021) 1234-5678</p>
                </div>
                </div>
                
                <div class="contact-item">
                <i>✉️</i>
                <div>
                    <h3>Email</h3>
                    <p>info@monascho.com</p>
                </div>
                </div>
                
                <div class="contact-item">
                <i>🕒</i>
                <div>
                    <h3>Jam Operasional</h3>
                    <p>Senin - Jumat: 08:00 - 17:00<br>Sabtu: 08:00 - 12:00</p>
                </div>
                </div>
                
                <div class="social-links">
                <a href="#" aria-label="Facebook">FB</a>
                <a href="https://www.instagram.com/monascho_jember_/?igshid=YmMyMTA2M2Y%3D" aria-label="Instagram">IG</a>
                <a href="https://www.youtube.com/channel/UCiuLcffiTGHFTwkIwJ0umkw" aria-label="Youtube">YT</a>
                <a href="https://www.tiktok.com/@monascho" aria-label="Tiktok">TK</a>
                </div>
            </div>
            </div>
        </div>
        </section>
        
        <section class="section" style="padding-top: 0;">
        <div class="container">
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Nucleus%20Foremost!5e0!3m2!1sen!2sid!4v1603863826664!5m2!1sen!2sid" 
            width="100%" 
            height="400" 
            style="border:0; border-radius: 8px;" 
            allowfullscreen="" 
            aria-hidden="false" 
            tabindex="0">
            </iframe>
        </div>
        </section>
        
        ${Footer()}
        
        <script>
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Terima kasih! Pesan Anda telah terkirim. Kami akan menghubungi Anda segera.');
            this.reset();
        });
        </script>
    `;
    };

    export default ContactPage;
    */