var express = require('express');
var router = express.Router();
var fs = require('fs');


var formidable = require('formidable');
/* GET home page. */
router.get('/', function (req, res, next) {

  let showTiTle = 'Heroku~';
  fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
    fs.readFile('mynewfile1.txt', function (err, data) {
      showTiTle = data;
      console.log('read!', showTiTle);
      res.render('index', { title: showTiTle });
    });
  });

});

router.post('/fileupload', function (req, res, next) {

  console.log('/fileupload');

  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {

      var oldpath = files.filetoupload.path;
      var newpath = './public/images/' + files.filetoupload.name;
      fs.rename(oldpath, newpath, function (err) {
        if (err) {
          res.render('index', { title: "error!!.... uploaded:" +err}); 
        } else {
          res.render('index', { title: "Great!.... uploaded" });
        }
      });

    });

  } else {
    res.render('index', { title: "no.... uploaded fail" });
  }

});
module.exports = router;
