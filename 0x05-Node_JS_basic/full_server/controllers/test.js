const sort = (arr) => {
  const result = arr.sort((a, b) => {
    const lengthA = a.length;
    const lengthB = b.length;
    let i = 0;
    let j = 0;
    for (; i < lengthA && j < lengthB; i += 1) {
      if (a[i].toUpperCase() !== b[j].toUpperCase()) {
        if (a[i].toUpperCase() < b[j].toUpperCase()) {
          return -1;
        }
        return 1;
      }
      j += 1;
    }
    return 0;
  });
  return result;
};

export default sort;
