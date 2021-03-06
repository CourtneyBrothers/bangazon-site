'use strict';

const express = require('express');
const app = express();
const passport = require('passport');

module.exports.displaySellProduct = (req, res) => {
  res.render('sellProduct');
};

// Today's Date function
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();
if(dd<10) {
    dd = '0'+dd
} 
if(mm<10) {
    mm = '0'+mm
} 
today = yyyy + '-' + mm + '-' + dd;

module.exports.sellProduct = (req, res, next) => {
  const { Product, User } = req.app.get('models');
  req.body.user_id = req.session.passport.user.id;
  req.body.listing_date = today;
  Product.create(req.body).then(product => {
    res.render("productDetail", {product})
  });
};

