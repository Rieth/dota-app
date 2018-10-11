const Hero = require('../models/hero');
const path = require('path');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const db = mongoose.connection;

exports.getHero = (req, res) => {
    console.log('nodemon');
};

exports.postHero = (req, res) => {
  db.collection('heroes').insertOne(req.body, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database');
    res.redirect('/');
  });
};