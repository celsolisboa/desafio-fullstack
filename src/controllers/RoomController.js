const connection = require('../database/connection');

module.exports = {
  async index(req, res) {
    connection.find("rooms")
    .then(data => {
      res.status(200).json(data);
    })
    .catch(error => {
      res.status(500).json({message: "Unable to retrieve teachers"});
    });
  }
}