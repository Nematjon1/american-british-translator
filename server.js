require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const expect      = require('chai').expect;
const cors        = require('cors');

const fccTestingRoutes  = require('./routes/fcctesting.js');
const runner            = require('./test-runner');
const userRoutes        = require('./routes/api.js');

const app = express();

app.use('/public', express.static(process.cwd() + '/public'));
app.use(cors({origin: '*'})); //For FCC testing purposes only

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
