const mongoose = require('mongoose');

const goalSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId, //we're saying we want the type to be a specific ID
            required: true, 
            ref: 'User', // Which model is this referring to? the "User" model
        },
        text: {
            type: String,
            required: [true, "Please add a text value"]
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Goal", goalSchema)