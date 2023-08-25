const { expect } = require('chai');
const { describe, it } = require('mocha');
const calculateNumber = require('./2-calcul_chai');

describe('Test rounded sum', () => {
  it('test rounded sum for positive non-decimal numbers', () => {
    expect(calculateNumber('SUM', 1, 3)).to.equal(4);
  });

  it('test rounded sum for positive non-decimal numbers', () => {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });

  it('test rounded difference for positive decimal numbers and whole number', () => {
    expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3);
  });

  it('test rounded division for positive decimal numbers', () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });

  it('test error output for zero division', () => {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });
});
