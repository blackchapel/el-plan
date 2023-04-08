const Combo = require('../models/combo.schema');
const Product = require('../models/combo.schema');

const createCombo = async (req, res) => {
    try {
        let arrayOfIds = req.body.productIds;
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
