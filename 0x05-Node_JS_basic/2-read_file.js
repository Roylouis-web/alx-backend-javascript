const { readFileSync } = require('fs');

const countStudents = (path) => {
  let content = null;
  const studentArr = [];
  try {
    content = readFileSync(path, { encoding: 'utf8' });
    let str = '';

    for (const i in content) {
      if (content[i] !== '\n') {
        str += content[i];
      } else {
        if (content[i] === '\n') {
            console.log('yes');
        }
        if (str !== '') {
          studentArr.push(str.split(','));
          str = '';
        }
      }
    }
    const students = studentArr.slice(1);
    console.log(studentArr);
    console.log(`Number of students: ${students.length}`);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
