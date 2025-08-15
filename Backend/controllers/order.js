const Order = require('../models/order')
const asyncHandler = require('express-async-handler')

// Create Order

const createOrder = asyncHandler(async (req, res) => {

    const newOrder = await Order(req.body);
    const order = newOrder.save();

    if (!order) {
        res.status(400)
        throw new Error('Order is not created')
    } else {
        res.status(201).json(Order)
    }
})

// Update Order

const updateOrder = asyncHandler(async (req, res) => {

    const updatedOrder = await Order.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });

    if (!updateOrder) {
        res.status(400)
        throw new Error('Order was not updated')
    } else {
        res.status(201).json(updateOrder)
    }
})

// Delete Order

const deleteOrder = asyncHandler(async (req, res) => {

    const order = await Order.findByIdAndDelete(req.params.id);

    if (!order) {
        res.status(400)
        throw new Error('Order was not deleted successfully')
    } else {
        res.status(201).json(order)
    }
})

// Get User Order

const getUserOrder = asyncHandler(async (req, res) => {

    const orders = await Order.find({ userId: req.params.id }).sort({ createdAt: -1 });

    if (!orders) {
        res.status(400)
        throw new Error('no order was found or something went wrong')
    } else {
        res.status(200).json(orders)
    }
})

// Get All Orders

const getAllOrders = asyncHandler(async (req, res) => {

    const orders = await Order.find().sort({ createdAt: -1 });

    if (!orders) {
        res.status(400)
        throw new Error('no order was found or something went wrong')
    } else {
        res.status(200).json(orders)
    }
})

module.exports = { createOrder, updateOrder, deleteOrder, getUserOrder, getAllOrders }