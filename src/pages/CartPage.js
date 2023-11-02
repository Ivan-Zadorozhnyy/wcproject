import './CartPage.css';
import React from 'react';
import PropTypes from 'prop-types';

const CartPage = ({ cart, removeFromCart, updateQuantity }) => {

    const calculateTotal = () => {
        if (!cart || !Array.isArray(cart)) return "0.00";
        return cart.reduce((acc, item) => acc + (item.product?.price || 0) * item.quantity, 0).toFixed(2);
    };

    return (
        <div className="cart-page">
            <h1>Shopping Cart</h1>
            {(!cart || cart.length === 0) ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul className="cart-list">
                    {cart.map(item => (
                        <li key={item.product?.id || ''}>
                            <img src={item.product?.image || ''} alt={item.product?.name || ''} width="50" height="50" />
                            <span>{item.product?.name || ''}</span>
                            <input
                                type="number"
                                value={item.quantity}
                                onChange={e => updateQuantity(item.product?.id || '', Math.max(1, +e.target.value))}
                                min="1"
                            />
                            <span>${(item.product?.price || 0 * item.quantity).toFixed(2)}</span>
                            <button onClick={() => removeFromCart(item.product?.id || '')} aria-label={`Remove ${item.product?.name || ''} from cart`}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
            <p>Total: ${calculateTotal()}</p>
        </div>
    );
}

CartPage.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            id: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
        }).isRequired,
        quantity: PropTypes.number.isRequired,
    })),
    removeFromCart: PropTypes.func.isRequired,
    updateQuantity: PropTypes.func.isRequired,
};

export default CartPage;
