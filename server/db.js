const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    password: 'Messi2014',
    host: 'localhost',
    port: 5432,
    database: 'academic'
});

module.exports = pool;