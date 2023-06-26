export default function appendToEachArrayValue(array, appendString) {
  for (var idx of array) {
    var value = array.indexOf(idx);
    array[value] = appendString + idx;
  }

  return array;
}
