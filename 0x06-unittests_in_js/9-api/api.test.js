const request = require('request');
const { expect } = require('chai');
const { describe, it } = require('mocha');

describe('Cart page', () => {
  it('tests /cart/:id with correct request param', () => {
    request('http://localhost:7865/cart/12', (error, response, body) => {
      if (error) {
        console.log(error);
      }
      expect(response.statusCode).to.equal(200);
      expect(response.complete).to.equal(true);
      expect(response.headers['content-type']).to.equal('text/plain');
      expect(body).to.equal('Payment methods for cart 12');
    });
  });

  it('tests /cart/:id with incorrect request param', () => {
    request('http://localhost:7865/cart/hello', (error, response, body) => {
      if (error) {
        console.log(error);
      }
      expect(response.statusCode).to.equal(404);
      expect(response.complete).to.equal(true);
      expect(response.headers['content-type']).to.equal('text/html; charset=utf-8');
    });
  });
});
