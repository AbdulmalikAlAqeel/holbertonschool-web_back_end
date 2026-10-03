const fs = require('fs');

/**
 * Counts and logs student data asynchronously from a CSV database file.
 * @param {string} path - The path to the CSV database file.
 * @returns {Promise}
 */
function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');

      if (lines.length <= 1) {
        console.log('Number of students: 0');
        resolve();
        return;
      }

      const studentLines = lines.slice(1);
      console.log(`Number of students: ${studentLines.length}`);

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

        /* eslint-disable-next-line prefer-template */
        console.log('Number of students in ' + field + ': ' + count + '. List: ' + list);
      }

      resolve();
    });
  });
}

module.exports = countStudents;
