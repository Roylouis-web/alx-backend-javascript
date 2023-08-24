const { describe, it } = require('mocha');
const { assert } = require('chai');
const { spy } = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('checks for right output of the Utils.calculateNumber method', () => {
    const UtilsSpy = spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    assert(UtilsSpy.calledOnce);
    assert(UtilsSpy.calledOnceWith('SUM', 100, 20));
    UtilsSpy.restore();
  });
});
