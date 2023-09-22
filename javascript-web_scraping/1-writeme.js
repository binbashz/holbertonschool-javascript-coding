#!/usr/bin/node
const fs = require('fs');
const filePath = process.argv[2];
const contentToWrite = process.argv[3];
try {
	  fs.writeFile(filePath, contentToWrite, 'utf-8');
} catch (err) {
	  console.error(err);
}
