const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/db-crm-jade');

const passport = require('passport');
const TwitterStrategy = require('passport-twitter');
const app = express();

const User = require('./api/users/users.model');

app.use(express.json());

app.use(session({
  secret: 'keyboard cat',
  resave: true
}))

app.set('views', './views')
app.set('view engine', 'pug')

// @ts-ignore
passport.use(new TwitterStrategy({
  consumerKey: "1YI2HGg7NQVPuLmO2G2E8DYt1",
  consumerSecret: "aTDt3hgwzjKSv0Yn1gLhzaikS60FFZ3jIeMxkdUVOVL5vR0hCZ",
  callbackURL: "http://localhost:5000/auth/twitter/callback"
},
  function (token, tokenSecret, profile, cb) {
    User.findOneAndUpdate({ provider: 'Twitter', provider_id: profile.id }, { profile: profile }, { upsert: true }, function (err, user) {
      return cb(err, user);
    });
  }
));
app.get('/auth/twitter', passport.authenticate('twitter'));

app.get('/auth/twitter/callback',
  passport.authenticate('twitter', { successRedirect : '/api/customers', failureRedirect: '/login' }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });


// Home route
app.get('/', (req, res) => {
  res.render('index')
})

const customersRouter = require('./api/customers');
app.use('/api/customers', passport.authenticate('twitter'), customersRouter);

app.listen(5000, (err) => {
  if (!err) console.log('Server listening in port 5000');
  else console.error(err);
});