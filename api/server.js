const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const templateRoute = require('../routes/template');

//Require env variables
require('dotenv').config();
const server = express();

server.use(helmet());
server.use(express.json());

server.use(cors({
  origin: [
    'http://localhost:3000',
    'https://labs20d8picker.netlify.app'
  ],
  credentials: true
}));



server.use('/api/template', templateRoute);

server.get('/', (req, res) => {
  res.send({ api: 'Ok', dbenv: process.env.DB_ENV });
});

module.exports = server;
