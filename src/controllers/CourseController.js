const connection = require('../database/connection');

module.exports = {
  async index(req, res) {
    connection.find("courses")
    .then(async (data) => {
      let CoursesArr = [];

      for (let i = 0; i < data.length; i++) {
        CoursesArr.push(await details(data[i]));
      }

      res.status(200).json(CoursesArr);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({message: "Unable to retrieve courses"});
    });
  },

  async show(req, res) {
    connection.findById("courses", req.params.id)
    .then(async (data) => {
      res.status(200).json(await details(data[0]));
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({message: "Unable to retrieve courses"});
    });
  }
}