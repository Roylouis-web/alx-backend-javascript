export default function cleanSet(set, startString) {
  if (startString) {
    const arr = [];
    set.forEach((element) => {
      if (element.split(startString)[1]) {
        arr.push(element.split(startString)[1]);
      }
    });
    return arr.join('-');
  }

  return '';
}
