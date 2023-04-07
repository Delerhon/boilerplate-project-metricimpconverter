const chai = require('chai');
const assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');
const { Test } = require('mocha');

const convertHandler = new ConvertHandler();

const galToL    = 3.78541;
const lbsToKg   = 0.453592;
const miToKm    = 1.60934;

// Number value tests
const wholeNumber                   =   '1kg'
const decimalNumber                 =   '1,1kg'
const fractialNumber                =   '3/2kg' 
const fractialNumberWithDecimal     =   '3,3/2.4kg' 
const doubleFractional              =   '3/4/9kg' 
const strNoNum                      =   'kg' 

// Unit value tests
    // good values
const strUnits                   =   {kg:'kg',lbs: 'lbs',L: 'L',gal: 'gal',km: 'km',mi: 'mi'}
const strKg                         =   '13kg'
const strLbs                        =   '13lbs'
const strL                          =   '13L'
const strGal                        =   '13gal'
const strKm                         =   '13km'
const strMi                         =   '13mi'
    // bad values
const strBad                        =   '13im'    

suite('Unit Tests', () => {
    // #1
    test('whole number', () => {
        const input = convertHandler.getNum(wholeNumber)
        assert.isNumber(input,          `Handler gives a number`)
        assert.equal(input % 1, 0,      `Handler can handle whole numbers`);
    })
    // #2
    test('decimal number', () => {
        const input = convertHandler.getNum(decimalNumber)
        assert.isNumber(input,          `Handler gives a number`)
        assert.notEqual(input % 1, 0,   `Handler can handle decimal numbers`);
    })

    // #3
    test('fractial input', () => {
        const input = convertHandler.getNum(fractialNumber)
        assert.isNumber(input,          `Handler makes Number from fractional`)
    })

    // #4
    test('fractial input with decimal', () => {
        const input = convertHandler.getNum(fractialNumberWithDecimal)
        assert.isNumber(input,          `Handler makes Number from fractional`)
    })

    // #5
    test('error on double fraction', () => {
        const input = convertHandler.getNum(doubleFractional)
        assert.equal(input, 'error',          `throw Error on double friction`)
    })

    // #6
    test('default Num to 1 if no num input', () => {
        const input = convertHandler.getNum(strNoNum)
        assert.equal(input, 1,          `set 1 if no num is in input`)
    })

    // #7
    test('read each valid input', () => {
        assert.equal(convertHandler.getUnit(strL),      'L',    `read L`)
        assert.equal(convertHandler.getUnit(strGal),    'gal',  `read gal`)
        assert.equal(convertHandler.getUnit(strMi),     'mi',   `read mi`)
        assert.equal(convertHandler.getUnit(strKm),     'km',   `read km`)
        assert.equal(convertHandler.getUnit(strLbs),    'lbs',  `read lbs`)
        assert.equal(convertHandler.getUnit(strKg),     'kg',   `read kg`)
    })

    // #8
    test('return error for an invalid unit input', () => {
        assert.isTrue(/error/.test(convertHandler.getUnit(strBad)),    `read L`)
    })

    // #9
    test('return correct return unit for each valid input unit', () => {
        assert.equal(convertHandler.getReturnUnit(strUnits.L),      'gal',    `get gal`)
        assert.equal(convertHandler.getReturnUnit(strUnits.gal),    'L',      `get L`)
        assert.equal(convertHandler.getReturnUnit(strUnits.mi),     'km',     `get km`)
        assert.equal(convertHandler.getReturnUnit(strUnits.km),     'mi',     `get mi`)
        assert.equal(convertHandler.getReturnUnit(strUnits.lbs),    'kg',     `get kg`)
        assert.equal(convertHandler.getReturnUnit(strUnits.kg),     'lbs',    `get lbs`)
    })

    // #10
    test('correct spelled Units', () => {
        assert.equal(convertHandler.spellOutUnit(strUnits.gal),     'gallons',      `correct spell for gal`)
        assert.equal(convertHandler.spellOutUnit(strUnits.L),       'litres',       `correct spell for L`)
        assert.equal(convertHandler.spellOutUnit(strUnits.kg),      'kilograms',    `correct spell for kg`)
        assert.equal(convertHandler.spellOutUnit(strUnits.lbs),     'pounds',       `correct spell for lbs`)
        assert.equal(convertHandler.spellOutUnit(strUnits.mi),      'miles',        `correct spell for mi`)
        assert.equal(convertHandler.spellOutUnit(strUnits.km),      'kilometers',   `correct spell for km`)
    })

    // #11
    test('convert gal to L', () => {
        const initNum = 13
        assert.equal(convertHandler.convert(initNum, 'gal'),     Math.round(initNum * galToL * 100_000) / 100_000,       `correct value for gal`)
    })

    // #12
    test('convert L to gal', () => {
        const initNum = 13
        assert.equal(convertHandler.convert(initNum, 'L'),     Math.round(initNum / galToL * 100_000) / 100_000,       `correct value for gal`)
    })

    // #12
    test('convert km to mi', () => {
        const initNum = 13
        assert.equal(convertHandler.convert(initNum, 'km'),     Math.round(initNum / miToKm * 100_000) / 100_000,       `correct value for gal`)
    })

    // #13
    test('convert mi to km', () => {
        const initNum = 13
        assert.equal(convertHandler.convert(initNum, 'mi'),     Math.round(initNum * miToKm * 100_000) / 100_000,       `correct value for gal`)
    })

    // #14
    test('convert kg to lbs', () => {
        const initNum = 13
        assert.equal(convertHandler.convert(initNum, 'kg'),     Math.round(initNum / lbsToKg * 100_000) / 100_000,       `correct value for gal`)
    })

    // #15
    test('convert lbs to kg', () => {
        const initNum = 13
        assert.equal(convertHandler.convert(initNum, 'lbs'),     Math.round(initNum * lbsToKg * 100_000) / 100_000,       `correct value for gal`)
    })

});