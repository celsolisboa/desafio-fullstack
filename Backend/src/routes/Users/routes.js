const express = require('express');
const routes_users = express.Router();
const UserCreate = require('../../controllers/Users/create');
const login = require('../../controllers/Users/login');

//Rotas dos Usuários(users)
routes_users.post('/users/', UserCreate.create);
routes_users.post('/login/', login.login);

module.exports = routes_users;