import React from 'react';
import './HomePage.css';
import Header from '../components/HeaderHome';
import ProductCard from '../components/ProductCard';
import CountDownTimer from '../components/CountDownTimer';


const products = [
    { id: 1, name: 'Lavender Honey', description: 'A sweet and fragrant honey.', image: 'path_to_your_image/honey-sample.jpg' },
    { id: 2, name: 'Manuka Honey', description: 'A honey with healing properties.', image: 'path_to_your_image/honey-sample.jpg' },
    // Add more products
];

const HomePage = () => {
    return (
        <div className="home-page">
            <Header />
            <div className="slogan-section">
                <h1>Nature's Sweetest Gift</h1>
                <button className="shop-collection-btn">Shop Collection</button>
                <div className="stats-section">
                    <div><strong>10K</strong><p>Happy Customer</p></div>
                    <div><strong>10</strong><p>Highest Quality Items</p></div>
                    <div><strong>30% OFF</strong><p>ALL PRODUCTS</p></div>
                </div>
                <CountDownTimer />
            </div>
            <div className="products-section">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default HomePage;
