module.exports = function (sequelize, DataTypes) {
    const Cursos =  sequelize.define('Cursos', {
        nome: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        horaInicio: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            field: "HORA_INICIO"
        },
        horaFim: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            field: "HORA_FIM"
        },
    },{
        freezeTableName: true,
        tableName: 'CURSOS'
    })

    Cursos.associate = models => {
        Cursos.belongsToMany(models.Professores, {through: "CURSOS_PROFESSORES", as: "Professores", foreignKey: "ID_CURSO"})
        Cursos.belongsToMany(models.Salas, {through: "CURSOS_SALAS", as: "Salas", foreignKey: "ID_CURSO"})
    }

    // Cursos.associate = models => {
        
    // }

    return Cursos

};