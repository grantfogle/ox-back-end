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

// app.get('/find-playlist', (req, res) => {
//     const { playlistName, password } = req.body;
//     return queries.getPlaylistByName(playlistName)
//         .then(playlist => {
//             // error handling
//             if (playlist.length === 0) {
//                 return res.send('Playlist not found, password was incorrect');
//             }
//             // handle wrong password
//             return res.send(playlistId);
//         })
// })

// app.post('/create-playlist', (req, res) => {
//     const { playlistName, password, spotifyId } = req.body;
//     return queries.getPlaylistByName(playlistName).then(playlist => {
//         if (playlist.length > 0) {
//             return res.send('User already exists');
//         } else {
//             let newPlaylist = {
//                 playlistName,
//                 password: hash,
//                 spotifyId
//             }
//             return queries.createPlaylist(newPlaylist).then(response)
//         }
//     })
// })
// get playlist by name
// playlist should have name, id
// status live?

app.listen(port, () => {
    console.log(`listening on ${port}`);
});