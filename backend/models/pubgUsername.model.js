const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const pubgUsernameSchema = new Schema({
    userUsername: {type: String, required: true, trim: true, unique: true},
    userPubgGamerTag: {type: String, required: true, trim: true, unique: true},
}, {
    timestamps: true,
});

const pubgUsername = mongoose.model('Pubg Gamertag', pubgUsernameSchema);

module.exports = pubgUsername;