import React from 'react';
import '../components/Products.css'; // Import the CSS file for styling

const ProductCard = ({ shoe }) => {
    return (
        <div className="product-card">
            <img src={shoe.image} alt={shoe.name} className="product-image" />
            <div className="product-info">
                <h3 className="product-name">{shoe.name}</h3>
                <p className="product-description">{shoe.description}</p>
                <p className="product-price">${shoe.price.toFixed(2)}</p>
            </div>
        </div>
    );
}

const Products = () => {
    // Sample shoe data (replace with actual data)
    const shoes = [
        {
            "id": 1,
            "name": "Classic Sneakers",
            "description": "Timeless design meets modern comfort. These classic sneakers are perfect for everyday wear.",
            "image": "https://neemans.com/cdn/shop/products/ND-WebsiteProductConceptImages_1600x1000px_24a_1_800x.jpg?v=1690983729",
            "price": 49.99,
            "category": "Sneakers"
        },
        {
            "id": 2,
            "name": "Running Shoes",
            "description": "Enhance your running experience with these lightweight and breathable running shoes.",
            "image": "https://www.shutterstock.com/image-photo/hologram-shoes-sports-fitness-run-600nw-2240460409.jpg",
            "price": 69.99,
            "category": "Running"
        },
        {
            "id": 3,
            "name": "Casual Loafers",
            "description": "Effortlessly stylish and comfortable, these loafers are perfect for any casual occasion.",
            "image": "https://d1ixo36kppfedg.cloudfront.net/faceview/g1j/cc/d3e/bb/imgs/1595665944951_21_21_51.jpg",
            "price": 39.99,
            "category": "Loafers"
        },
        {
            "id": 4,
            "name": "Formal Dress Shoes",
            "description": "Elevate your formal attire with these sleek and sophisticated dress shoes.",
            "image": "https://cdn.pixabay.com/photo/2022/10/08/17/04/shoes-7507418_1280.jpg",
            "price": 89.99,
            "category": "Formal"
        },
        {
            "id": 5,
            "name": "Hiking Boots",
            "description": "Conquer any trail with confidence in these durable and supportive hiking boots.",
            "image": "https://assets.newatlas.com/dims4/default/8e9ef62/2147483647/strip/true/crop/895x597+0+28/resize/1200x800!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2F19%2F0d%2F5d9d224a4a8a9d41c898cdd062af%2Fscreen-shot-2022-07-06-at-3.12.37%20PM.png",
            "price": 79.99,
            "category": "Hiking"
        },
        {
            "id": 6,
            "name": "Sandals",
            "description": "Stay cool and comfortable all summer long with these stylish and versatile sandals.",
            "image": "https://t3.ftcdn.net/jpg/06/32/01/70/360_F_632017085_K2rclDxdtvxDVfAtDeR6VZRiJfdK3Igx.jpg",
            "price": 29.99,
            "category": "Sandals"
        },
        {
            "id": 7,
            "name": "Winter Boots",
            "description": "Brave the cold in style with these warm and durable winter boots, designed to keep your feet cozy in any weather.",
            "image": "https://cdn.thewirecutter.com/wp-content/media/2024/02/winter-boots-2048px-1000.jpg?auto=webp&quality=75&width=1024",
            "price": 99.99,
            "category": "Boots"
        },
        
        {
            "id": 8,
            "name": "Oxford Shoes",
            "description": "Achieve a classic and polished look with these sophisticated oxford shoes, ideal for formal occasions or office wear.",
            "image": "https://images.ctfassets.net/3s5io6mnxfqz/6YSk88HT4b663CZXDOwZQl/098ec8c261f6839db3459bdb274ac85c/AdobeStock_333664424.jpeg",
            "price": 79.99,
            "category": "Formal"
        },
        {
            "id": 9,
            "name": "Athletic Sneakers",
            "description": "Optimize your performance with these high-performance athletic sneakers, engineered for maximum comfort and support during workouts.",
            "image": "https://media.gq-magazine.co.uk/photos/605b09fd14e0d3a874057714/16:9/w_2560%2Cc_limit/23112020_ZA_HP.jpg",
            "price": 79.99,
            "category": "Athletic"
        }
    ];

    return (
        <section className="products-section" id='products-section'>
            <div className="container">
                <h2>Our Products</h2>
                <div className="product-grid">
                    {shoes.map(shoe => (
                        <ProductCard key={shoe.id} shoe={shoe} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Products;
