var express = require('express');
var router = express.Router();
var fs=require('fs');
var api_helper = require('./api_helper');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/shopping/shirts',function (req,res) {
    res.render('detailproduct',{ title: 'Express' })
});

router.get('/shopping/troussers',function (req,res) {
    res.render('detailproduct',{ title: 'Express' })
});

router.get('/shopping/shoes',function (req,res) {
    res.render('detailproduct',{ title: 'Express' })
});

router.get('/manager',function (req,res) {
    res.render('manager',{ title: 'Express' })
});

router.get('/shopping', function(req, res, next) {
    api_helper.make_API_call('http://localhost:3000/indexserver/products')
        .then(response => {
            var obj =  [];
            /*  var jsonSp = JSON.stringify(response);*/
            response.Items.forEach(function (product) {
                    var it2 = {productName:product.productName,price:product.productInfo.price,image:product.productInfo.images.img1};
                    obj.push(it2);
            });
            res.render('listproduct.ejs', {dataa: obj });
        })
        .catch(error => {
            res.send("Web server chưa được bật, không lấy được data "+error);
        });
});

router.get('/shopping/gucci', function(req, res, next) {
    api_helper.make_API_call('http://localhost:3000/indexserver/products')
        .then(response => {
            var obj =  [];
            /*  var jsonSp = JSON.stringify(response);*/
            response.Items.forEach(function (product) {
                if(product.productInfo.brand == "Gucci")
                {
                    var it2 = {productName:product.productName,price:product.productInfo.price,image:product.productInfo.images.img1};
                    obj.push(it2);
                }
            });
            res.render('listproduct.ejs', {dataa: obj });
        })
        .catch(error => {
            res.send("Web server chưa được bật, không lấy được data "+error);
        });
});

router.get('/shopping/balenciaga', function(req, res, next) {
    api_helper.make_API_call('http://localhost:3000/indexserver/products')
        .then(response => {
            var obj =  [];
            /*  var jsonSp = JSON.stringify(response);*/
            response.Items.forEach(function (product) {
                if(product.productInfo.brand == "Balenciaga")
                {
                    var it2 = {productName:product.productName,price:product.productInfo.price,image:product.productInfo.images.img1};
                    obj.push(it2);
                }
            });
            res.render('listproduct.ejs', {dataa: obj });
        })
        .catch(error => {
            res.send("Web server chưa được bật, không lấy được data "+error);
        });
});

router.get('/shopping/shoes', function(req, res, next) {
    api_helper.make_API_call('http://localhost:3000/indexserver/products')
        .then(response => {
            var obj =  [];
            /*  var jsonSp = JSON.stringify(response);*/
            response.Items.forEach(function (product) {
                if(product.productInfo.style == "giày")
                {
                    var it2 = {productName:product.productName,price:product.productInfo.price,image:product.productInfo.images.img1};
                    obj.push(it2);
                }
            });
            res.render('listproduct.ejs', {dataa: obj });
        })
        .catch(error => {
            res.send("Web server chưa được bật, không lấy được data "+error);
        });
});

router.get('/shopping/troussers', function(req, res, next) {
    api_helper.make_API_call('http://localhost:3000/indexserver/products')
        .then(response => {
            var obj =  [];
            /*  var jsonSp = JSON.stringify(response);*/
            response.Items.forEach(function (product) {
                if(product.productInfo.style == "quần")
                {
                    var it2 = {productName:product.productName,price:product.productInfo.price,image:product.productInfo.images.img1};
                    obj.push(it2);
                }
            });
            res.render('listproduct.ejs', {dataa: obj });
        })
        .catch(error => {
            res.send("Web server chưa được bật, không lấy được data "+error);
        });
});

router.get('/shopping/shirts', function(req, res, next) {
    api_helper.make_API_call('http://localhost:3000/indexserver/products')
        .then(response => {
            var obj =  [];
            /*  var jsonSp = JSON.stringify(response);*/
            response.Items.forEach(function (product) {
                if(product.productInfo.style == "áo")
                {
                    var it2 = {productName:product.productName,price:product.productInfo.price,image:product.productInfo.images.img1};
                    obj.push(it2);
                }
            });
            res.render('listproduct.ejs', {dataa: obj });
        })
        .catch(error => {
            res.send("Web server chưa được bật, không lấy được data "+error);
        });
});

router.get('/shopping/chanel', function(req, res, next) {
    api_helper.make_API_call('http://localhost:3000/indexserver/products')
        .then(response => {
            var obj =  [];
            /*  var jsonSp = JSON.stringify(response);*/
            response.Items.forEach(function (product) {
                if(product.productInfo.brand == "Chanel")
                {
                    var it2 = {productName:product.productName,price:product.productInfo.price,image:product.productInfo.images.img1};
                    obj.push(it2);
                }
            });
            res.render('listproduct.ejs', {dataa: obj });
        })
        .catch(error => {
            res.send("Web server chưa được bật, không lấy được data "+error);
        });
});

router.get('/shopping/nike', function(req, res, next) {
    api_helper.make_API_call('http://localhost:3000/indexserver/products')
        .then(response => {
            var obj =  [];
            /*  var jsonSp = JSON.stringify(response);*/
            response.Items.forEach(function (product) {
                if(product.productInfo.brand == "Nike")
                {
                    var it2 = {productName:product.productName,price:product.productInfo.price,image:product.productInfo.images.img1};
                    obj.push(it2);
                }
            });
            res.render('listproduct.ejs', {dataa: obj });
        })
        .catch(error => {
            res.send("Web server chưa được bật, không lấy được data "+error);
        });
});

router.get('/shopping/adidas', function(req, res, next) {
    api_helper.make_API_call('http://localhost:3000/indexserver/products')
        .then(response => {
            var obj =  [];
            /*  var jsonSp = JSON.stringify(response);*/
            response.Items.forEach(function (product) {
                if(product.productInfo.brand == "Adidas")
                {
                    var it2 = {productName:product.productName,price:product.productInfo.price,image:product.productInfo.images.img1};
                    obj.push(it2);
                }
            });
            res.render('listproduct.ejs', {dataa: obj });
        })
        .catch(error => {
            res.send("Web server chưa được bật, không lấy được data "+error);
        });
});

router.get('/shopping/vans', function(req, res, next) {
    api_helper.make_API_call('http://localhost:3000/indexserver/products')
        .then(response => {
            var obj =  [];
            /*  var jsonSp = JSON.stringify(response);*/
            response.Items.forEach(function (product) {
                if(product.productInfo.brand == "Vans")
                {
                    var it2 = {productName:product.productName,price:product.productInfo.price,image:product.productInfo.images.img1};
                    obj.push(it2);
                }
            });
            res.render('listproduct.ejs', {dataa: obj });
        })
        .catch(error => {
            res.send("Web server chưa được bật, không lấy được data "+error);
        });
});

router.get('/public/images/:id',function (req,res) {
  let data=fs.readFileSync('./public/images/'+ req.params.id);
  res.write(data);
  res.end();
})
module.exports = router;
