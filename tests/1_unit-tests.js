const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

const wholeNumber   =   '1kg'
const decimalNumber =   "1,1kg"

suite('Unit Tests', () => {
    // #1
    test('whole number', () => {
        const input = convertHandler.getNum(wholeNumber)
        assert.isNumber(input,      `Handler gives a number`)
        assert.equal(input % 1, 0,  `Handler can handle whole numbers`);
    })

    test('decimal number', () => {
        const input = convertHandler.getNum(decimalNumber)
        assert.isNumber(input,      `Handler gives a number`)
        assert.notEqual(input % 1, 0,  `Handler can handle decimal numbers`);
    })

});