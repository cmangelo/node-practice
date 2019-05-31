const express = require('express');
const User = require('../models/user');
const auth = require('../middleware/auth')

const router = new express.Router();


router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password);
        const token = await user.generateAuthToken();
        res.send({user, token});
    } catch (err) {
        res.status(400).send(e);
    }
});

router.get('/users/me', auth, async (req, res) => {
    res.send(req.user);
});

router.route('/users')
    .post(async (req, res) => {
        const user = new User(req.body)
        try {
            await user.save();
            const token = await user.generateAuthToken();
            res.status(201).send({user, token});
        } catch (err) {
            res.status(400).send(err);
        }
    });

router.route('/users/:id')
    .get(async (req, res) => {
        const _id = req.params.id;

        try {
            const user = await User.findById(_id)
            if (!user) {
                return res.status(404).send();
            }
            res.send(user);
        } catch (err) {
            res.status(500).send(err);
        }
    })
    .patch(async (req, res) => {
        const _id = req.params.id;
        const body = req.body;
        const updates = Object.keys(body);
        const allowedUpdates = ['name', 'email', 'password', 'age']; 
        const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

        if (!isValidOperation) {
            return res.status(400).send();
        }

        try {
            const user = await User.findById(_id);
            updates.forEach(update => user[update] = req.body[update]);
            await user.save();

            if (!user) {
                return res.status(404).send();
            }
            res.send(user);
        } catch (err) {
            res.status(400).send();
        }
    })
    .delete(async (req, res) => {
        const _id = req.params.id;
        try {
            const user = await User.findByIdAndDelete(_id);
            if (!user) {
                return res.status(404).send();
            }
            res.send(user);
        } catch (err) {
            res.status(500).send();
        }
    });


module.exports = router;