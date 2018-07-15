const express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/db-crm-jade');
const app = express();


app.use(express.json());

app.set('views' , './views')
app.set('view engine' , 'pug')



// Home route
app.get('/', (req, res) => {
  res.render('index')
})


const customersRouter = require('./api/customers');
app.use('/api/customers', customersRouter);

app.listen(5000, (err) => {
  if (!err) console.log('Server listening in port 5000');
  else console.error(err);
});