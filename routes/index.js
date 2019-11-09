var express = require('express');
var router = express.Router();
var fs = require('fs');
/* GET home page. */
router.get('/', async function (req, res, next) {

  let showTiTle = 'Heroku~';
   fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
    fs.readFile('mynewfile1.txt', function (err, data) {
     showTiTle = data;
     console.log('read!',showTiTle);
     res.render('index', { title: showTiTle });
   });
  });



});

module.exports = router;
