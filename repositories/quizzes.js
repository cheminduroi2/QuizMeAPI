const Quiz = require('../models/quiz');

const getById = async (id) => {
    const result = await Quiz.findById(id);
    return result;
};

const getByCategoryId = async (categoryId) => {
    const results = await Quiz.find({ categoryId });
    return results;
}

module.exports = { getById, getByCategoryId };