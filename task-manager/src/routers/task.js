const express = require('express');
const Task = require('../models/task');

const router = new express.Router();

router.route('/tasks')
    .get(async (req, res) => {
        try {
            const tasks = await Task.find({});
            res.send(tasks);
        } catch (err) {
            res.status(500).send();
        }
    })
    .post(async (req, res) => {
        const task = new Task(req.body);
        try {
            await task.save();
            res.status(201).send(task);
        } catch (err) {
            res.status(400).send(err);
        }
    });

router.route('/tasks/:id')
    .get(async (req, res) => {
        const _id = req.params.id;
        try {
            const task = await Task.findById(_id)
            if (!task) {
                return res.send(404).send();
            }
            res.send(task);
        } catch (err) {
            res.status(500).send(err);
        }
    })
    .patch(async (req, res) => {
        const _id = req.params.id;
        const body = req.body;
        const updates = Object.keys(body);
        const allowedUpdates = ['description', 'completed'];
        const isValidOperation = updates.every((update) => allowedUpdates.includes(update));
        
        if (!isValidOperation) {
            return res.status(400).send();
        }
    
        try {
            const task = await Task.findById(_id);
            updates.forEach(update => task[update] = req.body[update]);
            await task.save();
    
            if (!task) {
                return res.status(404).send();
            }
            res.send(task);
        } catch (err) {
            res.status(400).send();
        }
    })
    .delete(async (req, res) => {
        const _id = req.params.id;
        try {
            const task = await Task.findByIdAndDelete(_id);
            if (!task) {
                return res.status(404).send();
            }
            res.send(task);
        } catch (err) {
            res.status(500).send();
        }
    });

module.exports = router;