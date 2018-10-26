var AWS = require('aws-sdk'),
    documentClient = new AWS.DynamoDB.DocumentClient();

exports.handler = function index(event, context, callback) {
    console.log(event)

    var params = {
        TableName: process.env.TABLE_NAME,
        Key: {
            id: event.id
        }
    };
    documentClient.delete(params, function (err, data) {
        console.log('o q temos aqui?', data);
        callback(err, 'Item Deletado');
    });
};