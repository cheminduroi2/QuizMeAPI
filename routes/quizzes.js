const express = require('express');
const quizzesService = require('../services/quizzes');

const router = express.Router();

router.get('/:id', async (req, res, next) => {
    try {
        const quiz = await quizzesService.getByIdWithChildren(req.params.id);
        return res.json(quiz);
    } catch (error) {
        console.error(`Error getting the quiz: ${error.message}`);
        return res.status(500).send({ message: error.message });
    }
});

module.exports = router;