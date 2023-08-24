const { expect } = require('chai');
const { describe, it } = require('mocha');
const calculateNumber = require('./1-calcul');

describe('Test rounded sum', () => {
  it('test rounded sum for positive non-decimal numbers', () => {
    expect(calculateNumber('SUM', 5, 3)).to.equal(8);
  });
  it('test rounded difference for positive decimal numbers', () => {
    expect(calculateNumber('SUBTRACT', 5.9, 3.3)).to.equal(3);
  });
  it('test rounded division for negative non-decimal numbers', () => {
    expect(calculateNumber('DIVIDE', -6, -4)).to.equal(2);
  });
  it('test rounded division for zero digits', () => {
    expect(calculateNumber('DIVIDE', 0, 0)).to.equal('Error');
  });
});
