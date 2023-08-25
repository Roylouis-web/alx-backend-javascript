const { describe, it } = require('mocha');
const { assert, expect } = require('chai');
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

  it('validate the usage of the Utils function', () => {
    expect(Utils.calculateNumber('SUM', 100, 20)).to.equal(120);
    expect(Utils.calculateNumber('SUM', 10.5, 20.5)).to.equal(32);
    expect(Utils.calculateNumber('SUBTRACT', 10, 20)).to.equal(-10);
    expect(Utils.calculateNumber('SUBTRACT', 1.7, 9)).to.equal(-7);
    expect(Utils.calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    expect(Utils.calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });
});
