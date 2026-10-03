import fs from 'fs';

/**
 * Reads student database asynchronously and returns structured data.
 * @param {string} filePath - Path to the CSV file.
 * @returns {Promise<Object>} Resolves to an object mapping fields to array of student firstnames.
 */
const readDatabase = (filePath) => new Promise((resolve, reject) => {
  if (!filePath) {
    reject(new Error('Cannot load the database'));
    return;
  }

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const lines = data.split('\n').filter((line) => line.trim() !== '');
    if (lines.length <= 1) {
      resolve({});
      return;
    }

    const studentLines = lines.slice(1);
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

    resolve(fields);
  });
});

export default readDatabase;
