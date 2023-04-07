'use strict';

const express     = require('express');
const bodyParser  = require('body-parser');
const expect      = require('chai').expect;
const cors        = require('cors');
require('dotenv').config();
const colors      = require('colors')


const apiRoutes         = require('./routes/api.js');
const fccTestingRoutes  = require('./routes/fcctesting.js');
const runner            = require('./test-runner');

const app = express();

app.use('/public', express.static(`${process.cwd()}/public`));

app.use(cors({origin: '*'})); //For FCC testing purposes only

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res) => {
  console.log(`${req.method} ${req.originalUrl}`)
})

//Index page (static HTML)
app.route('/')
  .get((req, res) => {
    res.sendFile(`${process.cwd()}/views/index.html`);
  });

//For FCC testing purposes
fccTestingRoutes(app);

//Routing for API 
apiRoutes(app);  
    
//404 Not Found Middleware
app.use((req, res, next) => {
  res.status(404)
    .type('text')
    .send('Not Found');
});

const port = process.env.PORT || process.env['PORT'] ||3000;
const nodeENV = process.env['NODE_ENV'] || process.env.NODE_ENV

//Start our server and tests!
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
  if(nodeENV==='test') {
    console.log('Running Tests...');
    setTimeout(() => {
      try {
        runner.run();
      } catch(e) {
          console.log('Tests are not valid:')
          console.error(e)
      }
    }, 1500);
  }
});

module.exports = app; //for testing
