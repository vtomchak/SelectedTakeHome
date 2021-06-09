const express = require('express');
const mongoose = require('mongoose');
const app = express();
const keys = require('./config/keys');
require('./models/User');

const User = mongoose.model('users');
app.get('/', (req, res) => {
  res.send({ hi: 'there there' });
});

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// require('./routes/auth')(app);

if (process.env.NODE_ENV === 'production') {
  //Express should serve up production assests
  app.use(express.static('client/build'));
  //if no route is recognized, serve index.html file
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(_dirname, 'client', 'build', 'index.html'));
  });
}
// const PORT =
app.listen(process.env.PORT || 5000);
