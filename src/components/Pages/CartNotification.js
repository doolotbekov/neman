import React, {useState} from 'react';

const CartNotification = () => {
    // eslint-disable-next-line no-undef
    const [cartCount, setCartCount] = useState(0);
    const updateCartCount = (count) => {
        setCartCount(count);
    };
    return (
        <div id="cart-icon rounded-full bg-red">
            <span id="cart-count">{cartCount}</span>
        </div>
    );
};

export default CartNotification;