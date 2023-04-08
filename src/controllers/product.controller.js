const Product = require('../models/product.schema');

const createProduct = async (req, res) => {
    try {
        const product = new Product({
            name: req.body.name,
            thumbnail: 'to-be-done',
            category: req.body.category,
            price: req.body.price,
            description: req.body.description ? req.body.description : undefined
        });

        await product.save();

        res.status(201).json({
            message: 'Product created',
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

module.exports = {
    createProduct,
    deleteProduct,
    viewProducts,
    viewProductById
};
