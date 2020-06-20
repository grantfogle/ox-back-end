
exports.up = function (knex) {
    return knex.schema.createTable('playlists', (playlist) => {
        playlist.increments('id');
        playlist.string('playlistName');
        playlist.string('password');
        playlist.string('spotifyId');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('playlists');
};
