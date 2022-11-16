const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');


const thoughtSchema = new Schema({

    thoughtText: {
        type: String,
        required: true,
        //between 1 - 280 characters here
    },

    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal) 
    },
    username: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],

    reactions: []
})





const Thoughts = model('Thoughts', thoughtSchema);

module.exports = Thoughts;