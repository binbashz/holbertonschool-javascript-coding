const http = require('http');
const { readFileAsync } = require('./3-read_file_async');
const { readDatabase } = require('./3-read_file_async');

// Create an HTTP server
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!\n');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');

    readDatabase(process.argv[2])
      .then((data) => {
        res.write(data);
        res.end();
      })
      .catch((error) => {
        res.end(error);
      });
  } else {
    res.statusCode = 404;
    res.end('Not Found\n');
  }
});

// Listen on port 1245
app.listen(1245);

module.exports = app;

