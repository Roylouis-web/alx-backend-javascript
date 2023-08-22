const express = require('express');
const process = require('process');
const countStudents = require('./5-test');

const { argv } = process.argv;
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  let messages = [];
  let studentCount = '';
  try {
    if (argv[2]) {
      [messages, studentCount] = await countStudents(argv[2]);
    } else {
      [messages, studentCount] = await countStudents('database.csv');
    }
  } catch (error) {
    console.log(error);
  }
  const head = 'This is the list of our students\n';
  const filteredMessages = messages.join('\n');
  const result = `${head}${studentCount}${filteredMessages}`;
  res.send(result);
});

app.listen(1245);
module.exports = app;
