const DB = require('../database/connection');

module.exports = {
  async store(req, res) {
    DB.add(req.body.tablename,req.body.data)
      .then(course => {
        res.status(200).json(course)
      })
      .catch(error  => {
        res.status(500).json({message: "Cannot add data"})
      });
  }
}

// JSON data example
//
// {
//     "tablename": "courses",
//     "data": {
//     "course_title": "Math course",
//         "time_start": "10 am",
//         "time_end": "10 pm"
// }
// }