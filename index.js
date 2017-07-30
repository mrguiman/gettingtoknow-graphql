const app = require('express')();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.set('port', 8080);
app.use(bodyParser());

const dbUrl = 'mongodb://db:27017/gettingtoknow-graphql';
mongoose.Promise = global.Promise;
mongoose.connect(dbUrl);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.on('open', () => { console.log(`Connected to db at ${dbUrl}`); });

// Define routes
app.use('/organizations', require('./api/organizations'));
app.use('/projects', require('./api/projects'));
app.get('/', (req, res) => {
    res.status(200).send('Hello World !');
});


// Start the server
app.listen(app.get('port'),() => {
    console.log(`App Listening on port ${app.get('port')}`);
});
