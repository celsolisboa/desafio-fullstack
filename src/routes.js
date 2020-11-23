const express = require('express');

const CourseController = require("./controllers/CourseController.js");
const RoomController = require("./controllers/RoomController.js");
const TeacherController = require("./controllers/TeacherController.js");
const DynamicController = require("./controllers/DynamicController.js");
const PostController = require("./controllers/PostController.js");

const routes = express.Router();

routes.get('/api', (req, res) => {
  return res.json({message: 'API Working!'});
});

const auth = {
  'john@gmail.com': 'passwd',
  'bill@gmail.com': 'test123'
};

const users = {
  'john@gmail.com': {
      firstName: 'John'
  },
  'bill@gmail.com': {
      firstName: 'Bill'
  }
};

routes.post('/api/user/login', function (req, res) {
  const payload = req.body;

  if(auth[payload.email] && auth[payload.email] === payload.password) {
      res.status(200).json(users[payload.email]);
  } else {
      res.sendStatus(401);
  }
});

routes.get('/api/courses/:id', CourseController.index);
routes.get('/api/courses', CourseController.show);

routes.get('/api/rooms', RoomController.show);

routes.get('/api/teachers', TeacherController.show);

routes.get('/api/:tablename', DynamicController.show);
routes.delete('/api/:tablename/:id', DynamicController.destroy);


routes.post('/api/add', PostController.store);

module.exports = routes;