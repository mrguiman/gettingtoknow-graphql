const app = require('express')();
const Organization = require('../models/Organization');
const Project = require('../models/Project');

// Get all organizations
app.get('/', (req, res) => {
    Organization.find()
        .then(orgs => {
            res.json(orgs.map((org) => org.toPlainObject()));
        });
});

// Get a single organization
app.get('/:id', (req, res) => {
    Organization.findOne({ _id: req.params.id })
        .then((org) => {
            if(!org) return res.sendStatus(404);
            res.json(org.toPlainObject());
        })
        .catch((err) => res.sendStatus(500));
});

// Get an organization's projects
app.get('/:id/projects', (req, res) => {
    Project.find({ organizationID: req.params.id })
        .then((projects) => {
            res.json(projects.map((project) => project.toPlainObject()));
        })
        .catch(() => res.sendStatus(500));
});

// Insert a new organization
app.post('/', (req, res) => {
    if(!req.body.name) return res.sendStatus(400);

    let organization = new Organization({
        name: req.body.name,
        president: req.body.president,
        logo: req.body.logo
    });

    organization.save()
        .then((org) => { res.json(org.toPlainObject()) });
});

// Insert a new project for an organization
app.post('/:id/projects', (req, res) => {
    if(!req.body.name || !req.body.type) 
        return res.sendStatus(400);

    // We fetch the organization first to make sure it exists
    Organization.findOne({ _id: req.params.id })
        .then((org) => {
            if(!org) res.sendStatus(404);

            let project = new Project({ 
                name: req.body.name,
                type: req.body.type,
                organizationID: org.id.toString()
            });

            project.save()
                .then((org) => { res.json(org.toPlainObject()) });
        })
        .catch(() => res.sendStatus(500))

});

module.exports = app;
