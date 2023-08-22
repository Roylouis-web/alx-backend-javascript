const process = require('process');

process.stdout.write('Welcome to Holberton School, what is your name?\n');

if (process.stdin.isTTY) {
  process.stdin.on('data', (data) => {
    process.stdout.write(`Your name is ${data}`);
    process.exit(0);
  });
} else {
  process.stdin.on('data', (data) => {
    process.stdout.write(`Your name is ${data}`);
  });

  process.on('exit', () => {
    process.stdout.write('This important software is now closing\n');
  });
}
