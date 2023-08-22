const express = require('express');
const process = require('process');
const countStudents = require('./5-test');

const { argv } = process;
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    let messages = [];
    let studentCount = '';
    [messages, studentCount] = await countStudents(argv[2]);
    const head = 'This is the list of our students\n';
    const filteredMessages = messages.join('\n');
    const result = `${head}${studentCount}${filteredMessages}`;
    res.send(result);
  } catch (error) {
    const head = 'This is the list of our students\n';
    res.end(`${head}Cannot load the database`);
  }
});

app.listen(1245);
module.exports = app;
