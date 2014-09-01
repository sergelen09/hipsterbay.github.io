'use strict';

var User = require('../models/user'),
    Message = require('../models/message');

exports.new = function(req, res){
  console.log(req.params.receiverId);
  User.findById(req.params.receiverId, function(user){
    res.render('messages/new-message', {receiver: user});
  });
};

exports.send = function(req, res){
   User.findById(req.params.receiverId, function(receiver){
      res.locals.user.send(receiver, req.body, function(){
      res.redirect('/auction/search');
    });
  });
};



