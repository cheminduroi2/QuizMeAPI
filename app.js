
const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const xss = require('xss-clean');

const categoriesRoutes = require('./routes/categories');
const quizzesRoutes = require('./routes/quizzes');
const { initDatabase } = require('./utils/database');

const app = express();

app.use(cors());
app.use(express.json());
app.use(xss());

app.use('/categories', categoriesRoutes);
app.use('/quizzes', quizzesRoutes);

initDatabase();

const PORT = process.env.PORT || 3020;
  
app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT);
    else 
        console.log("Error occurred, server can't start", error);
    }
);