const path = require('path');

module.exports = {
  "config": path.resolve('./src/database', 'config.js'),
  "models-path": path.resolve('./src/models'),
  "seeders-path": path.resolve('./src/seeders'),
  "migrations-path": path.resolve('./src/migrations')
};
