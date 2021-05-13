const courses = require('./courses')

module.exports = (app) => {
  app.get('/courses/:id', courses.getOne)
  app.get('/courses', courses.get)
  app.post('/courses', courses.post)
  app.put('/courses/:id', courses.put)
  app.delete('/courses/:id', courses.delete)
}
