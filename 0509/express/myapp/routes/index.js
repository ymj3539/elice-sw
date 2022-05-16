var express = require('express');
var router = express.Router();
const mainController = require('../controller/main');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// 해당 경로에 mainscreen 연결
router.get('/', mainController.mainscreen);

module.exports = router;
