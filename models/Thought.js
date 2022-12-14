// require monoose with schema and model
const { Schema, model } = require('mongoose');
// require dateformat
const dateFormat = require('../utils/dateFormat');


//reaction schema
const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    }
},
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

//thought schema
const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    },
    username: {
        type: String,
        required: true
    },
    reactions: [reactionSchema]
},

    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

//get the total amount of reaction upon call
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});




// creating the thoughts model with the thought schema
const Thought = model('Thought', thoughtSchema);

//exporting Thoughts model
module.exports = Thought;