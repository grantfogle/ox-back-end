const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('it worked duuuuuuude');
});

// get playlist by name
// playlist should have name, id
// status live?

app.listen(port, () => {
    console.log(`listening on ${port}`);
});