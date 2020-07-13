// var express = require('express');
// var router = express.Router();
// var mongoose = require('mongoose');
// var app = express();
//
// mongoose.connect("mongodb://localhost:27017/todoList", {useNewUrlParser: true});
// const TaskSchema = {
//     task: String
// };
//
//
// const Task = mongoose.model("Task", TaskSchema);
//
// // Get All Tasks
// app.route.get('/tasks', function(req, res, next) {
//     Task.find({}, { _id: 1, title: 1 }, function(err, tasks) {
//         if (err) {
//             res.send(err)
//         }
//
//         var data = []
//         Object.keys(tasks).forEach(function(key) {
//             var val = tasks[key]
//             data.push([val.title, val._id])
//         })
//         //res.json(tasks);
//         //res.send(tasks);
//         res.send(data)
//     })
// })
//
// // Get Single Task
// app.route.get('/task/:id', function(req, res, next) {
//     Task.findOne({ _id: mongojs.ObjectId(req.params.id) }, function(
//         err,
//         task
//     ) {
//         if (err) {
//             res.send(err)
//         }
//         res.json(task)
//     })
// })
//
// //Save Task
// app.route.post('/task', function(req, res) {
//     var task = req.body
//     if (!task.title) {
//         res.status(400)
//         res.json({
//             error: 'Bad Data'
//         })
//     } else {
//         Task.save(task, function(err, task) {
//             if (err) {
//                 res.send(err)
//             }
//             res.json(task)
//         })
//     }
// })
//
// // Delete Task
// app.route.delete('/task/:id', function(req, res) {
//     Task.remove({ _id: mongojs.ObjectId(req.params.id) }, function(
//         err,
//         task
//     ) {
//         if (err) {
//             res.send(err)
//         }
//         res.json(task)
//     })
// })
//
// // Update Task
// app.route.put('/task/:id', function(req, res, next) {
//     var task = req.body
//     var updTask = {}
//
//     if (task.isDone) {
//         updTask.isDone = task.isDone
//     }
//
//     if (task.title) {
//         updTask.title = task.title
//     }
//
//     if (!updTask) {
//         res.status(400)
//         res.json({
//             error: 'Bad Data'
//         })
//     } else {
//        Task.update(
//             { _id: mongojs.ObjectId(req.params.id) },
//             updTask,
//             {},
//             function(err, task) {
//                 if (err) {
//                     res.send(err)
//                 }
//                 res.json(task)
//             }
//         )
//     }
// })
//
// module.exports = router

const express = require("express");
const router = require('express').Router();
let Task = require('../models/tasks')

// get
router.route('/').get((req, res) => {
    Task.find()
        .then(tasks => res.json(tasks))
        .catch(err => res.status(400).json('Error' + err))
})

//delete
router.route('/').delete((req, res) => {
    Task.deleteMany(function (err) {
        if(!err){
            res.send("successfully deleted all the tasks")
        }else {
            res.send(err)
        }
    })
})

// add new task
router.route('/add').post((req, res) => {

    const newTask = new Task({
        task: req.body.task,
        completed: req.body.completed,
        dateCreated: req.body.dateCreated
    });

    newTask.save()
        .then(() => res.json('new Todo Item added'))
        .catch((err) => res.status(400).json('Error' + err));
});

//get single task
router.route('/:id').get((req, res) => {
    Task.findById(req.params.id)
        .then(tasks => res.json(tasks))
        .catch(err => res.status(400).json('Error' + err))
});

//delete single task
router.route('/:id').delete((req, res) => {
    Task.findByIdAndDelete(req.params.id)
        .then(tasks => res.json('Task deleted'))
        .catch(err => res.status(400).json('Error' + err))
});


router.route('/update/:id').post((req, res) => {
    Task.findById(req.params.id)
        .then(tasks => {
            tasks.task = req.body.task;
            tasks.completed = req.body.completed;
            tasks.dateCreated = Date.parse(req.body.dateCreated);

            tasks.save()
                .then(() => res.json('Tasks updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;







