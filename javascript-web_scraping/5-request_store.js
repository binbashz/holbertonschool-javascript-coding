#!/usr/bin/node
const fs = require('fs');
const request = require('request');
const url = process.argv[2];
const path = process.argv[3];

// gets the contents of a webpage and, stores it in a file
request(url, (err, data, body) => {
  if (err) {
    console.log(err);
  } else {
    fs.writeFile(path, body, 'utf8', (err) => {
      if (err) {
        console.log(err);
      }
    });
  }
});
