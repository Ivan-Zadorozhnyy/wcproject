import './CartPage.css';
import React from 'react';

const CartPage = ({ cart, removeFromCart, updateQuantity }) => {

    const calculateTotal = () => {
        return cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0).toFixed(2);
    };

    return (
        <div className="cart-page">
            <h1>Shopping Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul className="cart-list">
                    {cart.map(item => (
                        <li key={item.product.id}>
                            <img src={item.product.image} alt={item.product.name} width="50" height="50" />
                            <span>{item.product.name}</span>
                            <input
                                type="number"
                                value={item.quantity}
                                onChange={e => updateQuantity(item.product.id, +e.target.value)}
                            />
                            <span>${(item.product.price * item.quantity).toFixed(2)}</span>
                            <button onClick={() => removeFromCart(item.product.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
            <p>Total: ${calculateTotal()}</p>
        </div>
    );
}

export default CartPage;
