const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('it worked duuuuuuude');
});

// get authentication for spotify user
// app.get('/user-authentication', (req, res) => {});
// create playlist 
// app.post('/create-playlist', (req, res) => {});
// find playlist
// app.get('/find-playlist', (req, res) => {});
// search songs
// app.get('/search-songs', (req, res) => {});
// add song to playlist
// app.post('/add-song-to-playlist', (req, res) => {});
// remove song from playlist
// app.delete('/remove-song-from-playlist', (req, res) => {});


app.listen(port, () => {
    console.log(`listening on ${port}`);
});