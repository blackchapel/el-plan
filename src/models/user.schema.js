const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            unique: true,
            match: [
                /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/,
                'Please enter a valid email address'
            ]
        },
        password: {
            type: String,
            trim: true
        },
        profilePicture: {
            type: String
        },
        role: {
            type: String,
            enum: ['ADMIN', 'USER']
        },
        friends: {
            type: [
                {
                    _id: String,
                    name: String,
                    username: String
                }
            ]
        },
        friendRequests: {
            type: [
                {
                    _id: String,
                    name: String,
                    username: String
                }
            ]
        },
        friendRequestsSent: {
            type: [
                {
                    _id: String,
                    name: String,
                    username: String
                }
            ]
        },
        groups: {
            type: [String]
        },
        isVisible: {
            type: Boolean,
            default: false
        },
        isdeleted: {
            type: Boolean,
            default: false
        },
        points: {
            type: Number,
            default: 0
        }
    },
    { timestamps: true }
);

const User = mongoose.model('user', userSchema);

module.exports = User;
