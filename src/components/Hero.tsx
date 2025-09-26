    interface HeroProps {
    title: string;
    subtitle: string;
    buttonText?: string;
    buttonLink?: string;
    backgroundImage?: string;
    }

    const Hero = ({ title, subtitle, buttonText, buttonLink, backgroundImage }: HeroProps) => {
    return `
        <section class="hero" style="${backgroundImage ? `background-image: url('${backgroundImage}')` : 'background: linear-gradient(135deg, #2c3e50 0%, #3498db 100%)'}">
        <div class="container">
            <h1>${title}</h1>
            <p>${subtitle}</p>
            ${buttonText ? `<a href="${buttonLink || '#'}" class="btn">${buttonText}</a>` : ''}
        </div>
        </section>
    `;
    };

    export default Hero;