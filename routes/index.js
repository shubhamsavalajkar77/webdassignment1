//var express = require('express');
//var router = express.Router();

/* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
//});

//module.exports = router;


//code for the program
const express = require('express');
const router = express.Router();

// Home Page
router.get('/', (req, res) => {
  res.render('home', { title: 'Home' });
});

// About Me Page
router.get('/about', (req, res) => {
  res.render('about', { title: 'About Me' });
});

// Projects Page
router.get('/projects', (req, res) => {
  res.render('projects', { title: 'Projects' });
});

// Services Page
router.get('/services', (req, res) => {
  res.render('services', { title: 'Services' });
});

// Contact Me Page
router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Me' });
});





module.exports = router;