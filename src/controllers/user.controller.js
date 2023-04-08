const User = require('../models/user.schema');

const viewLeaderboard = async (req, res) => {
    try {
        const users = await User.find({}).sort({ points: -1 });

        res.status(201).json({
            message: 'User Leaderboard',
            data: {
                users
            }
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: error.message
        });
    }
};

const addPoints = async (req, res) => {
    try {
        const user = await User.findById(req.body.userId);

        for (let i = 0; i < req.body.ppoints; i++) {
            user.points += 1;
        }

        await user.save();

        res.status(201).json({
            message: 'User Points Updated',
            data: {
                user
            }
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    viewLeaderboard,
    addPoints
};
