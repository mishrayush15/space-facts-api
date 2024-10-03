const express = require('express');
const app = express();
const winston = require('winston');
const spaceFacts = require('./space')
require('dotenv').config();
const PORT = process.env.PORT || 5000


const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.File({ filename: 'server.log' })
    ]
});

const randomFactNumber = () => {
    const number = Math.floor(Math.random() * 50);
    return number;
}

app.get('/api/space/facts', (req, res) => {
    const randomNumber = randomFactNumber()
    res.json({
        fact: spaceFacts[randomNumber],

    })
})

app.listen(PORT, () => {
    logger.info(`Server running on port ${PORT}`);
})

