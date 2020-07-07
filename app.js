const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const queries = require('./queries');
const port = process.env.PORT || 8000;

app.use(express.static('public'));
// app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(port, () => {
    console.log(`listening on ${port}`);
});

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     next();
// });


app.get('/', (req, res) => {
    // get the name of the playlist
    // return
    queries.listAll().then(playlists => res.send(playlists));
});

app.get('/playlist/:name', (req, res) => {
    // playlist name
    console.log('hit');
    console.log(req.params.name);
    const playlistName = req.params.name;
    // const { playlistName } = req.body;
    console.log(playlistName);
    queries.getPlaylistByName(playlistName).then(playlist => res.send(playlist));

})

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