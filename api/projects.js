const app = require('express')();
const Project = require('../models/Project');

// Get all projects
app.get('/', (req, res) => {
    Project.find()
        .then(projects => {
            res.json(projects.map((project) => project.toPlainObject()));
        });
});

// Get a single project
app.get('/:id', (req, res) => {
    Project.findOne({ _id: req.params.id })
        .then((project) => {
            if(!project) return res.sendStatus(404);
            res.json(project.toPlainObject())
        })
        .catch((err) => res.sendStatus(500));
});

module.exports = app;
