import readDatabase from './utils.js';

((async function() {
  try {
    console.log(await readDatabase('../database.csv'));
  } catch (error) {
    console.log(error);
  }
})());
