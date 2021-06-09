if (process.env.NODE_ENV === 'production') {
  // when deploying use production keys
  module.exports = require('./prod');
} else {
  // in development use dev config keys
  module.exports = require('./dev');
}
