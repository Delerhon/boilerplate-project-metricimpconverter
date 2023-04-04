'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');
const express = require('express')
const app = express()

// programming

// programming end



module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.route('/api/convert').get((req, res, next) => {
      if (!inputCheck(req.query.input)) {
        res.json({string: 'nicht ok'})

      }
      res.json({string: 'test'})

  })
};

const inputCheck = (input) => {
    //input prüfen mit Regex: Nummern [Punkt oder Kommma] Nummern Buchstaben[nur gültige Einheiten]
    console.log(input)
    const regex = /^((\d+[.,]\d+)|(\d+))(gal|L|lbs|kg|mi|km)$/i
    return !!input.match(regex)
}
