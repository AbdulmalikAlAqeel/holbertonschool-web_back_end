const fs = require('fs');

/**
 * Counts and logs student data synchronously from a CSV database file.
 * @param {string} path - The path to the CSV database file.
 */
function countStudents(path) {
  let data;

  try {
    data = fs.readFileSync(path, 'utf8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  // Split lines and ignore carriage returns (\r) and empty lines
  const lines = data.split(/\r?\n/).filter((line) => line.trim() !== '');

  if (lines.length <= 1) {
    console.log('Number of students: 0');
    return;
  }

  const studentLines = lines.slice(1);
  console.log('Number of students: ' + studentLines.length);

  const fields = {};

  for (const line of studentLines) {
    const studentData = line.split(',');

    if (studentData.length >= 4) {
      const firstname = studentData[0].trim();
      const field = studentData[3].trim();

      if (firstname && field) {
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      }
    }
  }

  // Print using standard string concatenation (+) to avoid template literal issues
  for (const field in fields) {
    if (Object.prototype.hasOwnProperty.call(fields, field)) {
      const list = fields[field].join(', ');
      const count = fields[field].length;
      console.log('Number of students in ' + field + ': ' + count + '. List: ' + list);
    }
  }
}

module.exports = countStudents;
