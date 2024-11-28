const request = require('request');
const { promisify } = require('util');
const chai = require('chai');

const { expect } = chai;
const requestPromise = promisify(request);

describe('Index page', () => {
  it('response', async () => {
    try {
      const res = await requestPromise('http://localhost:7865/');
      expect(res.body).to.be.equal('Welcome to the payment system');
      expect(res.statusCode).to.be.equal(200);
    } catch (err) {
      throw err;
    }
  });
  it('returns payment methods for a given cart number', async () => {
    try {
      const res = await requestPromise(`http://localhost:7865/cart/123`);
      expect(res.body).to.be.equal('Payment methods for cart 123');
      expect(res.statusCode).to.be.equal(200);
    } catch (err) {
      throw err;
    }
  });
  it('returns 404 for invalid cart number', async () => {
    try {
      const res = await requestPromise(`http://localhost:7865/cart/abc`);
      expect(res.statusCode).to.be.equal(404);
    } catch (err) {
      throw err;
    }
  });
});
