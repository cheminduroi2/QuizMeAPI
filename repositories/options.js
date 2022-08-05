const Option = require('../models/option');

const getByQuestionIds = async (questionIds) => {
    const results = await Option.find({
        questionId: { $in: questionIds }
    });
    return results;
};

module.exports = { getByQuestionIds };