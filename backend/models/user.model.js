const mongoose = require('mongoose')

const Schema = mongoose.Schema;


const userSchema = new Schema({
    userFirstName: {type: String, required: true, trim: true},
    userLastName: {type: String, required: true, trim: true},
    userUsername: {type: String, required: true, trim: true, unique: true},
    userDateOfBirth: {type: Date, required: true},
    userWalletAddress: {type: String, required: true, unique: true, trim: true},
    userEmailAddress: {type: String, required: true, unique: true, trim: true},
    userPassword: {type: String, required: true, trim: true},
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;