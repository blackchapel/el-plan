const mongoose = require('mongoose');

const comboSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    originalPrice: {
        type: Number
    },
    comboPrice: {
        type: Number
    },
    products: {
        type: [
            {
                id: { type: String },
                name: { type: String },
                thumbnail: { type: String },
                price: { type: Number }
            }
        ]
    }
});

const Combo = mongoose.model('combo', comboSchema);

module.exports = Combo;
