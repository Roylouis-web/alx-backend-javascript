class Utils {
  static calculateNumber (type, a, b) {
    let result = 0;
    const first = Math.round(a);
    const second = Math.round(b);

    if (type === 'SUM') {
      result = first + second;
    } else if (type === 'SUBTRACT') {
      result = first - second;
    } else if (type === 'DIVIDE') {
      if (second === 0) {
        result = 'Error';
      } else {
        result = first / second;
      }
    }

    return result;
  }
}

module.exports = Utils;
