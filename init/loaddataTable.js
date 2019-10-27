var AWS = require("aws-sdk");
var fs = require('fs');

AWS.config.update({
    region: "us-west-2",
    endpoint: "http://localhost:8001",
    accessKeyId:"quang1",
    secretAccessKey:"quang2"
});

var docClient = new AWS.DynamoDB.DocumentClient();

var allProducts = JSON.parse(fs.readFileSync(__dirname+'/products.json', 'utf8'));
allProducts.forEach(function(product) {
    var params = {
        TableName: "Products",
        Item: {
            "productID":  product.productID,
            "productName": product.productName,
            "productInfo":  product.productInfo,
            "productDayCreate":product.productDayCreate,
            "productQuantity":product.productQuantity,
            "productStatusSale":product.productStatusSale,
        }
    };

    docClient.put(params, function(err, data) {
        if (err) {
            console.error("Unable to add SanPham: ", product, ". Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("PutItem SanPham succeeded:", product);
        }
    });
});