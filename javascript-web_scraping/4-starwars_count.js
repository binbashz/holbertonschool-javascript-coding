#!/usr/bin/node
const request = require('request');
const apiUrl = process.argv[2];

// Send a GET request to the Star Wars API
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
  }

  // Convert the JSON object (key-value pairs) into a Javascript object
  const data = JSON.parse(body);

  let numberOfMovies = 0;

  // Iterate through each movie
  data.results.forEach((movie) => {
    // Iterate through each character in the movie
    movie.characters.forEach((character) => {
      // Check if the character URL includes the ID 18
      if (character.includes('/people/18/')) {
        // If found, increment the movie counter
        numberOfMovies++;
      }
    });
  });
  // Print the number of movies
  console.log(numberOfMovies);
});
