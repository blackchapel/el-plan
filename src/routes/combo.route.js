const express = require('express');
const auth = require('./../middlewares/authentication.middleware');
const {
    createCombo,
    viewCombos,
    viewComboById
} = require('./../controllers/combo.controller');

const router = express.Router();

router.post('/', [auth.verifyJwt], createCombo);

router.get('/', [auth.verifyJwt], viewCombos);

router.get('/:id', [auth.verifyJwt], viewComboById);

module.exports = router;