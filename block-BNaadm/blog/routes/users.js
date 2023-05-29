var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Comment = require('../models/comment');

/* GET users listing. */
router.get('/list', function (req, res, next) {
  res.render('userList');
});

router.get('/userForm', (req, res, next) => {
  res.render('addUser');
});

module.exports = router;
