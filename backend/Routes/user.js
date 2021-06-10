const router = require('express').Router();
let User = require('../models/user.model');

router.route('/add').post((req, res) => {
    const userFirstName = req.body.userFirstName;
    const userLastName = req.body.userLastName;
    const userUsername = req.body.userUsername;
    const userDateOfBirth = Date.parse(req.body.userDateOfBirth);
    const userWalletAddress = req.body.userWalletAddress;
    const userEmailAddress = req.body.userEmailAddress;
    const userPassword = req.body.userPassword;

    const newUser = new User({
        userFirstName,
        userLastName,
        userUsername,
        userDateOfBirth,
        userWalletAddress,
        userEmailAddress,
        userPassword,
    });

    newUser.save()
    .then(() => res.json('User added successfully!'))
    .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;