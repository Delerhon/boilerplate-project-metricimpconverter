const chaiHttp = require('chai-http');
const chai = require('chai');
const assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', () => {
    test('Convert 10L to gallons', (done) => {
        const testParam = '10L'
        chai
          .request(server)
          .get(`/api/convert?input=${testParam}`)
          .end((err, res) => {
            assert.equal(res.status, 200);
            assert.equal(res.body.string, '10 litres converts to 2.64172 gallons');
            done()
          })
    })

    test('Give Error for invalid input: 32g', (done) => {
        const testParam = '32g'

        chai
          .request(server)
          .get(`/api/convert?input=${testParam}`)
          .end((err, res) => {
            assert.equal(res.status, 200);
            assert.equal(res.body.string, 'Bad input! Your Unit is bad or isn\'t supported.');
            done()
          })
    })

    test('Give Error for invalid input: 3/7.2/4kg', (done) => {
        const testParam = '3/7.2/4kg'

        chai
          .request(server)
          .get(`/api/convert?input=${testParam}`)
          .end((err, res) => {
            assert.equal(res.status, 200);
            assert.equal(res.body.string, 'Bad input! Can\'t handle double fraction.');
            done()
          })
    })

    test('Give Error for invalid input: 3/7.2/4kilomegagram', (done) => {
        const testParam = '3/7.2/4kilomegagram'

        chai
          .request(server)
          .get(`/api/convert?input=${testParam}`)
          .end((err, res) => {
            assert.equal(res.status, 200);
            assert.equal(res.body.string, 'Bad input! Number and unit are invalid.');
            done()
          })
    })

    test('Convert with no numer but kg', (done) => {
        const testParam = 'kg'

        chai
          .request(server)
          .get(`/api/convert?input=${testParam}`)
          .end((err, res) => {
            assert.equal(res.status, 200);
            assert.equal(res.body.string, '1 kilograms converts to 2.20462 pounds');
            done()
          })
    })
})


