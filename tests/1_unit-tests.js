const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

const testInput =       '1kg'             // <<<<<<<<<<<<<=====================================

suite('Unit Tests', () => {
    // #1
    test('whole number', () => {
        const input = convertHandler.getNum(testInput)
        assert.isNumber(input, `Handler gives a number`)
        assert.equal(input % 1, 0, `Handler can handle whole numbers`);
    })

});