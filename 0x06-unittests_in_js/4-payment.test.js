/**
 * Test that payment called Utils.calculateNumber
 */
const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function() {
  beforeEach(function() {
    sinon.spy(console, 'log');
    sinon.stub(Utils, 'calculateNumber').returns(10);
  });
  afterEach(function() {
    sinon.restore();
  });
  it("tests", function() {
    sendPaymentRequestToApi(100, 20);
    expect(Utils.calculateNumber.called).to.be.true;
    expect(Utils.calculateNumber.calledOnce).to.be.true;
    expect(Utils.calculateNumber.callCount).to.be.equal(1);
    expect(Utils.calculateNumber.firstCall.args[0]).to.equal("SUM");
    expect(Utils.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(console.log.called).to.be.true;
    expect(console.log.callCount).to.be.equal(1);
    expect(console.log.firstCall.args[0]).to.equal("The total is: 10");
    expect(console.log.calledWith("The total is: 10")).to.be.true;
  });
});
