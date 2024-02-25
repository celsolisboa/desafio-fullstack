const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');
// middleware
app.use(cors());
app.use(express.json());

// Routes

// get all courses
app.get('/cursos', async (req, res) => {
    try {
        const allCourses = await pool.query('SELECT * FROM grade_academica');
        res.json(allCourses.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});
