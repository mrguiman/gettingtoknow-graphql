const app = require('express')();
const Organization = require('../models/Organization');

app.get('/', (req, res) => {
    Organization.find()
        .then(orgs => {
            res.json(orgs);
        });
});
app.get('/:id', (req, res) => {
    if(!req.params.id) return res.sendStatus(400);
    Organization.findOne({ _id: req.params.id })
        .then((org) => {
            if(!org) return res.sendStatus(200);
            res.json(org.toPlainObject())
        });
});
app.post('/organization', (req, res) => {
    if(!req.body.name) return res.sendStatus(400);

    let organization = new Organization({
        name: req.body.name,
        president: req.body.president,
        logo: req.body.logo
    });

    organization.save()
        .then((org) => { res.json(org.toPlainObject()) });
});

module.exports = app;
