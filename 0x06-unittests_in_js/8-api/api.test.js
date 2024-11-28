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
});
