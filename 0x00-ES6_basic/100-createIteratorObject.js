export default function createIteratorObject(report) {
  return {
    [Symbol.iterator]() {
      let counter = -1;
      const keys = Object.keys(report.allEmployees);
      const allEmployees = report.allEmployees;
      const arrayOfEmployees = keys.map((empList) => allEmployees[empList]);
      const flatArray = arrayOfEmployees.flat(2);

      return {
        next() {
          if (counter < flatArray.length - 1) {
            counter++;

            return { value: flatArray[counter], done: false };
          }
          return { value: undefined, done: true };
        },
      };
    },
  };
}
