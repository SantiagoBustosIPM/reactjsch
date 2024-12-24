import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // Librería react-icons

const CartWidget = () => {
    return (
        <div className="cart-widget" style={{ display: 'flex', alignItems: 'center' }}>
            <FaShoppingCart size={24} />
            <span style={{ marginLeft: '8px', backgroundColor: '#dc3545', color: 'white', borderRadius: '50%', padding: '4px 8px' }}>
                5
            </span>
        </div>
    );
};

export default CartWidget;
