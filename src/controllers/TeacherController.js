const DB = require('../database/connection');

module.exports = {
  async show(req, res) {
    DB.find("teachers")
    .then(data => {
      res.status(200).json(data);
    })
    .catch(error => {
      res.status(500).json({message: "Unable to retrieve teachers"});
    });
  }
}