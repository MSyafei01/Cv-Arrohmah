    (() => {
    // src/app.js
    console.log("\u{1F680} Monascho website loaded successfully!");
    document.addEventListener("DOMContentLoaded", function() {
        console.log("\u2705 DOM fully loaded");
        const menuToggle = document.querySelector(".menu-toggle");
        const nav = document.querySelector(".nav");
        if (menuToggle && nav) {
        menuToggle.addEventListener("click", function() {
            nav.classList.toggle("active");
            this.textContent = nav.classList.contains("active") ? "\u2715" : "\u2630";
        });
        console.log("\u2705 Mobile menu initialized");
        }
        const animateElements = document.querySelectorAll(".fade-in, .slide-in");
        animateElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }, index * 200);
        });
        const contactForm = document.getElementById("contactForm");
        if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();
            alert("Terima kasih! Pesan Anda telah terkirim.");
            this.reset();
        });
        }
        window.addEventListener("scroll", function() {
        const header = document.querySelector(".header");
        if (header) {
            if (window.scrollY > 50) {
            header.classList.add("scrolled");
            } else {
            header.classList.remove("scrolled");
            }
        }
        });
        console.log("\u2705 All JavaScript functionality loaded");
    });
    setTimeout(() => {
        if (document.body.innerHTML.trim() === "") {
        console.log("\u26A0\uFE0F Body is empty, adding fallback content");
        document.body.innerHTML = `
                <div style="padding: 50px; text-align: center;">
                    <h1>Monascho Website</h1>
                    <p>Website sedang dalam pengembangan</p>
                    <a href="index.html">Kembali ke Home</a>
                </div>
            `;
        }
    }, 1e3);
    })();
