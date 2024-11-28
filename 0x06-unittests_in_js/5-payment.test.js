
const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function() {
  beforeEach(function() {
    sinon.spy(console, 'log');
  });
  afterEach(function() {
    sinon.restore();
  });
  it("test1", function() {
    sendPaymentRequestToApi(100, 20);
    expect(console.log.firstCall.args[0]).to.equal("The total is: 120");
    expect(console.log.calledWith("The total is: 120")).to.be.true;
    expect(console.log.calledOnce).to.be.true;
    expect(console.log.callCount).to.be.equal(1);
  });
  it("test2", function() {
    sendPaymentRequestToApi(10, 10);
    expect(console.log.firstCall.args[0]).to.equal("The total is: 20");
    expect(console.log.calledWith("The total is: 20")).to.be.true;
    expect(console.log.calledOnce).to.be.true;
    expect(console.log.callCount).to.be.equal(1);
  });
});
