
exports.up = function (knex) {
    return knex.schema.createTable('playlists', (playlist) => {
        playlist.increments('id');
        playlist.string('playlist_name');
        playlist.string('password');
        playlist.string('spotify_id');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('playlists');
};
