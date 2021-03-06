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
        res.status(400).send(err);
    }
});

router.post('/users/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter(token => token.token !== req.token);
        await req.user.save();

        res.send();
    } catch (err) {
        res.status(500).send();
    }
});

router.post('/users/logoutAll', auth, async (req, res) => {
    try {
        req.user.tokens = [];
        await req.user.save();

        res.send();
    } catch (err) {
        res.status(500).send();
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

router.delete('/users/me', auth, async (req, res) => {
        try {
            await req.user.remove()
            res.send(req.user);
        } catch (err) {
            res.status(500).send();
        }
    });

router.route('/users/me')
    .patch(auth, async (req, res) => {
        // const _id = req.params.id;
        const body = req.body;
        const updates = Object.keys(body);
        const allowedUpdates = ['name', 'email', 'password', 'age']; 
        const isValidOperation = updates.every(update => allowedUpdates.includes(update));

        if (!isValidOperation) {
            return res.status(400).send();
        }

        try {
            const user = req.user;
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

module.exports = router;