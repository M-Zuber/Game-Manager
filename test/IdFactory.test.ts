import IdFactory from "../src/Utilities/IdFactory";
const chai = require("chai");
chai.should();

const idFactory = new IdFactory();
describe("The Id factory for games", () => {
  it("should return 1 on the first call", (done) => {
    idFactory.getNewId().should.eql(1);
    done();
  })
  it("should return 2 if called for the second time -even from another function", (done) => {
    idFactory.getNewId().should.eql(2);
    done();
  });
  it("should increment", (done) => {
    idFactory.getNewId().should.eql(3)
    idFactory.getNewId().should.eql(4)
    done()
  });
  it( "should return 1 if called after being reset", (done) =>{
    idFactory.resetCounter();
    idFactory.getNewId().should.eql(1);
    done();
  })
})