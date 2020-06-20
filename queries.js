const db = require('./database-connection');

module.exports = {
    listAll() {
        console.log('it ran');
        return db('playlists');
    }
}