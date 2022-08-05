const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
    questionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
    },
    text: String,
    isCorrect: Boolean,
});

module.exports = mongoose.model('Option', optionSchema);