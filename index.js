const express = require('express');
const mongoose = require('mongoose');
const app = express();
const keys = require('./config/keys');
const bodyParser = require('body-parser');
require('./routes/auth')(app);
require('./models/User');

const User = mongoose.model('users');
// app.get('/', (req, res) => {
//   res.send({ hi: 'there there' });
// });
app.use(bodyParser.json());
mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

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
