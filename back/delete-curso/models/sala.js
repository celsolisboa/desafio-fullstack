
module.exports = function (sequelize, DataTypes) {
    const Salas = sequelize.define('Salas', {
        nome: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            field: "DESCRICAO"
        },
    },{
        freezeTableName: true,
        tableName: 'SALAS'
    })

    Salas.associate = models => {
        Salas.belongsToMany(models.Cursos, {through: "CURSOS_SALAS", as: "Cursos", foreignKey: "ID_SALA"})
    }

    return Salas
};