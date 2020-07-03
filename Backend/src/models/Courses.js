const {Model, DataTypes} = require('sequelize');

class Courses extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            teachers: DataTypes.STRING,
            room: DataTypes.STRING,
            start: DataTypes.STRING,
            end: DataTypes.STRING,
        },{
            sequelize
        })
    }
};

module.exports = Courses;