const { readFileSync } = require('fs');

const countStudents = (path) => {
  try {
    const content = readFileSync(path, { encoding: 'utf8' });
    const studentArr = [];
    let str = '';

    for (const i in content) {
      if (content[i] !== '\n') {
        str += content[i];
      } else if (content[i] === '\n' && str !== '') {
        studentArr.push(str.split(','));
        str = '';
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
    console.log(`Number of students: ${students.length}`);
    for (const i of fields) {
      const n = [];
      for (const j of students) {
        if (j[3] === i) {
          n.push(j[0]);
        }
      }
      console.log(`Number of students in ${i}: ${n.length}. List: ${n.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
