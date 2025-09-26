(() => {
  // src/app.js
  var Router = class {
    constructor() {
      this.routes = {
        "/": this.homePage,
        "/index.html": this.homePage,
        "/about.html": this.aboutPage,
        "/products.html": this.productsPage,
        "/testimonials.html": this.testimonialsPage,
        "/contact.html": this.contactPage
      };
      this.init();
    }
    init() {
      this.navigate(window.location.pathname);
      window.addEventListener("popstate", () => this.navigate(window.location.pathname));
      document.addEventListener("click", (e) => {
        if (e.target.matches("a") && e.target.getAttribute("href").startsWith("/")) {
          e.preventDefault();
          this.navigate(e.target.getAttribute("href"));
        }
      });
    }
    navigate(path) {
      const route = this.routes[path] || this.homePage;
      document.getElementById("app").innerHTML = route();
      window.history.pushState(null, null, path);
      this.initAnimations();
      window.scrollTo(0, 0);
    }
    initAnimations() {
      const elements = document.querySelectorAll(".fade-in");
      elements.forEach((el) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        setTimeout(() => {
          el.style.transition = "all 0.6s ease";
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }, 100);
      });
    }
    // Header Component
    header() {
      return `
                <header class="header">
                    <div class="container">
                        <a href="/" class="logo">Monascho</a>
                        <button class="menu-toggle">\u2630</button>
                        <nav class="nav">
                            <ul class="nav-list">
                                <li><a href="/" class="nav-link">Beranda</a></li>
                                <li><a href="/about.html" class="nav-link">Tentang</a></li>
                                <li><a href="/products.html" class="nav-link">Produk</a></li>
                                <li><a href="/testimonials.html" class="nav-link">Testimoni</a></li>
                                <li><a href="/contact.html" class="nav-link">Kontak</a></li>
                            </ul>
                        </nav>
                    </div>
                </header>
            `;
    }
    // Footer Component
    footer() {
      return `
                <footer class="footer">
                    <div class="container">
                        <div class="footer-content">
                            <div class="footer-section">
                                <h3>Monascho</h3>
                                <p>Perusahaan terdepan dalam menyediakan solusi berkualitas tinggi.</p>
                            </div>
                            <div class="footer-section">
                                <h3>Link Cepat</h3>
                                <a href="/">Beranda</a>
                                <a href="/about.html">Tentang</a>
                                <a href="/products.html">Produk</a>
                                <a href="/testimonials.html">Testimoni</a>
                                <a href="/contact.html">Kontak</a>
                            </div>
                            <div class="footer-section">
                                <h3>Kontak</h3>
                                <p>Email: info@monascho.com</p>
                                <p>Telp: (021) 1234-5678</p>
                                <p>Alamat: Jakarta, Indonesia</p>
                            </div>
                        </div>
                        <div class="footer-bottom">
                            <p>&copy; 2025 Monascho. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            `;
    }
    // Hero Component
    hero(title, subtitle, buttonText = "", buttonLink = "#") {
      return `
                <section class="hero">
                    <div class="container">
                        <h1>${title}</h1>
                        <p>${subtitle}</p>
                        ${buttonText ? `<a href="${buttonLink}" class="btn">${buttonText}</a>` : ""}
                    </div>
                </section>
            `;
    }
    // Pages
    homePage() {
      return `
                ${this.header()}
                ${this.hero(
        "Selamat Datang di Monascho",
        "Perusahaan terdepan dalam solusi berkualitas tinggi untuk bisnis Anda",
        "Pelajari Lebih Lanjut",
        "/about.html"
      )}
                <section class="section">
                    <h2 class="section-title">Mengapa Memilih Kami</h2>
                    <div class="container grid grid-3">
                        <div class="fade-in">
                            <h3>Kualitas Terjamin</h3>
                            <p>Produk melalui quality control ketat.</p>
                        </div>
                        <div class="fade-in">
                            <h3>Pengalaman 10+ Tahun</h3>
                            <p>Memahami kebutuhan pasar dengan baik.</p>
                        </div>
                        <div class="fade-in">
                            <h3>Layanan 24/7</h3>
                            <p>Customer service siap membantu kapan saja.</p>
                        </div>
                    </div>
                </section>
                ${this.footer()}
            `;
    }
    aboutPage() {
      return `
                ${this.header()}
                ${this.hero("Tentang Kami", "Sejarah dan visi misi perusahaan")}
                <section class="section">
                    <div class="container">
                        <div class="grid grid-2">
                            <div class="fade-in">
                                <h2>Sejarah Perusahaan</h2>
                                <p>Monascho didirikan pada tahun 2010 dengan visi menjadi pemimpin industri.</p>
                            </div>
                            <div class="fade-in">
                                <img src="https://via.placeholder.com/500x300" alt="Sejarah">
                            </div>
                        </div>
                    </div>
                </section>
                ${this.footer()}
            `;
    }
    productsPage() {
      return `
                ${this.header()}
                ${this.hero("Produk Kami", "Solusi terbaik untuk kebutuhan Anda")}
                <section class="section">
                    <div class="container">
                        <div class="grid grid-3">
                            ${[1, 2, 3, 4, 5, 6].map((i) => `
                                <div class="fade-in">
                                    <div class="product-card">
                                        <img src="https://via.placeholder.com/300x200" alt="Produk ${i}">
                                        <h3>Produk ${i}</h3>
                                        <p>Deskripsi produk ${i}</p>
                                    </div>
                                </div>
                            `).join("")}
                        </div>
                    </div>
                </section>
                ${this.footer()}
            `;
    }
    testimonialsPage() {
      return `
                ${this.header()}
                ${this.hero("Testimoni", "Apa kata pelanggan kami")}
                <section class="section">
                    <div class="container">
                        <div class="grid grid-3">
                            ${[1, 2, 3].map((i) => `
                                <div class="fade-in">
                                    <div class="testimonial">
                                        <p>"Pelayanan sangat memuaskan!"</p>
                                        <strong>Customer ${i}</strong>
                                    </div>
                                </div>
                            `).join("")}
                        </div>
                    </div>
                </section>
                ${this.footer()}
            `;
    }
    contactPage() {
      return `
                ${this.header()}
                ${this.hero("Hubungi Kami", "Kami siap membantu Anda")}
                <section class="section">
                    <div class="container">
                        <div class="grid grid-2">
                            <div class="fade-in">
                                <form id="contactForm">
                                    <input type="text" placeholder="Nama" required>
                                    <input type="email" placeholder="Email" required>
                                    <textarea placeholder="Pesan" required></textarea>
                                    <button type="submit" class="btn">Kirim Pesan</button>
                                </form>
                            </div>
                            <div class="fade-in">
                                <h3>Kontak Info</h3>
                                <p>Email: info@monascho.com</p>
                                <p>Telepon: (021) 1234-5678</p>
                                <p>Alamat: Jakarta, Indonesia</p>
                            </div>
                        </div>
                    </div>
                </section>
                ${this.footer()}
            `;
    }
  };
  document.addEventListener("DOMContentLoaded", () => {
    new Router();
  });
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("menu-toggle")) {
      const nav = document.querySelector(".nav");
      nav.classList.toggle("active");
      e.target.textContent = nav.classList.contains("active") ? "\u2715" : "\u2630";
    }
  });
  document.addEventListener("submit", (e) => {
    if (e.target.id === "contactForm") {
      e.preventDefault();
      alert("Terima kasih! Pesan Anda telah terkirim.");
      e.target.reset();
    }
  });
})();
