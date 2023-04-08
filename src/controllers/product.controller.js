const Product = require('../models/product.schema');
const { cloudinary } = require('./../utilities/utils');
const fs = require('fs');

const createProduct = async (req, res) => {
    try {
        let url;
        if (req.file) {
            url = await cloudinary.uploader.upload(req.file.path, {
                public_id: `elplan/product/${req.file.filename}`
            });
        }
        const product = new Product({
            name: req.body.name,
            thumbnail: url ? url.url : undefined,
            category: req.body.category,
            price: req.body.price,
            description: req.body.description ? req.body.description : undefined
        });
        await product.save();

        fs.unlinkSync(req.file.path);

        res.status(201).json({
            message: 'Product created',
            data: {
                product
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message
        });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: 'Product deleted'
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: error.message
        });
    }
};

const viewProducts = async (req, res) => {
    try {
        const products = await Product.find({});

        res.status(201).json({
            message: 'Product list',
            data: {
                products
            }
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: error.message
        });
    }
};

const viewProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        res.status(201).json({
            message: 'Product found',
            data: {
                product
            }
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: error.message
        });
    }
};

const searchProducts = async (req, res) => {
    try {
        const search = req.query.search;
        const queryObj = {};

        if (
            search &&
            (search !== 'undefined' || search !== '' || search !== ' ')
        ) {
            queryObj['$or'] = [
                { category: { $regex: search, $options: 'i' } },
                { name: { $regex: search, $options: 'i' } }
            ];

            const results = await Product.find(queryObj, {
                _id: 1,
                name: 1
            });

            res.status(200).json({
                message: 'products searched list',
                data: {
                    results
                }
            });
        } else {
            res.status(404).json({
                message: 'enter search text'
            });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    createProduct,
    deleteProduct,
    viewProducts,
    viewProductById,
    searchProducts
};
