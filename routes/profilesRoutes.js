var express = require('express');
var profilesDAO = require('../models/profilesDAO');
var router = express.Router();

router.get('/', function(req, res, next) {
  profilesDAO.getProfiles(function(err, result) {
      if (err) {
          res.status(result.code).json(err);
          return;
      }
      res.status(result.code).send(result.data);
  }, next)
});

router.get('/:id', function(req, res, next) {
  profilesDAO.getProfileId(function(err, result) {
      if (err) {
          res.status(result.code).json(err);
          return;
      }
      res.status(result.code).send(result.data);
  }, next)
});

module.exports = router;
