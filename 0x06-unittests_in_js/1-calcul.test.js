const assert = require('assert');
const { describe, it } = require('mocha');
const calculateNumber = require('./1-calcul');

describe('Test rounded sum', () => {
  it('test rounded sum for positive non-decimal numbers', () => {
    assert.strictEqual(calculateNumber('SUM', 5.4, 3.6), 9);
  });
  it('test rounded difference for positive decimal numbers', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 5.9, 3.3), 3);
  });
  it('test rounded division for negative non-decimal numbers', () => {
    assert.strictEqual(calculateNumber('DIVIDE', -6, -4), 1.5);
  });
  it('test rounded division for zero digits', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 0, 0), 'Error');
  });
});
