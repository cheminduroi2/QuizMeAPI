const Question = require('../models/question');

const getByQuizId = async (quizId) => {
    const results = await Question.find({ quizId });
    return results;
};

module.exports = { getByQuizId };