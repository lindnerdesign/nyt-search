const db = require("../models");

// Defining methods for the controller
module.exports = {
  findAll: function(req, res) {
    console.log(`findAll`)
    db.Article
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(400).json(err));
  },
  findById: function(req, res) {
    db.Article
      .findById(req.params._id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(401).json(err));
  },
  create: function(req, res) {
    console.log(req.body)
    db.Article
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(402).json(err));
  },
  update: function(req, res) {
    db.Article
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(403).json(err));
  },
  remove: function(req, res) {
    db.Article
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(404).json(err));
  }
};
