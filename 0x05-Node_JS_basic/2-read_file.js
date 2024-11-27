const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const dataStr = data.toString();
    const lines = dataStr.split('\n');
    lines.shift();
    let numberOfStudents = 0;
    const fields = {};
    for (const line of lines) {
      if (line.length !== 0) {
        numberOfStudents += 1;
        const [fname, , , field] = line.split(',');
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(fname);
      }
    }
    console.log(`Number of students: ${numberOfStudents}`);
    for (const [key, value] of Object.entries(fields)) {
      console.log(`Number of students in ${key}: ${fields[key].length}. List: ${value.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
