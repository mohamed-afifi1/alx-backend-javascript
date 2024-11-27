const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const DataStr = data.toString();
    const lines = DataStr.split('\n');
    lines.shift();
    let NUMBER_OF_STUDENTS = 0;
    const fields = {};
    for (const line of lines) {
      if (line.length !== 0) {
        NUMBER_OF_STUDENTS += 1;
        const [fname, , , field] = line.split(',');
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(fname);
      }
    }
    console.log(`Number of students: ${NUMBER_OF_STUDENTS}`);
    for (const [key, value] of Object.entries(fields)) {
      console.log(`Number of students in ${key}: ${fields[key].length}. List: ${value.join(', ')}`);
    }
  } catch (error) {
    console.error('Cannot load the database');
  }
}

module.exports = countStudents;
