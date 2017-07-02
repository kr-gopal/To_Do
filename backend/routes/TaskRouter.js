var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Tasks = require('../models/Task');

var TaskRouter = express.Router();

TaskRouter.route('/api/tasks')
.get(function (req, res, next) {
    Tasks.find(function(err, Tasks){
        if (err) throw err;
        res.json(Task);
    });
})

TaskRouter.route('/api/tasks')
.post(function (req, res) {
    Task.create({
            text : req.body.text,
            done : false
        }, function(err, Task) {
            if (err) res.send(err);
            Task.find(function(err, Tasks) {
                if (err) res.send(err)
                res.json(Tasks);
            });
    });
})
TaskRouter.route('/api/tasks/:task_id')
.delete(function(req, res) {
        Task.remove({
            _id : req.params.Task_id
        }, function(err, Task) {
            if (err)
                res.send(err);
            Task.find(function(err, Tasks) {
                if (err)
                    res.send(err)
                res.json(Tasks);
            });
        });
    });
module.exports = TaskRouter;