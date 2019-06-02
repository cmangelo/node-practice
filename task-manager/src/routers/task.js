const express = require('express');
const Task = require('../models/task');
const auth = require('../middleware/auth');

const router = new express.Router();

router.route('/tasks')
    .get(auth, async (req, res) => {
        const completed = req.query.completed;
        const match = {};
        const srt = {};

        if (completed) {
            match.completed = completed === 'true';
        }

        if (req.query.sortBy) {
            const parts = req.query.sortBy.split(':');
            srt[parts[0]] = parts[1] === 'asc' ? 1 : -1;
        }

        try {
            // const tasks = await Task.find({owner: req.user._id}); -- this works too
            await req.user.populate({
                path: 'tasks',
                match,
                options: {
                    limit: parseInt(req.query.limit),
                    skip: parseInt(req.query.skip),
                    sort: srt
                }
            }).execPopulate();
            
            res.send(req.user.tasks);
        } catch (err) {
            res.status(500).send(err);
        }
    })
    .post(auth, async (req, res) => {
        const task = new Task({
            ...req.body,
            owner: req.user._id
        });
        
        try {
            await task.save();
            res.status(201).send(task);
        } catch (err) {
            res.status(400).send(err);
        }
    });

router.route('/tasks/:id')
    .get(auth, async (req, res) => {
        const _id = req.params.id;
        try {
            const task = await Task.findOne({ _id, owner: req.user._id })
            if (!task) {
                return res.send(404).send();
            }
            res.send(task);
        } catch (err) {
            res.status(500).send(err);
        }
    })
    .patch(auth, async (req, res) => {
        const _id = req.params.id;
        const body = req.body;
        const updates = Object.keys(body);
        const allowedUpdates = ['description', 'completed'];
        const isValidOperation = updates.every((update) => allowedUpdates.includes(update));
        
        if (!isValidOperation) {
            return res.status(400).send();
        }
    
        try {
            const task = await Task.find({_id, owner: req.user._id})
            
            if (!task) {
                return res.status(404).send();
            }

            updates.forEach(update => task[update] = req.body[update]);
            await task.save();
            
            res.send(task);
        } catch (err) {
            res.status(400).send();
        }
    })
    .delete(auth, async (req, res) => {
        const _id = req.params.id;
        try {
            const task = await Task.findOneAndDelete({_id, owner: req.user._id});
            if (!task) {
                return res.status(404).send();
            }
            res.send(task);
        } catch (err) {
            res.status(500).send();
        }
    });

module.exports = router;