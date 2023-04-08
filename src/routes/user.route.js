const express = require('express');
const auth = require('./../middlewares/authentication.middleware');
const {
    viewLeaderboard,
    addPoints,
    activateWallet
} = require('../controllers/user.controller');

const router = express.Router();

router.get('/leaderboard', [auth.verifyJwt], viewLeaderboard);

router.post('/add-points', [auth.verifyJwt], addPoints);

router.patch('/activate-wallet/:id', [auth.verifyJwt], activateWallet);

module.exports = router;
