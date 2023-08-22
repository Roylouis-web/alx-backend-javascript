const http = require('http');
const process = require('process');
const countStudents = require('./5-test');

const { argv } = process;

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    let messages = [];
    let studentCount = '';
    try {
      [messages, studentCount] = await countStudents(argv[2]);
      const head = 'This is the list of our students\n';
      const filteredMessages = messages.join('\n');
      const result = `${head}${studentCount}${filteredMessages}`;
      res.end(result);
    } catch (error) {
      const head = 'This is the list of our students\n';
      res.write(`${head}Cannot load the database`);
      res.end();
    }
  }
});

app.listen(1245);
module.exports = app;
