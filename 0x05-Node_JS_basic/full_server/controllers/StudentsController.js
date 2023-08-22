import { argv } from 'process';
import readDatabase from '../utils';
import sort from './test';

export default class StudentsController {
  static getAllStudents(req, res) {
    ((async () => {
      try {
        const path = argv.length > 2 ? argv[2] : '';
        const result = await readDatabase(path);
        const fields = Object.keys(result);
        const sortedFields = sort(fields);
        const messages = [];
        const head = 'This is the list of our students\n';

        for (const field of sortedFields) {
          const n = result[`${field}`].length;
          const s = result[`${field}`].join(', ');
          messages.push(`Number of students in ${field}: ${n}. List: ${s}`);
        }
        const response = `${head}${messages.join('\n')}`;
        res.status(200).send(response);
      } catch (error) {
        res.status(500).send('Cannot load the database');
      }
    })());
  }

  static getAllStudentsByMajor(req, res) {
    ((async () => {
      try {
        const { major } = req.params;
        if (major !== 'CS' && major !== 'SWE') {
          throw new Error('Major parameter must be CS or SWE');
        }
        const path = argv.length > 2 ? argv[2] : '';
        const result = await readDatabase(path);
        const names = result[`${major}`].join(', ');
        const message = `List: ${names}`;
        res.status(200).send(message);
      } catch (error) {
        res.status(500).send(error.message);
      }
    })());
  }
}
