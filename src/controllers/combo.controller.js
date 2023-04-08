const Combo = require('../models/combo.schema');
const Product = require('../models/combo.schema');

const createCombo = async (req, res) => {
    try {
        let arrayOfIds = req.body.productIds;

        const combo = new Combo({
            name: req.body.name,
            comboPrice: req.body.comboPrice,
            originalPrice: 0,
            products: []
        });

        let ogPrice = 0;

        for (const item of arrayOfIds) {
            let product = await Product.findById(item);

            combo.products.push({
                id: product.id,
                name: product.name,
                thumbnail: product.thumbnail,
                price: product.price
            });

            ogPrice = ogPrice + product.price
        }

        combo.originalPrice = ogPrice;

        await combo.save();
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: error.message
        });
    }
};

const viewCombos = async (req, res) => {
    try {
        const combos = await Combo.find({});

        res.status(201).json({
            message: 'Combo list',
            data: {
                combos
            }
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: error.message
        });
    }
};

const viewComboById = async (req, res) => {
    try {
        const combo = await Combo.findById(req.params.id);

        res.status(201).json({
            message: 'Combo found',
            data: {
                combo
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
    createCombo,
    viewCombos,
    viewComboById
};