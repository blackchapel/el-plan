const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
});

const Event = mongoose.model('event', eventSchema);

module.exports = Event;
