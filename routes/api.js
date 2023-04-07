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
  const strBadNum           = {string: 'invalid number'}
  const strNoInput          = {string: 'invalid number'}
  const strNoUnit           = {string: 'invalid unit'}
  const strBadUnit          = {string: 'invalid unit'}
  const strDoubleFraction   = {string: 'invalid number'}
  const strAllBad           = {string: 'invalid number and unit'}

  


  const convertHandler = new ConvertHandler();

  app.route('/api/convert').get((req, res, next) => {
    if (!req.query.input)                     {return res.json(strNoInput)}
    req.query.input   = convertHandler.trimInput(req.query.input)
    const initNum     = convertHandler.getNum(req.query.input)
    const initUnit    = convertHandler.getUnit(req.query.input)
    
    // Error responses
    if ((!initNum | initNum == 'error') &&
        (initUnit == 'error1' | initUnit == 'error2')){
          return res.json(strAllBad)
        }
    if (!initNum)                       { return res.json(strBadNum) }
    if (initNum == 'error')             { return res.json(strDoubleFraction) }           
    if (initUnit == 'error1')           { return res.json(strNoUnit) }
    if (initUnit == 'error2')           { return res.json(strBadUnit)} 

    // build response values
    const returnUnit  = convertHandler.getReturnUnit(initUnit)
    const returnNum   = convertHandler.convert(initNum, initUnit)
    const string      = convertHandler.getString(initNum,initUnit, returnNum, returnUnit)

    res.json({
      initNum ,
      initUnit ,
      returnNum ,
      returnUnit ,
      string
    })
  })
};
