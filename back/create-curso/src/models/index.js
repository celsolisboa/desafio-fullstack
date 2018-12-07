const fs = require("fs");
const path = require("path");
const CLASSMETHODS = 'classMethods';
const ASSOCIATE = 'associate';
const Sequelize = require('sequelize');
var db_ambient = process.env.NODE_ENV || 'development';
let env = require('../config/config.json')[db_ambient];
var db = {};

const sequelize = new Sequelize(env.database, env.username, env.password, {
    host: env.host,
    port: env.port,
    logging: false,
    dialect: env.dialect,
    define: {
        timestamps: false
    },
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 20000,
        idle: 10000
    }
});


fs.readdirSync(__dirname).filter(function (file) {
    return (file.indexOf('.') !== 0) && (file !== 'index.js');
}).forEach(function (file) {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
});

Object.keys(db).forEach(function(modelName) {
    if ('associate' in db[modelName]) {
      db[modelName].associate(db);
    }
  });

module.exports = {
    'Sequelize': Sequelize,
    'sequelize': sequelize
};