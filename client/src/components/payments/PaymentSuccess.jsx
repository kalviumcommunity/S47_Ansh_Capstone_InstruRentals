import React from 'react';
import { Link } from 'react-router-dom';

const PaymentSuccess = () => {
    return (
        <div>
            <h2>Payment Success</h2>
            <p>Your payment was successful. Thank you for your purchase!</p>
            <Link to="/">Back to Home</Link>
        </div>
    );
};

export default PaymentSuccess;
