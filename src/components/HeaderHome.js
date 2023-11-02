import React from 'react';
import './HeaderHome.css';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const { cart } = useCart();
    const navigate = useNavigate();

    return (
        <div className="header">
            <div className="header-logo">Honey Shop</div>
            <div className="header-links">
                <button>About Us</button>
                <button>Contact</button>
                <button>Terms of Service</button>
                <button>Privacy Policy</button>
            </div>
            <div className="header-auth">
                <button>Sign Up</button>
                <button className="cart-btn" onClick={() => navigate('/cart')}>
                    🛒  ({cart.length})
                </button>
                <button>Sign In</button>
            </div>
        </div>
    );
}

export default Header;
