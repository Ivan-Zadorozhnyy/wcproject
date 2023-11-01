import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    const navigate = useNavigate();

    const handleMoreDetailsClick = () => {
        navigate(`/product/${product.id}`);
    }

    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <button onClick={handleMoreDetailsClick}>More Details</button>
        </div>
    );
}

export default ProductCard;

