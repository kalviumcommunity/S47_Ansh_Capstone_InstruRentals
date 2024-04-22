// order.controller.js

import User from '../models/user.model.js';

export const createOrder = async (req, res) => {
    const { userId, items, quantity, totalPrice } = req.body;

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Create a new order
        const newOrder = {
            items,
            quantity,
            totalPrice,
            // Add more fields as needed
        };

        user.orders.push(newOrder);
        await user.save();

        return res.status(201).json({ message: "Order created successfully", order: newOrder });
    } catch (error) {
        console.error("Error creating order:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};
