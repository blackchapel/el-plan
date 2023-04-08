const express = require('express');
const auth = require('./../middlewares/authentication.middleware');

const {
    createProduct,
    deleteProduct,
    viewProducts,
    viewProductById,
    searchProducts
} = require('../controllers/product.controller');

const router = express.Router();

router.post('/create', [auth.verifyJwt], createProduct);

router.delete('/:id', [auth.verifyJwt], deleteProduct);

router.get('/', [auth.verifyJwt], viewProducts);

router.get('/:id', [auth.verifyJwt], viewProductById);

router.get('/search', [auth.verifyJwt], searchProducts);

module.exports = router;
