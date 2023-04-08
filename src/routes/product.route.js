const express = require('express');
const auth = require('./../middlewares/authentication.middleware');
const upload = require('./../configs/multer');
const {
    createProduct,
    deleteProduct,
    viewProducts,
    viewProductById,
    searchProducts
} = require('../controllers/product.controller');

const router = express.Router();

router.post('/', [auth.verifyJwt], upload.single('thumbnail'), createProduct);

router.delete('/:id', [auth.verifyJwt], deleteProduct);

router.get('/', [auth.verifyJwt], viewProducts);

router.get('/:id', [auth.verifyJwt], viewProductById);

router.get('/search', [auth.verifyJwt], searchProducts);

module.exports = router;
