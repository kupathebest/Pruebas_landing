var express = require('express');
var router = express.Router();
const {index, enviarMail} = require("../controllers/indexController")

/* GET home page. */
router.get('/', index);
router.post("/", enviarMail);

module.exports = router;
