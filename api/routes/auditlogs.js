var express = require('express');
const { param } = require('.');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    body: req.body,
    params: req.params,
    query: req.query,
    headers: req.headers
    
  });
});

module.exports = router;
