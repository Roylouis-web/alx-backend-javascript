import { readFile } from 'fs';

const readDatabase = (path) => new Promise((resolve, reject) => {
  readFile(path, { encoding: 'utf-8' }, (error, data) => {
    if (error) {
      reject(new Error('Cannot load the database'));
    } else {
      let str = '';
      const studentArr = [];

      for (const i in data) {
        if (data[i] !== '\n') {
          str += data[i];
        } else if (data[i] === '\n' && str !== '') {
          studentArr.push(str.split(','));
          str = '';
        }
      }

      if (str !== '') {
        studentArr.push(str.split(','));
      }

      const students = studentArr.slice(1);
      const fields = [];
      const result = {};

      for (const i of students) {
        if (fields.indexOf(i[3]) === -1) {
          fields.push(i[3]);
        }
      }

      for (const field of fields) {
        const firstNames = [];
        for (const student of students) {
          if (student[3] === field) {
            firstNames.push(student[0]);
          }
        }
        result[`${field}`] = firstNames;
      }
      resolve(result);
    }
  });
});

export default readDatabase;
