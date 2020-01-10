const express = require('express');

const recipeRouter = require('./');
const ingredientRouter = require('./')

const server = express();

server.use(express.json());
server.use('/api/recipes', recipeRouter);

module.exports = server;