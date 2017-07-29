const app = require('express')();
const MongoClient = require('mongodb').MongoClient;
const dbUrl = 'mongodb://db:27017/gettingtoknow-graphql';

app.set('port', 8080);

MongoClient.connect(dbUrl, (err, db) => {
    if(err) console.log(err);
    console.log(`Connected to db at ${dbUrl}`);
    db.close();
});


app.get('/', (req, res) => {
    res.status(200).send('Hello World !');
});

app.listen(app.get('port'),() => {
    console.log(`App Listening on port ${app.get('port')}`);
});
