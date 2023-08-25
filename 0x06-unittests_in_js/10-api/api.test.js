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

  it('tests GET /cart/:id with incorrect request param', () => {
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

describe('Available payments', () => {
  it('tests GET /available_payments', () => {
    request('http://localhost:7865/available_payments', (error, response, body) => {
      if (error) {
        console.log(error);
      }
      const obj = {
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      };
      expect(response.statusCode).to.equal(200);
      expect(response.complete).to.equal(true);
      expect(response.headers['content-type']).to.equal('application/json; charset=utf-8');
      expect(JSON.parse(body)).to.deep.equal(obj);
    });
  });
});

describe('Login', () => {
  it('tests POST /login', () => {
    const body = { userName: 'Betty' };
    request.post('http://localhost:7865/login', { json: body }, (error, response, body) => {
      if (error) {
        console.log(error);
      }
      expect(response.statusCode).to.equal(200);
      expect(response.headers['content-type']).to.equal('text/plain');
      expect(body).to.equal('Welcome Betty');
    });
  });
});
