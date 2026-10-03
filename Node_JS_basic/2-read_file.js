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

  const lines = data.split('\n').filter((line) => line.trim() !== '');

  if (lines.length <= 1) {
    console.log('Number of students: 0');
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
    console.log(`Number of students in \({field}:\){students.length}. List: ${students.join(', ')}`);
  }
}

module.exports = countStudents;
