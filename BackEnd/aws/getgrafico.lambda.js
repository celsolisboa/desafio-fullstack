var AWS = require('aws-sdk'),
    documentClient = new AWS.DynamoDB.DocumentClient();

exports.handler = function index(event, context, callback) {


    const rawdata = [{
        "matematica": 845,
        "portugues": 923,
        "geografia": 942,
        "historia": 884,
        "Artes": 450
    }]

    callback(null, rawdata[0])
}