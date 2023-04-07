const chaiHttp = require('chai-http');
const chai = require('chai');
const assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', () => {
    test('#1 Convert 10L to gallons', (done) => {
        const testParam = '10L'
        after(() => {
          chai.request(server).get('/api')
        })
        chai
          .request(server)
          .get(`/api/convert?input=${testParam}`)
          .end((err, res) => {
            assert.equal(res.status, 200);
            assert.equal(res.body.string, '10 litres converts to 2.64172 gallons');
            done()
          })
    })

    test('#2 Give Error for invalid input: 32g', (done) => {
        const testParam = '32g'
        after(() => {
          chai.request(server).get('/api')
        })
        chai
          .request(server)
          .get(`/api/convert?input=${testParam}`)
          .end((err, res) => {
            assert.equal(res.status, 200);
            assert.equal(res.body, 'invalid unit');
            done()
          })
    })

    test('#3 Give Error for invalid input: 3/7.2/4kg', (done) => {
        const testParam = '3/7.2/4kg'
        after(() => {
          chai.request(server).get('/api')
        })
        chai
          .request(server)
          .get(`/api/convert?input=${testParam}`)
          .end((err, res) => {
            assert.equal(res.status, 200);
            assert.equal(res.body, 'invalid number');
            done()
          })
    })

    test('#4 Give Error for invalid input: 3/7.2/4kilomegagram', (done) => {
        const testParam = '3/7.2/4kilomegagram'
        after(() => {
          chai.request(server).get('/api')
        })
        chai
          .request(server)
          .get(`/api/convert?input=${testParam}`)
          .end((err, res) => {
            assert.equal(res.status, 200);
            assert.equal(res.body, 'invalid number and unit');
            done()
          })
    })

    test('#5 Convert with no numer but kg', (done) => {
        const testParam = 'kg'
        after(() => {
          chai.request(server).get('/api')
        })
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


