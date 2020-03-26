const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  development: {
    user: process.env.DEV_DB_USER,
    host: process.env.DEV_DB_HOST,
    database: process.env.DEV_DB_DATABASE,
    password: process.env.DEV_DB_PASSWORD,
    port: process.env.DEV_DB_PORT,
  },
  test: {
    user: process.env.TEST_DB_USER,
    host: process.env.TEST_DB_HOST,
    database: process.env.TEST_DB_DATABASE,
    password: process.env.TEST_DB_PASSWORD,
    port: process.env.TEST_DB_PORT,
  },
  'test ': {
    user: process.env.TEST_DB_USER,
    host: process.env.TEST_DB_HOST,
    database: process.env.TEST_DB_DATABASE,
    password: process.env.TEST_DB_PASSWORD,
    port: process.env.TEST_DB_PORT,
  },
  production: {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
  }
};
