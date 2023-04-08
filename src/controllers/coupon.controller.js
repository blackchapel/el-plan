const Coupon = require('../models/coupon.schema');

const createCoupon = async (req, res) => {
    try {
        const coupon = new Coupon({
            name: req.body.name,
            code: req.body.code,
            tier: req.body.tier
        });

        await coupon.save();

        res.status(200).json({
            message: 'Coupon created',
            data: {
                coupon
            }
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: error.message
        });
    }
};

const viewCoupons = async (req, res) => {
    try {
        const coupons = await Coupon.find({});

        res.status(201).json({
            message: 'Coupon list',
            data: {
                coupons
            }
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: error.message
        });
    }
};

const viewCouponById = async (req, res) => {
    try {
        const coupon = await Coupon.findById(req.params.id);

        res.status(201).json({
            message: 'Coupon found',
            data: {
                coupon
            }
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: error.message
        });
    }
};

const deleteCoupon = async (req, res) => {
    try {
        const coupon = await Coupon.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: 'Coupon deleted'
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    createCoupon,
    viewCoupons,
    viewCouponById,
    deleteCoupon
};
