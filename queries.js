const db = require('./database-connection');

module.exports = {
    listAll() {
        return db('playlists');
    },
    getPlaylistByName(playlistName) {
        return db('playlists').where('playlistName', playlistName);
    }
}