const express = require('express');
const app = express();
const winston = require('winston');
const spaceFacts = require('./space')
require('dotenv').config();
const PORT = process.env.PORT || 5000

// Logging server logs into a seperate file
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.File({ filename: 'server.log' })
    ]
});


// Generating random numbers from 0 to 49
const randomFactNumber = () => {
    const number = Math.floor(Math.random() * 50);
    return number;
}


// API to fetch random-space-facts
app.get('/api/space/facts', (req, res) => {
    const randomNumber = randomFactNumber()
    res.json({
        fact: spaceFacts[randomNumber],

    })
})


// Starting the server on the given port 
app.listen(PORT, () => {
    logger.info(`Server running on port ${PORT}`);
})

