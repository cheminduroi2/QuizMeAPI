const express = require('express');
const categoriesService = require('../services/categories');
const quizzesService = require('../services/quizzes');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const categories = await categoriesService.getAll({sortType: 'category-asc'});
        return res.json(categories);
    } catch (error) {
        console.error(`Error getting all categories: ${error.message}`);
        return res.status(500).send({ message: error.message });
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const quizzes = await quizzesService.getByCategoryId(
            req.params.id,
            {sortType: 'title-asc'}
        );
        return res.json(quizzes);
    } catch (error) {
        console.error(`Error getting the category: ${error.message}`);
        return res.status(500).send({ message: error.message });
    }
});

module.exports = router;