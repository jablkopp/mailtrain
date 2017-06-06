'use strict';

let express = require('express');
let router = new express.Router();
let _ = require('../lib/translate')._;

/* GET home page. */
router.get('/', (req, res) => {
    if (req.user) {
      res.render('index', {
        indexPage: true,
        title: _('Self Hosted Newsletter App')
      });
    } else {
      res.render('users/login', {
        next: req.query.next
      });
    }
});

module.exports = router;
