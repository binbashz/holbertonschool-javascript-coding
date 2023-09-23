#!/usr/bin/node
const request = require('request');

const apiUrl = process.argv[2];

request.get(apiUrl, (error, response) => {
  if (error) {
    console.log(error);
    return;
  }
  const tasksData = JSON.parse(response.body);
  const completedTasksByUser = {};

  tasksData.forEach(task => {
    const userId = task.userId;
    if (task.completed) {
      if (!completedTasksByUser[userId]) {
        completedTasksByUser[userId] = 1;
      } else {
        completedTasksByUser[userId]++;
      }
    }
  });
  console.log(completedTasksByUser);
});
