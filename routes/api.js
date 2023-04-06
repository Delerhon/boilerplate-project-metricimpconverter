'use strict';

// const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');
const express = require('express')
const app = express()

// programming
app.route('/api/convert').get((req, res, next) => {

})

// programming end



module.exports = (app) => {
  const strBadNum   = {string: 'Bad input! You didn\'t give a number.'}
  const strNoInput  = {string: 'No input! Come on and type something in!'}
  const strNoUnit   = {string: 'No input! Your Unit is bad or isn\'t supported.'}
  const strBadUnit  = {string: 'Bad input! Your Unit is bad or isn\'t supported.'}

  const convertHandler = new ConvertHandler();

  app.route('/api/convert').get((req, res, next) => {
    if (!req.query.input)                     {return res.json(strNoInput)}
    req.query.input   = convertHandler.trimInput(req.query.input)
    req.query.num     = convertHandler.getNum(req.query.input)
    if (!req.query.num)                       { return res.json(strBadNum)} 
    req.query.unit    = convertHandler.getUnit(req.query.input)
    if (req.query.unit == 'noLettersFound')   { return res.json(strNoUnit)}
    if (!req.query.unit)                      { return res.json(strBadUnit)}
    
      
    res.json({string: `${initNum} ${initUnitString} converts to ${returnNum} ${returnUnitString}`})
  })
};
 /*
 Your return will consist of the 
 initNum, initUnit, returnNum, returnUnit, string spelling out units in the format '{initNum} {initUnitString} converts to {returnNum} {returnUnitString}' with the result rounded to 5 decimals.
 */