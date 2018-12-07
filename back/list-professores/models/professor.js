
module.exports = function (sequelize, DataTypes) {
    const Professores = sequelize.define('Professores', {
        nome: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
    },{
        freezeTableName: true,
        tableName: 'PROFESSORES'
    })

    
    Professores.associate = models => {
        Professores.belongsToMany(models.Cursos, {through: "CURSOS_PROFESSORES", as: "Cursos", foreignKey: "ID_PROFESSOR"})
    }

    return Professores
};