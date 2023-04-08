const Event = require('../models/event.schema');

const createEvent = async (req, res) => {
    try {
        const event = new Event({
            name: req.body.name,
            date: req.body.date,
            description: req.body.description
        });

        await event.save();

        res.status(200).json({
            message: 'Event created',
            data: {
                event
            }
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: error.message
        });
    }
};

const viewEvents = async (req, res) => {
    try {
        const events = await Event.find({});

        res.status(201).json({
            message: 'Event list',
            data: {
                events
            }
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: error.message
        });
    }
};

const viewEventById = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);

        res.status(201).json({
            message: 'Event found',
            data: {
                event
            }
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: error.message
        });
    }
};

const deleteEvent = async (req, res) => {
    try {
        const event = await Event.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: 'Event deleted'
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    createEvent,
    viewEvents,
    viewEventById,
    deleteEvent
};
