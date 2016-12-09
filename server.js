'use strict'
require('dotenv').config({ silent: true });
const express = require('express');
const logger  = require('morgan');
const path    = require('path');
const cookieParser  = require('cookie-parser');
const bodyParser = require('body-parser');
const usersRouter   = require('./routes/api/users');
const authRouter    = require('./routes/api/auth');
const watsonRouter = require('./routes/api/watson');
const databaseRouter = require('./routes/api/database');

const app     = express();
const PORT    = process.argv[2] || process.env.PORT || 3000;

app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'dist')));

app.use(cookieParser());

app.use(bodyParser.json());

app.use('/api/watson', watsonRouter);
app.use('/api/database', databaseRouter);
app.use('/api/users', usersRouter);
app.use('/api/auth', authRouter);

app.listen(PORT, () => console.log('Hey there', PORT));
