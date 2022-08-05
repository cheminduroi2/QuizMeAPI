const mongoose = require('mongoose');

initDatabase = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://${process.env.db_username}:${process.env.db_password}@${process.env.db_name}.gk3mvln.mongodb.net/?retryWrites=true&w=majority`,
        );
        console.log('Database connection has been established successfully.');
    } catch (error) {
        console.error(`Unable to connect to database: ${error.message}`);
    }
};

module.exports = { initDatabase }