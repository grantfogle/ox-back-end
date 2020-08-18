const express = require('express');
const app = express();
const cors = require('cors');
const queries = require('./queries');
const port = process.env.PORT || 8000;

app.use(express.static('public'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))

app.get('/', (req, res) => {
    queries.listAll().then(playlists => res.send(playlists));
});

app.post('/find-playlist', (req, res) => {
    const { playlistName } = req.body;
    console.log('cats');
    // send response if playlist doesn't exist
    if (playlistName) {
        queries.getPlaylistByName(playlistName).then(playlist => res.send(playlist));
    } else {
        res.send('there was a problem with your request');
    }
});

app.post('/create-playlist', (req, res) => {
    const newPlaylist = req.body;

    queries.getPlaylistByName(newPlaylist.playlistName).then(playlistStatus => {
        isNameADuplicate = false;
        if (playlistStatus.length >= 1) {
            isNameADuplicate = true;
            return res.send('That playlist name already exists, choose another');
        }

        if (newPlaylist && !isNameADuplicate) {
            return queries.createPlaylist(newPlaylist).then(newPlaylistStatus => res.sendStatus(204));
        } else {
            return res.send('There was an issue with your request');
        }
    });
});

// get playlist by name
// playlist should have name, id
// status live?
app.listen(port, () => {
    console.log(`listening on ${port}`);
});