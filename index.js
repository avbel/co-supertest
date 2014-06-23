"use strict";
var supertest = require("supertest");
var Test = supertest.Test;

var oldEnd = Test.prototype.end;

Test.prototype.end = function(){
  if(arguments.length > 0)
    return oldEnd.apply(this, arguments);
  var self = this;
  return function(callback){
    oldEnd.call(self, function(err, res){
      // allow events handlers to run first
      process.nextTick(function(){
        callback(err, res);
      });
    });
  };
}

module.exports = supertest;
