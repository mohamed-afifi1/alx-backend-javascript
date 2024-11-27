const http = require('http');
const { readFile } = require('fs');

const hostname = '127.0.0.1';
const port = 1245;

function countStudents(fileName) {
  const students = {};
  const fields = {};
  let length = 0;
  return new Promise((resolve, reject) => {
    readFile(fileName, (err, data) => {
      if (err) {
        reject(err);
      } else {
        let output = '';
        const lines = data.toString().split('\n');
        for (let i = 0; i < lines.length; i += 1) {
          if (lines[i]) {
            length += 1;
            const field = lines[i].toString().split(',');
            if (Object.prototype.hasOwnProperty.call(students, field[3])) {
              students[field[3]].push(field[0]);
            } else {
              students[field[3]] = [field[0]];
            }
            if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
              fields[field[3]] += 1;
            } else {
              fields[field[3]] = 1;
            }
          }
        }
        const l = length - 1;
        output += `Number of students: ${l}\n`;
        for (const [key, value] of Object.entries(fields)) {
          if (key !== 'field') {
            output += `Number of students in ${key}: ${value}. `;
            output += `List: ${students[key].join(', ')}\n`;
          }
        }
        resolve(output);
      }
    });
  });
}

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  }
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2].toString()).then((output) => {
      const outString = output.slice(0, -1);
      res.end(outString);
    }).catch(() => {
      res.statusCode = 404;
      res.end('Cannot load the database');
    });
  }
});

app.listen(port, hostname, () => {
});

module.exports = app;
const http = require('http');
const fs = require('fs');

const PORT = 1245;
const HOST = 'localhost';

const countStudents = (dataPath) => new Promise((resolve, reject) => {
  fs.readFile(dataPath, 'utf-8', (error, data) => {
    if (error) {
      reject(new Error('Cannot load the database'));
    }
    if (data) {
      const lines = data.trim().split('\n').filter((line) => line.trim());
      if (lines.length <= 1) {
        reject(new Error('Cannot load the database'));
      }
      let output = '';
      try {
        const students = {};
        let totalStudents = 0;

        lines.slice(1).forEach((line) => { // Skip header line
          const studentRecord = line.split(',').map((item) => item.trim());
          if (studentRecord.length < 4) {
            return;
          }

          const [name, , , field] = studentRecord;
          if (!name || !field) {
            return;
          }

          totalStudents += 1;
          if (!students[field]) {
            students[field] = [];
          }
          students[field].push(name);
        });

        output += `Number of students: ${totalStudents}\n`;
        Object.entries(students).forEach(([field, names]) => {
          output += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
        });
      } catch (err) {
        reject(new Error('Cannot load the database'));
      }
      resolve(output);
    }
  });
});

const app = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  if (request.url === '/') {
    response.write('Hello Holberton School!');
    response.end();
  } else if (request.url === '/students') {
    response.write('This is the list of our students\n');
    countStudents(process.argv[2].toString()).then((output) => {
      const outString = output.slice(0, -1);
      response.end(outString);
    }).catch(() => {
      response.statusCode = 404;
      response.end('Cannot load the database');
    });
  }
});

// Start the server on a specified port
app.listen(PORT, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
});

module.exports = app;
