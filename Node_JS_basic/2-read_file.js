const fs = require('fs');

/**
 * Counts and logs student data synchronously from a CSV database file.
 * @param {string} path - The path to the CSV database file.
 */
function countStudents(path) {
  let data;

  // Attempt to read the database file synchronously
  try {
    data = fs.readFileSync(path, 'utf8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  // Split content by newlines and filter out empty lines
  const lines = data.split('\n').filter((line) => line.trim() !== '');

  // If file contains only header or no data, total students is 0
  if (lines.length <= 1) {
    console.log('Number of students: 0');
    return;
  }

  // Extract student records, excluding the header (first line)
  const studentLines = lines.slice(1);
  console.log(`Number of students: ${studentLines.length}`);

  // Map to store students grouped by their field of study
  const fields = {};

  for (const line of studentLines) {
    const studentData = line.split(',');
    const firstname = studentData[0];
    const field = studentData[3];

    if (firstname && field) {
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    }
  }

  // Log total students and list of names for each field
  for (const [field, students] of Object.entries(fields)) {
    console.log(`Number of students in \({field}:\){students.length}. List: ${students.join(', ')}`);
  }
}

module.exports = countStudents;
