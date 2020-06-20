
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('playlists').del()
    .then(function () {
      // Inserts seed entries
      return knex('playlists').insert([
        { playlistName: 'firstplaylist', password: 'password', spotifyId: '4kcjIFRliZWc7bGe597Dmj' },
        { playlistName: '2playlist', password: 'password', spotifyId: '4kcjIFRliZWc7bGe597Dmj' },
        { playlistName: '3me', password: 'password', spotifyId: '4kcjIFRliZWc7bGe597Dmj' }
      ]);
    });
};