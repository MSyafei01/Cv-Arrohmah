    const Hero = ({ title, subtitle, buttonText, buttonLink, backgroundImage }) => {
    return `
        <section class="hero" style="background-image: url('${backgroundImage}')">
        <div class="container">
            <h1>${title}</h1>
            <p>${subtitle}</p>
            ${buttonText ? `<a href="${buttonLink}" class="btn">${buttonText}</a>` : ''}
        </div>
        </section>
    `;
    };

    export default Hero;