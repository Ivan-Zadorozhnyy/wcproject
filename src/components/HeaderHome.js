import React from 'react';
import './HeaderHome.css';

const Header = () => {
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
                <button>Sign In</button>
            </div>
        </div>
    );
}

export default Header;
