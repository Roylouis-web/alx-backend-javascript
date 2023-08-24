const calculateNumber = (type, a, b) => {
  let result;

  if (type === 'SUM') {
    result = Math.round(a + b);
  } else if (type === 'SUBTRACT') {
    result = Math.round(a - b);
  } else if (type === 'DIVIDE') {
    if (Math.round(b) === 0) {
      result = 'Error';
    } else {
      result = Math.round(a / b);
    }
  }

  return result;
};

module.exports = calculateNumber;
