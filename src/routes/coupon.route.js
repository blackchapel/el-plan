const express = require('express');
const auth = require('./../middlewares/authentication.middleware');
const {
    createCoupon,
    viewCoupons,
    viewCouponById,
    deleteCoupon,
    spinTheWheel
} = require('./../controllers/coupon.controller');

const router = express.Router();

router.post('/', [auth.verifyJwt], createCoupon);

router.get('/', [auth.verifyJwt], viewCoupons);

router.get('/:id', [auth.verifyJwt], viewCouponById);

router.delete('/:id', [auth.verifyJwt], deleteCoupon);

router.get('/noob/spin-the-wheel', [auth.verifyJwt], spinTheWheel);

module.exports = router;
