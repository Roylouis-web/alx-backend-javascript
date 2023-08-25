const { describe, it } = require('mocha');
const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('test the result of getPaymentTokenFromAPI(true)', (done) => {
    const result = getPaymentTokenFromAPI(true);
    const obj = { data: 'Successful response from the API' };
    result.then(res => {
      expect(res).deep.equal(obj);
      done();
    });
  });

  it('test the result of getPaymentTokenFromAPI(false)', () => {
    const result = getPaymentTokenFromAPI(false);
    expect(result).to.equal(undefined);
  });
});
