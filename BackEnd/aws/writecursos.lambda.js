
var AWS = require('aws-sdk'),
    documentClient = new AWS.DynamoDB.DocumentClient();

exports.handler = function index(event, context, callback) {
    console.log(event)

    var params = {
        Item: {
            "id": event.id,
            "sala": event.sala,
            "professor": event.professor,
            "materia": event.materia,
            "horaInicial": event.horaInicial,
            "horaFinal": event.horaFinal
        },
        TableName: process.env.TABLE_NAME
    };

    documentClient.put(params, function (err, data) {
        console.log('o q temos aqui?', data)
        callback(err, 'Item foi adicionado com sucesso');
    });
};