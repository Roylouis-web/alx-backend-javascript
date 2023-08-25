const calculateNumber = (a, b) => {
  const first = Math.round(a);
  const second = Math.round(b);
  const sum = first + second;
  return sum;
};

module.exports = calculateNumber;
