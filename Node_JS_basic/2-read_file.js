const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');

    // Split the data into lines and filter out any empty lines
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    // Initialize counters for each field
    const fieldCount = {};

    lines.forEach((line) => {
      const fields = line.split(',');
      const field = fields[3].trim(); // Field is the fourth column (index 3)

      if (fieldCount[field] === undefined) {
        fieldCount[field] = 1;
      } else {
        fieldCount[field] += 1;
      }
    });

    // Calculate the total number of students
    const totalStudents = lines.length;

    // Log the results
    console.log(`Number of students: ${totalStudents}`);
    for (const field in fieldCount) {
      console.log(`Number of students in ${field}: ${fieldCount[field]}. List: ${getFieldStudentNames(lines, field)}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

// Helper function to get the list of first names for a given field
function getFieldStudentNames(lines, field) {
  const studentNames = [];
  lines.forEach((line) => {
    const fields = line.split(',');
    if (fields[3].trim() === field) {
      studentNames.push(fields[0]);
    }
  });
  return studentNames.join(', ');
}

module.exports = countStudents;
