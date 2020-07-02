const express = require('express');
const routes_courses = express.Router();
const CoursesCreate = require('../../controllers/Courses/create');
const CoursesRead = require('../../controllers/Courses/read');
const CoursesUpdate = require('../../controllers/Courses/update');
const CoursesDelete = require('../../controllers/Courses/delete');

//Rotas dos Cursos(courses)
routes_courses.post('/courses/', CoursesCreate.create);
routes_courses.get('/courses/', CoursesRead.readall);
routes_courses.get('/coursesbyattributes/', CoursesRead.readByAttributes);
routes_courses.put('/courses/:id', CoursesUpdate.update);
routes_courses.get('/courses/:id', CoursesDelete.delete);

module.exports = routes_courses;