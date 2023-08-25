const { describe, it } = require('mocha');
const assert = require('assert');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('checks for right output of the Utils.calculateNumber method', () => {
    const UtilsSpy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(50, 24.52);

    assert(UtilsSpy.calledOnce);
    UtilsSpy.restore();
  });

  it('validate the usage of the Utils function', () => {
    assert.strictEqual(Utils.calculateNumber('SUM', 100, 20), 120);
    assert.strictEqual(Utils.calculateNumber('SUM', 10.5, 20.5), 32);
    assert.strictEqual(Utils.calculateNumber('SUBTRACT', 10, 20), -10);
    assert.strictEqual(Utils.calculateNumber('SUBTRACT', 1.7, 9), -7);
    assert.strictEqual(Utils.calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    assert.strictEqual(Utils.calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
});
