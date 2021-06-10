const router = require('express').Router();
let pubgUsername = require('../models/pubgUsername.model');

router.route('/addPubgUser').post((req, res) => {
    const userUsername = req.body.userUsername;
    const userPubgGamerTag = req.body.userPubgGamerTag;

    const newPubgUser = new pubgUsername({
        userUsername,
        userPubgGamerTag,
    });

    newPubgUser.save()
    .then(() => res.json('Pubg User added successfully!'))
    .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;