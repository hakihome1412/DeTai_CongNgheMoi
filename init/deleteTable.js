var AWS = require("aws-sdk");

AWS.config.update({
    region: "us-west-2",
    endpoint: "http://localhost:8001",
    accessKeyId:"quang1",
    secretAccessKey:"quang2"
});

var dynamodb = new AWS.DynamoDB();


var paramsSanPham = {
    TableName : "Products",
};
dynamodb.deleteTable(paramsSanPham, function(err, data) {
    if (err) {
        console.error("Unable to delete table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Table SanPham Deleted. Table description JSON:", JSON.stringify(data, null, 2));
    }
});