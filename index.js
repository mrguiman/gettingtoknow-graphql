const app = require('express')();
const mongoose = require('mongoose');
const dbUrl = 'mongodb://db:27017/gettingtoknow-graphql';

app.set('port', 8080);

mongoose.Promise = global.Promise;
mongoose.connect(dbUrl);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.on('open', () => { console.log(`Connected to db at ${dbUrl}`); });

app.get('/', (req, res) => {
    res.status(200).send('Hello World !');
});

app.listen(app.get('port'),() => {
    console.log(`App Listening on port ${app.get('port')}`);
});
