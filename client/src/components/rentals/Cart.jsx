import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './cart.module.css';
import NavigationBar from '../NavigationBar';
import Footer from '../Footer';
import { useSelector } from 'react-redux';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const currency = "INR";
    const receiptId = "qwsaql";
    const navigate = useNavigate();
    const { currentUser} = useSelector((state) => state.user);
    useEffect(() => {
        // Retrieve cart items from local storage
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(storedCart);
    }, []);

    const updateQuantity = (index, newQuantity) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems[index].quantity = newQuantity;
        setCartItems(updatedCartItems);
        localStorage.setItem('cart', JSON.stringify(updatedCartItems));
    };

    const removeItem = (index) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems.splice(index, 1);
        setCartItems(updatedCartItems);
        localStorage.setItem('cart', JSON.stringify(updatedCartItems));
    };

    const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

    const handleCheckout = async () => {
        const amount = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
        const userId = currentUser.data._id

        // Call your server to create a payment order
        try {
            const res = await axios.post("http://localhost:3000/api/payment/order", { amount, currency, receipt: receiptId });
            const orderId = res.data.id;
            const items = cartItems.map(item => Math.random().toString(36).substr(2, 9));
 // Assuming each item has an '_id' field representing its ObjectId
            const quantity = cartItems.map(item => item.quantity);
            // Redirect to the payment gateway with the order ID
            const options = {
                "key": "rzp_test_jUaTi9NhyMcCla",
                amount,
                currency,
                "name": "InstruRentals",
                "description": "Test Transaction",
                "order_id": orderId,
                "handler": async function (response) {
                    // Handle payment success
                    const validated = await axios.post("http://localhost:3000/api/payment/order/validate", response);
                    console.log(validated.data);


                    await axios.post("http://localhost:3000/api/user/orders", {
                        userId,
                        items,
                        quantity,
                        totalPrice
                    });
                    // Optionally, you can redirect the user to a success page
                    navigate('/payment-success');
                },
                "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
                    "name": "Ansh Sharma", //your customer's name
                    "email": "ansh.sharma@gmail.com",
                    "contact": "9000900000"  //Provide the customer's phone number for better conversion rates 
                },
                "notes": {
                    "address": "Razorpay Corporate Office"
                },
                "theme": {
                    "color": "#3399cc"
                }
            };
            const rzp1 = new window.Razorpay(options);
            rzp1.open();
        } catch (error) {
            console.error("Error during checkout:", error);
            // Optionally, handle the error (e.g., show an error message to the user)
        }
    };

    return (
        <div className={styles.main}>
            <NavigationBar />
            <div className={styles.cart}>
                <h2 className={styles.header}>Your Cart</h2>
                <div className={styles.products}>
                    <ul className={styles.ul}>
                        {cartItems.map((item, index) => (
                            <li key={index} className={styles.product}>
                                <div className={styles.itemDetails}>
                                    <div className={styles.img}>
                                        <img src={item.image} alt="" />
                                    </div>
                                    <p className={styles.productName}>{item.productName}</p>
                                    <p className={styles.price}>Price: {item.price}</p>
                                </div>
                                <div className={styles.quantityControls}>
                                    <button className={styles.quantityButton} onClick={() => updateQuantity(index, item.quantity - 1)}>-</button>
                                    <span className={styles.quantity}>{item.quantity}</span>
                                    <button className={styles.quantityButton} onClick={() => updateQuantity(index, item.quantity + 1)}>+</button>
                                    <button className={styles.removeButton} onClick={() => removeItem(index)}>Remove</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <p className={styles.totalPrice}>Total Price: {totalPrice}</p>
                <button className={styles.checkoutButton} onClick={handleCheckout}>Checkout</button>
            </div>
            <Footer />
        </div>
    );
};

export default Cart;
