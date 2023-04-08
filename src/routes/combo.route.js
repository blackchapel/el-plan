const express = require('express');
const auth = require('./../middlewares/authentication.middleware');
const {
    createCombo,
    viewCombos,
    viewComboById,
    deleteCombo
} = require('./../controllers/combo.controller');

const router = express.Router();

router.post('/', [auth.verifyJwt], createCombo);

router.get('/', [auth.verifyJwt], viewCombos);

router.get('/:id', [auth.verifyJwt], viewComboById);

router.delete('/:id', [auth.verifyJwt], deleteCombo);

module.exports = router;
