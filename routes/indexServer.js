var express = require('express');
var router = express.Router();
var app = express();
var AWS = require("aws-sdk");

AWS.config.update({
    region: "us-west-2",
    endpoint: "http://localhost:8001",
    accessKeyId:"quang1",
    secretAccessKey:"quang2"
});

var docClient = new AWS.DynamoDB.DocumentClient();

router.get('/products', function(req, res) {
    var param = {
        TableName: "Products"
    };

    docClient.scan(param,function (err,data) {
        if (err) {
            console.error(err);
            res.end();
        }
        res.json(data);
    });
});

module.exports = router;