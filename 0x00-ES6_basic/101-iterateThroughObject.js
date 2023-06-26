export default function iterateThroughObject(reportWithIterator) {
  const arr = [];
  for (const employee of reportWithIterator) {
    arr.push(employee);
  }

  return arr.join(" | ");
}
