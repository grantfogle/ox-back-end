const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 8000;
const queries = require('./queries');

app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    queries.listAll().then(playlists => res.send(playlists));
});

// get playlist by name
// playlist should have name, id
// status live?

app.listen(port, () => {
    console.log(`listening on ${port}`);
});