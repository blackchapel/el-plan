const express = require('express');
const auth = require('./../middlewares/authentication.middleware');
const {
    viewLeaderboard,
    addPoints
} = require('../controllers/user.controller');

const router = express.Router();

router.get('/leaderboard', [auth.verifyJwt], viewLeaderboard);

router.post('/add-points', [auth.verifyJwt], addPoints);

module.exports = router;
