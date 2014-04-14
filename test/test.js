"use strict";
let supertest = require("../");
let koa = require("koa");

describe("co-supertest", function(){
  before(function(){
    let app = koa();
      app.use(function*(){
      this.body = "test";  
    });
    this.server = app.listen();
  });
  after(function*(){
    yield this.server.close.bind(this.server);
  });
  describe("#end()", function(){
    it("should support calls via yield", function*(){
       let r = yield supertest(this.server).get("/").expect(200).end();
       r.text.should.equal("test");
    });
    it("should support calls with callback", function(done){
       supertest(this.server).get("/").expect(200).end(function(err, r){
         if(err) return done(err);
         r.text.should.equal("test");
         done();
       });
    });
  });	
});