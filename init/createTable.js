var AWS = require("aws-sdk");

AWS.config.update({
    region: "us-west-2",
    endpoint: "http://localhost:8001",
    accessKeyId:"quang1",
    secretAccessKey:"quang2"
});

var dynamodb = new AWS.DynamoDB();

var paramsProducts = {
    TableName : "Products",
    KeySchema: [
        { AttributeName: "productID", KeyType: "HASH"},  //Partition key

    ],
    AttributeDefinitions: [
        { AttributeName: "productID", AttributeType: "N" },

    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 10,
        WriteCapacityUnits: 10
    }
};

dynamodb.createTable(paramsProducts, function(err, data) {
    if (err) {
        console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
    }
});