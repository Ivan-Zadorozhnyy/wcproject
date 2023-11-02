import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './ProductPage.css';
import { useCart } from '../components/CartContext';

const ProductPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const { addToCart } = useCart();

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 1000,
            easing: 'ease-in-out',
        });

        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/api/products/${id}`);
                setProduct(response.data);
            } catch (error) {
                console.error('Error fetching product data', error);
            }
        };

        fetchProduct();
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    const handleAddToCart = () => {
        addToCart(product, 1);
        alert(`${product.name} has been added to cart.`);
    };

    return (
        <div className="product-page">
            <div className="product-image" data-aos="fade-right">
                <img src={product.image} alt={product.name} />
            </div>
            <div className="product-details" data-aos="fade-left">
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
                <button className="add-to-cart-btn" onClick={handleAddToCart}>Add to Cart</button>
                <button className="cart-btn" onClick={() => navigate('/cart')}>
                    🛒 Go to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductPage;
