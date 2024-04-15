import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const currency = "INR";
    const receiptId = "qwsaql";
    const navigate = useNavigate()

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

      // Call your server to create a payment order
      try {
          const res = await axios.post("http://localhost:3000/api/payment/order", { amount, currency, receipt: receiptId });
          const orderId = res.data.id;

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
        <div>
            <h2>Cart</h2>
            <ul>
                {cartItems.map((item, index) => (
                    <li key={index}>
                        Product Name: {item.productName}, Price: {item.price}, 
                        Quantity: 
                        <button onClick={() => updateQuantity(index, item.quantity - 1)}>-</button>
                        {item.quantity}
                        <button onClick={() => updateQuantity(index, item.quantity + 1)}>+</button>
                        <button onClick={() => removeItem(index)}>Remove</button>
                    </li>
                ))}
            </ul>
            <p>Total Price: {totalPrice}</p>
            <button onClick={handleCheckout}>Checkout</button>
        </div>
    );
};

export default Cart;
