const { readFile } = require('fs');

const countStudents = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, { encoding: 'utf-8' }, (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      }
      let str = '';
      const studentArr = [];
      const messages = [];

      for (const i in data) {
        if (data[i] !== '\n') {
          str += data[i];
        } else {
          if (str !== '') {
            studentArr.push(str.split(','));
            str = '';
          }
        }
      }

      if (str !== '') {
        studentArr.push(str.split(','));
      }

      const students = studentArr.slice(1);
      const fields = [];
      for (const i of students) {
        if (fields.indexOf(i[3]) === -1) {
          fields.push(i[3]);
        }
      }

      for (const i of fields) {
        const n = [];
        for (const j of students) {
          if (j[3] === i) {
            n.push(j[0]);
          }
        }
        messages.push(`Number of students in ${i}: ${n.length}. List: ${n.join(', ')}`);
      }
      resolve([messages, `Number of students: ${students.length}\n`]);
    });
  });
};

module.exports = countStudents;
