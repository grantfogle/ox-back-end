const db = require('./database-connection');

module.exports = {
    listAll() {
        return db('playlists');
    },
    getPlaylistByName(playlistName) {
        // return db('questions').select('questions.id', 'answers.id as answer_id', "questions.question as question", "answers.answer as answer", "answers.upvotes", "answers.downvotes")
        //     .join('answers', 'questions.id', 'answers.question_id')
        //     .where('questions.id', id)
        return db('playlists').where('playlistName', playlistName);
    }
}