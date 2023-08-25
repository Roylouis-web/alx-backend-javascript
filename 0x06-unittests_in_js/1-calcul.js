const calculateNumber = (type, a, b) => {
  let result;
  let first;
  let second;

  if (type === 'SUM') {
    first = Math.round(a);
    second = Math.round(b);
    result = first + second;
  } else if (type === 'SUBTRACT') {
    first = Math.round(a);
    second = Math.round(b);
    result = first - second;
  } else if (type === 'DIVIDE') {
    if (Math.round(b) === 0) {
      result = 'Error';
    } else {
      first = Math.round(a);
      second = Math.round(b);
      result = first / second;
    }
  }

  return result;
};

module.exports = calculateNumber;
