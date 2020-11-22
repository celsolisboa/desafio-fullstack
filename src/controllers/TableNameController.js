const connection = require('../database/connection');

module.exports = {
  async index(req, res) {
    connection.find(req.params.tablename)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(error  => {
      res.status(500).json({message: "Unable to retrieve data"});
    });

  // Small explanation
  // rooms - table name, you can change it dynamically and get everything
  // http://localhost:5000/api/rooms
  },

  async store(req, res) {
    connection.add(req.body.tablename,req.body.data)
    .then(course => {
      res.status(200).json(course)
    })
    .catch(error  => {
      res.status(500).json({message: "Cannot add data"})
    });
  },

  async delete(req, res) {
    connection.deleteById(req.params.tablename, req.params.id)
      .then(async (course) => {
        await connection.deleteWithId("course-teacher", req.params.id)
          .catch(error => {
            res.status(500).json({message: "Cannot delete course-teacher"});
          });
        await connection.deleteWithId("course-room", req.params.id)
          .catch(error => {
              res.status(500).json({message: "Cannot delete course-room"});
          });

        res.status(200).json("Deleted "+req.params.id);
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({message: "Cannot delete data"})
      });
  }
}