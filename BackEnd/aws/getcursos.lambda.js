var AWS = require('aws-sdk'),
    documentClient = new AWS.DynamoDB.DocumentClient();

exports.handler = function index(event, context, callback) {
    console.log(event);
    var params = {
        TableName: process.env.TABLE_NAME
    };
    documentClient.scan(params, function (err, data) {
        if (err) {
            callback(err, null);
        } else {
            callback(null, data);
        }
    });
};