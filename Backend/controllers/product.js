const Product = require('../models/product')
const asyncHandler = require('express-async-handler')

// Create Product

const createProduct = asyncHandler(async (req, res) => {

    const newProduct = new Product(req.body);
    const product = await newProduct.save();

    if (product) {
        res.status(201).json(product)
    } else {
        res.status(400)
        throw new Error('Product is not created')

    }
})

// Update Product

const updateProduct = asyncHandler(async (req, res) => {

    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });

    if (!updateProduct) {
        res.status(400)
        throw new Error('Product has been not updated')
    } else {
        res.status(201).json(updateProduct)

    }
})

// Delete Product

const deleteProduct = asyncHandler(async (req, res) => {

    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
        res.status(400)
        throw new Error('Product was not deleted')
    } else {
        res.status(201).json('Product deleted succesfully')

    }
})

// Get Product

const getProduct = asyncHandler(async (req, res) => {

    const product = await Product.findById(req.params.id);

    if (!product) {
        res.status(400)
        throw new Error('Product not found')
    } else {
        res.status(201).json(product)
    }
})

// Get All Products

const getAllProduct = asyncHandler(async (req, res) => {

    const qNew = req.query.new;
    const qCategory = req.query.category;
    const qSearch = req.query.search;
    let products;

    if (!qNew) {
        products = await Product.find().sort({ createdAt: -1 });
    } else if (qCategory) {
        products = await Product.find({ categories: { $in: [qCategory] } });
    } else if (qSearch) {
        products = await Product.find({
            $text: {
                $search: qSearch,
                $caseSensitive: false,
                $diacriticSensitive: false
            }
        });
    } else {
        products = await Product.find().sort({ createdAt: -1 });
    }
    res.status(200).json(products)
})

// Rating Product

const ratingProduct = asyncHandler(async (req, res) => {
    const { star, name, comment, postedBy } = req.body

    if (star && name && comment && postedBy) {
        const postedBy = await Product.findByIdAndUpdate(req.params.id,
            {
                $push: { ratings: { star, name, comment, postedBy } }
            }, { new: true }
        );
        res.status(201).json('Product was rated successfully')
    } else {
        res.status(400)
        throw new Error('Product was not rated successfully')
    }
})

module.exports = { createProduct, deleteProduct, updateProduct, getProduct, getAllProduct, ratingProduct }