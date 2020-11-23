const DB = require('../database/connection');

module.exports = {
  async show(req, res) {
    DB.find(req.params.tablename)
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

  async destroy(req, res) {
    DB.deleteById(req.params.tablename, req.params.id)
      .then(async (course) => {
        await DB.deleteWithId("course-teacher", req.params.id)
          .catch(error => {
            res.status(500).json({message: "Cannot delete course-teacher"});
          });
        await DB.deleteWithId("course-room", req.params.id)
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