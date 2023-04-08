const express = require('express');
const auth = require('./../middlewares/authentication.middleware');
const {
    createEvent,
    viewEvents,
    viewEventById,
    deleteEvent
} = require('./../controllers/event.controller');

const router = express.Router();

router.post('/', [auth.verifyJwt], createEvent);

router.get('/', [auth.verifyJwt], viewEvents);

router.get('/:id', [auth.verifyJwt], viewEventById);

router.delete('/:id', [auth.verifyJwt], deleteEvent);

module.exports = router;
