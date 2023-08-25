const assert = require('assert');
const { describe, it } = require('mocha');
const calculateNumber = require('./0-calcul');

describe('Test rounded sum', () => {
  it('test rounded sum for positive non-decimal numbers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('test rounded sum for positive decimal numbers and whole number', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('test rounded sum for positive decimal numbers', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('test rounded sum for positive decimal numbers', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('test for a decimal and a whole number', () => {
    assert.strictEqual(calculateNumber(1, 0), 1);
  });

  it('test for a decimal and a whole number', () => {
    assert.strictEqual(calculateNumber(-1, -3.7), -5);
  });
});
