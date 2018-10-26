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
        }
        else {
            const arr_Data = data.Items;
            const Arr_professor = [];

            for (let i = 0; i < arr_Data.length; i++) {
                const element = arr_Data[i];
                if (Arr_professor.indexOf(element.professor) <= -1) {
                    Arr_professor.push(element.professor);
                }
                else {
                    console.log('N adiciona');
                }
            }
            callback(null, Arr_professor);
        }
    });
};
