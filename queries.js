const db = require('./database-connection');

module.exports = {
    listAll() {
        return db('playlists');
    },
    getPlaylistByName(id) {
        return db('playlists').where('id')
    }
}