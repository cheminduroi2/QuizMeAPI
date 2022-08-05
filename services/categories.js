const categoriesRepository = require('../repositories/categories');

const getAll = async (sortOptions = {sortType: 'none'}) => {
    const results = await categoriesRepository.getAll();
    if (sortOptions.sortType == 'category-asc') {
        results.sort((result1, result2) => result1.name < result2.name ? -1 : 1);
    }
    return results;
};

module.exports = { getAll };