const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost/db-crm-jade');

app.get('/', (req, res) => {

  res.send('Hola mundo')
})

app.listen(5000, (err) => {
  if (!err) console.log('Server listening in port 5000');
  else console.error(err);
});