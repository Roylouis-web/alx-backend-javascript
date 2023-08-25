const { describe, it } = require('mocha');
const { assert } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('Test the interaction of sendPaymentRequestToApi and Utils class', () => {
  it('checks for right output of the Utils.calculateNumber method', () => {
    const UtilsStub = sinon.stub(Utils, 'calculateNumber');
    const consoleSpy = sinon.spy(console, 'log');
    UtilsStub.returns(10);
    sendPaymentRequestToApi(100, 20);
    assert(UtilsStub.calledOnce);
    assert(UtilsStub.calledOnceWith('SUM', 100, 20));
    assert(consoleSpy.calledOnce);
    assert(consoleSpy.calledOnceWith('The total is: 10'));
    consoleSpy.restore();
    UtilsStub.restore();
  });
});
