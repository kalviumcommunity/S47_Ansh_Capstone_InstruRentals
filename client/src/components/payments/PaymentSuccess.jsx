import React, { useEffect } from 'react';

const PaymentSuccess = () => {
    useEffect(() => {
        // Retrieve cart items from local storage
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

        // Check if there are items in the cart
        if (cartItems.length > 0) {
            // Generate a random ID for the order
            const orderId = Math.random().toString(36).substr(2, 9);

            // Calculate total price and create order object
            const total = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
            const items = cartItems.map(item => item.productName);
            const successfulOrder = { id: orderId, total, items };

            // Retrieve existing orders from local storage or initialize an empty array
            const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];

            // Append the successful order to existing orders
            const updatedOrders = [...storedOrders, successfulOrder];

            // Update orders in local storage
            localStorage.setItem('orders', JSON.stringify(updatedOrders));

            // Clear the cart upon successful payment
            localStorage.removeItem('cart');
        }

        // Redirect to the orders page
        window.location.href = '/orders';
    }, []);

    return (
        <div>
            <h2>Payment Success</h2>
            <p>Your payment was successful. Thank you for your purchase!</p>
            <a href="/">Back to Home</a>
        </div>
    );
};

export default PaymentSuccess;
