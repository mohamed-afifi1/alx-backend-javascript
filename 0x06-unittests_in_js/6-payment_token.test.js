const chai = require('chai');
const expect = chai.expect;

const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function() {
  it('returns a promise', async function() {
    const success = true;
    const response = await getPaymentTokenFromAPI(success);
    expect(response).to.be.an('object');
    expect(response).to.have.property('data');
    expect(response.data).to.be.a('string');
    expect(response.data).to.equal('Successful response from the API');
  });

  it('rejects the promise when the API call fails', async function() {
    const success = false;
    const response = await getPaymentTokenFromAPI(success);
    expect(response).to.be.undefined;
    

  });
});
