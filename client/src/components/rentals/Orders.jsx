import React, { useEffect, useState } from 'react';
import styles from './orders.module.css';

const Orders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // Retrieve orders from local storage
        const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
        setOrders(storedOrders);
    }, []);

    return (
        <div className={styles.ordersContainer}>
            <h2 className={styles.ordersHeader}>Orders</h2>
            {orders.length > 0 ? (
                <ul className={styles.orderList}>
                    {orders.map(order => (
                        <li key={order.id} className={styles.orderItem}>
                            <h3 className={styles.orderId}>Order ID: {order.id}</h3>
                            <p className={styles.orderTotal}>Total: Rs.{order.total.toFixed(2)}</p>
                            <p className={styles.orderItems}>Items:</p>
                            <ul>
                                {order.items.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No orders yet.</p>
            )}
            <a href="/" className={styles.backToHome}>Back to Home</a>
        </div>
    );
};

export default Orders;
