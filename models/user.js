const { Schema, model } = require('mongoose');


const userSchema = new Schema({
    
    userName: {
        type: { $trim: { input: String} },
        unique: true,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        //validate needs to go here
    },
    thoughts: [],

    friends: [],

    },
    {
    toJSON: {
      virtuals: true,
      getters: true
    },
    // prevents virtuals from creating duplicate of _id as `id`
    id: false
    }
);





const User = model('User', userSchema);

module.exports = User;