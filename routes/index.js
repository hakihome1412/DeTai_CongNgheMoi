var express = require('express');
var router = express.Router();
var fs=require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/public/images/:id',function (req,res) {
  let data=fs.readFileSync('./public/images/'+ req.params.id);
  res.write(data);
  res.end();
})
module.exports = router;
