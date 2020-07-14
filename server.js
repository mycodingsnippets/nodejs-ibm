const express = require('express');
const cfEnv = require('cfenv');
const bodyParser = require('body-parser');
var dbCloudantConnect = require('./config/db-conn.js');

const indexRoute = require('./routes/index');

const app = express();
require('dotenv').config();

const appEnv = cfEnv.getAppEnv();
const port = appEnv.port;

app.use(bodyParser.json());

let mydb;

dbCloudantConnect.db
    .then(function (database) {
        mydb = database;
    });


console.log(process.env.TEST_DATA);

app.use('/', indexRoute);

app.listen(port);
