var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');

/* GET home page. */
router.get('/', ctrlMain.home);
router.get('/home', ctrlMain.home);
router.get('/about', ctrlMain.about);
router.get('/portfolio', ctrlMain.portfolio);
router.get('/contact', ctrlMain.contact);

module.exports = router;
