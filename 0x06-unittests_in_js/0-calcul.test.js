const assert = require('assert');
const { describe, it } = require('mocha');
const calculateNumber = require('./0-calcul');

describe('Test rounded sum', () => {
  it('test rounded sum for positive non-decimal numbers', () => {
    assert.strictEqual(calculateNumber(5, 3), 8);
  });

  it('test rounded sum for positive decimal numbers', () => {
    assert.strictEqual(calculateNumber(5.9, 3.3), 9);
  });

  it('test rounded sum for negative non-decimal numbers', () => {
    assert.strictEqual(calculateNumber(-6, -4), -10);
  });

  it('test rounded sum for negative decimal numbers', () => {
    assert.strictEqual(calculateNumber(-34.78, -24.89), -60);
  });

  it('test for a decimal and a whole number', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  }

  it('test rounded sum for zero digits', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });
});
