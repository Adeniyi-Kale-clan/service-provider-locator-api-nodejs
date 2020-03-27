const dotenv = require('dotenv');
const express = require('express');
const cookieParser = require('cookie-parser');

dotenv.config();

const app = express();

/*
* require all routes here e.g.
* const userSignup = require('./routes/userSignup');
*/

// setting header access controls
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', `${process.env.ACCESS_CONTROL_ALLOW_ORIGIN || '*'}`);
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization, Set-Cookie');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  res.setHeader('Access-Control-Expose-Headers', 'Authorization, X-Refresh-Token');
  next();
});

// middlewares to read certain client request data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

/*
* call all routes here e.g.
* app.use('/auth/users', [UserSignup, UserLogin]);
*/

module.exports = app;
