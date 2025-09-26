(() => {
  // src/app.js
  document.addEventListener("DOMContentLoaded", function() {
    console.log("Monascho website loaded!");
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");
    if (menuToggle) {
      menuToggle.addEventListener("click", function() {
        nav.classList.toggle("active");
        this.textContent = nav.classList.contains("active") ? "\u2715" : "\u2630";
      });
    }
    const fadeElements = document.querySelectorAll(".fade-in");
    fadeElements.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      setTimeout(() => {
        el.style.transition = "all 0.6s ease";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 100);
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
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  });
})();
