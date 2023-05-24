var express = require('express');
var router = express.Router();
var Article = require('../models/articals');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('articleForm');
});

router.get('/:id/edit', (req, res, next) => {
  var id = req.params.id;

  Article.findByIdAndUpdate(id, req.body)
    .the((updatedArticle) => {
      res.send(updatedArticle);
    })
    .catch((err) => {
      res.send(err);
      res.redirect('/user')
    });
});

module.exports = router;
