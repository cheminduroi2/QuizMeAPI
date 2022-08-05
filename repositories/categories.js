const Category = require('../models/category');

const getAll = async () => {
    const results = await Category.find();
    return results;
};

module.exports = { getAll };