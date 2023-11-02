import React, { useState, useEffect } from 'react';
import './HomePage.css';
import Header from '../components/HeaderHome';
import ProductCard from '../components/ProductCard';
import CountDownTimer from '../components/CountDownTimer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useCart } from '../components/CartContext';

const products = [
    { id: 1, name: 'Lavender Honey', description: 'A fragrant honey with a delicate floral note, renowned for its soothing and relaxing qualities.', image: 'https://ashevillebeecharmer.com/wp-content/uploads/lavender-infused-honey.jpg', price: '24.99' },
    { id: 2, name: 'Manuka Honey', description: 'A unique honey with potent antibacterial properties, sourced from New Zealands native Manuka tree.', image: 'https://melitahoneyfarm.com.au/cdn/shop/products/manuka-propolis-500_1445x.jpg?v=1685844573', price: '19.99' },
    { id: 3, name: 'Buckwheat Honey', description: 'A robust, dark-hued honey with a molasses-like flavor, known for its antioxidants and immune-boosting properties.', image: 'https://ashevillebeecharmer.com/wp-content/uploads/buckwheat-honey-16oz.jpg', price: '14.99' },
];

const HomePage = () => {
    const { cart } = useCart();

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: false,
        });
    }, []);

    return (
        <div className="home-page">
            <Header />
            <div className="slogan-section" data-aos="fade-in">
                <h1>Nature's Sweetest Gift</h1>
                <button className="shop-collection-btn">Shop Collection</button>
                <div className="stats" data-aos="fade-up">
                    <div className="stat"><strong>10K</strong><p>Happy Customer</p></div>
                    <div className="stat"><strong>10</strong><p>Highest Quality Items</p></div>
                    <div className="stat"><strong>30% OFF</strong><p>ALL PRODUCTS</p></div>
                </div>
                <CountDownTimer />
            </div>
            <div className="products">
                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        data-aos="fade-up"
                        data-aos-delay={products.indexOf(product) * 100}
                    />
                ))}
            </div>
        </div>
    );
}

export default HomePage;
