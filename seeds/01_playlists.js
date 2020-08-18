
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('playlists').del()
    .then(function () {
      // Inserts seed entries
      return knex('playlists').insert([
        { playlistName: 'firstplaylist', spotifyPlaylistId: '4kcjIFRliZWc7bGe597Dmj', spotifyUserId: '125956319' },
        { playlistName: '2playlist', spotifyPlaylistId: '4kcjIFRliZWc7bGe597Dmj', spotifyUserId: '125956319' },
        { playlistName: '3me', spotifyPlaylistId: '4kcjIFRliZWc7bGe597Dmj', spotifyUserId: '125956319' }
      ]);
    });
};