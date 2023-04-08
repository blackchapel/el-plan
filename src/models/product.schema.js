const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        thumbnail: {
            type: String
        },
        category: {
            type: String,
            enum: [
                'hotCoffee',
                'coldCoffee',
                'coffeeCoolers',
                'notCoffee',
                'manualBrew'
            ]
        },
        price: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: false
        }
    },
    { timestamps: true }
);

const Product = mongoose.model('product', productSchema);

module.exports = Product;
