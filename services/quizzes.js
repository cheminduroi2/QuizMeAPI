const quizzesRepository = require('../repositories/quizzes');
const questionsRepository = require('../repositories/questions');
const optionsRepository = require('../repositories/options');

const getByIdWithChildren = async (id) => {
    const quizResult = await quizzesRepository.getById(id);
    let questionsResults = [];
    if (quizResult != null) {
        questionsResults = await questionsRepository.getByQuizId(quizResult['_id']);
    }
    let optionsResults = [];
    if (questionsResults.length > 0) {
        const questionIds = questionsResults.map(question => question['_id']);
        optionsResults = await optionsRepository.getByQuestionIds(questionIds);
    }

    return { 
        quiz: quizResult || {},
        questions: questionsResults,
        options: optionsResults
    }
};

const getByCategoryId = async (categoryId, sortOptions = {sortType: 'none'}) => {
    const results = await quizzesRepository.getByCategoryId(categoryId);
    if (sortOptions.sortType == 'title-asc') {
        results.sort((result1, result2) => result1.title < result2.title ? -1 : 1);
    }
    return results;

}

module.exports = { getByIdWithChildren, getByCategoryId };