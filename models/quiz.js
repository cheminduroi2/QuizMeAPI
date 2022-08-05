const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    title: String
});

module.exports = mongoose.model('Quiz', quizSchema);