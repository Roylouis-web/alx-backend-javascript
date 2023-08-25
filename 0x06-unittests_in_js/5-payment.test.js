const { describe, it, beforeEach, afterEach } = require('mocha');
const { assert } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');

describe('Test the interaction of sendPaymentRequestToApi and Utils class', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleSpy.restore();
  });
  
  it('tests a call to sendPaymentRequestToAPI with 100, and 20', () => {
    sendPaymentRequestToApi(100, 20);
    assert(consoleSpy.calledOnce);
    assert(consoleSpy.calledOnceWith('The total is: 120'));
  });

  it('tests a call to sendPaymentRequestToAPI with 100, and 20', () => {
    sendPaymentRequestToApi(10, 10);
    assert(consoleSpy.calledOnce);
    assert(consoleSpy.calledOnceWith('The total is: 20'));
  });
});
