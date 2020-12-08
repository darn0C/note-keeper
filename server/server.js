const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

const port = process.env.PORT || 4000;

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})

app.use(cors())
app.use(express.json());

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    toDo: {
        type: Boolean,
        required: true,
        default: true
    },
    inProgress: {
        type: Boolean,
        required: true,
        default: false
    },
    finished: {
        type: Boolean,
        required: true,
        default: false
    },
    deleted: {
        type: Boolean,
        required: true,
        default: false
    }
});

const Task = mongoose.model("Task", taskSchema);

app.get("/", function (req, res) {
    Task.find((err, tasks) => {
        if (err) {
            console.log(err)
        } else {
            res.json(tasks)
        }
    })
})

app.post("/new", function (req, res) {
    const task = new Task({
        title: req.body.title,
        description: req.body.description
    })
    task
        .save()
        .then((task) => {
            res.json(task);
        })
        .catch((err) => {
            res.send(err)
        })
})

app.post("/inProgressTask/:id", async (req, res) => {
    await Task.findByIdAndUpdate(req.params.id, {
        toDo: false,
        inProgress: true,
        finished: false,
        deleted: false,
    });

    const tasks = await Task.find();
    res.json(tasks)

})

app.post("/finishedTask/:id", async (req, res) => {
    await Task.findByIdAndUpdate(req.params.id, {
        toDo: false,
        inProgress: false,
        finished: true,
        deleted: false,
    });

    const tasks = await Task.find();
    res.json(tasks)

})

app.post("/deletedTask/:id", async (req, res) => {
    await Task.findByIdAndUpdate(req.params.id, {
        toDo: false,
        inProgress: false,
        finished: false,
        deleted: true,
    });

    const tasks = await Task.find();
    res.json(tasks)

})

app.post("/returnTask/:id", async (req, res) => {
    await Task.findByIdAndUpdate(req.params.id, {
        toDo: true,
        inProgress: false,
        done: false,
        deleted: false,
    })
    const tasks = await Task.find();
    res.json(tasks)
})

app.listen(port)