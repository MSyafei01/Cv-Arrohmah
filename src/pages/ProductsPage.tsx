/*    import Header from '../components/Header';
    import Footer from '../components/Footer';

    const ProductsPage = () => {
    const products = [
        {
        id: 1,
        name: "Produk A",
        description: "Deskripsi singkat tentang Produk A dan keunggulannya.",
        image: "assets/img/produk1.jpg"
        },
        {
        id: 2,
        name: "Produk B",
        description: "Deskripsi singkat tentang Produk B dan keunggulannya.",
        image: "assets/img/produk1.jpg"
        },
        {
        id: 3,
        name: "Produk C",
        description: "Deskripsi singkat tentang Produk C dan keunggulannya.",
        image: "assets/img/produk1.jpg"
        },
        {
        id: 4,
        name: "Produk D",
        description: "Deskripsi singkat tentang Produk D dan keunggulannya.",
        image: "assets/img/produk1.jpg"
        },
        {
        id: 5,
        name: "Produk E",
        description: "Deskripsi singkat tentang Produk E dan keunggulannya.",
        image: "assets/img/produk1.jpg"
        },
        {
        id: 6,
        name: "Produk F",
        description: "Deskripsi singkat tentang Produk F dan keunggulannya.",
        image: "assets/img/produk1.jpg"
        }
    ];

    return `
        ${Header()}
        
        <section class="hero" style="background-image: linear-gradient(135deg, #2c3e50 0%, #3498db 100%)">
        <div class="container">
            <h1>Produk Kami</h1>
            <p>Berbagai produk unggulan dengan kualitas terbaik</p>
        </div>
        </section>
        
        <section class="section">
        <div class="products-grid">
            <div class="grid grid-3">
            ${products.map(product => `
                <div class="product-card fade-in">
                <div class="product-card-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-card-content">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <a href="#" class="btn" style="display: inline-block; padding: 8px 20px;">Detail</a>
                </div>
                </div>
            `).join('')}
            </div>
        </div>
        </section>
        
        ${Footer()}
    `;
    };

    export default ProductsPage;
    */