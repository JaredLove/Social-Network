// require monoose with schema and model
const { Schema, model } = require('mongoose');


// user schema
const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/]
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
},
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
);

// get the total amout of friends upon call
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

// creating user model wuth user schema
const User = model('User', userSchema);

// exporting User model
module.exports = User;