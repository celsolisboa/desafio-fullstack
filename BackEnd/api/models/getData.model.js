module.exports = function(app) {
  const getData  = require('../controllers/getData.controller');
    // getData Routes
    app.route('/tasks')
      .get(getData.list_all_tasks)
      .post(getData.create_a_task);
  
  
    app.route('/tasks/:taskId')
      .get(getData.read_a_task)
      .put(getData.update_a_task)
      .delete(getData.delete_a_task);
  };
  