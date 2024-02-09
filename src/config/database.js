const mongoose = require('mongoose')

const connect = async () => {
    try {
        await mongoose.connect('mongodb://0.0.0.0/twitter');
        console.log("Connected to database");
    } catch (error) {
        console.error("Error connecting to database:", error);
    }
};

module.exports = connect;




