const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 1245;
const DB_FILE = process.argv[2];

/**
 * Reads student data asynchronously from a CSV file and formats the result as text.
 * @param {string} path - The path to the CSV database file.
 * @returns {Promise<string>}
 */
function countStudents(path) {
  return new Promise((resolve, reject) => {
    if (!path) {
      reject(new Error('Cannot load the database'));
      return;
    }

    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');

      if (lines.length <= 1) {
        resolve('Number of students: 0');
        return;
      }

      const studentLines = lines.slice(1);
      const output = [`Number of students: ${studentLines.length}`];
      const fields = {};

      for (const line of studentLines) {
        const studentData = line.split(',');

        if (studentData.length >= 4) {
          const firstname = studentData[0].trim();
          const fieldName = studentData[3].trim();

          if (firstname && fieldName) {
            if (!fields[fieldName]) {
              fields[fieldName] = [];
            }
            fields[fieldName].push(firstname);
          }
        }
      }

      const keys = Object.keys(fields);
      for (let i = 0; i < keys.length; i += 1) {
        const field = keys[i];
        const students = fields[field];
        const count = students.length;
        const list = students.join(', ');
        output.push(`Number of students in ${field}: ${count}. List: ${list}`);
      }

      resolve(output.join('\n'));
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(DB_FILE)
    .then((data) => {
      res.send(`This is the list of our students\n${data}`);
    })
    .catch((err) => {
      res.send(`This is the list of our students\n${err.message}`);
    });
});

app.listen(PORT);

module.exports = app;
