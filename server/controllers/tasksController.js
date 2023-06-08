const { Tasks } = require("../models/tasksModel")


const tasksController = {
    getAll: (req, res) => {

        Tasks.find()
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.status(500).json(err)
            })

    },
    getById: (req, res) => {
        let id = req.params.id;

        Tasks.findById(id)
            .then(data => {
                if (data)
                    res.json(data);
                else
                    res.status(404).json({ 'msg': 'Not found!' })
            })
            .catch(err => {
                res.status(500).json(err)
            })
    },
    add: (req, res) => {
        let task = new Tasks({
            task: req.body.task,
        });
    
        task.save()
            .then(savedTask => {
                res.json(savedTask);
            })
            .catch(err => {
                res.status(500).json(err);
            });
    },
    deleteById: (req, res) => {

        let id = req.params.id;

        Tasks.findByIdAndDelete(id)
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    },
    update: (req, res) => {
        let id = req.params.id;

        Tasks.findById(id)
            .then(data => {
                data.task = req.body.task;

                data.save();

                res.json(data);
            })
            .catch(err => {
                res.status(500).json(err);
            })

    }
}


module.exports = {
    tasksController
}
