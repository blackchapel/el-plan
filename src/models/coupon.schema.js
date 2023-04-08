const mongoose = require('mongoose');

const couponSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    code: {
        type: String,
        required: true
    },
    tier: {
        type: String,
        enum: ['silver', 'gold', 'platinum']
    }
});

const Coupon = mongoose.model('coupon', couponSchema);

module.exports = Coupon;
