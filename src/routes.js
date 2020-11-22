const express = require('express');

const CourseController = require("./controllers/CourseController.js");
const RoomController = require("./controllers/RoomController.js");
const TeacherController = require("./controllers/TeacherController.js");
const TableNameController = require("./controllers/TableNameController.js");
const CourseDetailsController = require("./controllers/CourseDetailsController.js");

const routes = express.Router();

routes.get('/api', (req, res) => {
  return res.json({message: 'API Working!'});
});

routes.get('/api/courses', CourseController.index);
routes.get('/api/courses/:id', CourseController.show);

routes.get('/api/rooms', RoomController.index);

routes.get('/api/teachers', TeacherController.index);

routes.get('/api/:tablename', TableNameController.index);
routes.post('/api/tablename', TableNameController.store);
routes.delete('/api/:tablename/:id', TableNameController.delete);

routes.get('/api/course-details', CourseDetailsController.index);

module.exports = routes;
