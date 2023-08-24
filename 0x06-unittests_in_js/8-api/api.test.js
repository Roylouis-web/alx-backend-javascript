const request = require('request');
const { expect } = require('chai');
const { describe, it } = require('mocha');

describe('GET /', () => {
  it('tests the home page end point', () => {
    request('http://localhost:7865', (error, response, body) => {
      if (error) {
        console.log(error);
      }
      expect(response.statusCode).to.equal(200);
      expect(response.headers['content-type']).to.equal('text/plain');
      expect(body).to.equal('Welcome to the payment system');
    });
  });
});
