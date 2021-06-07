# Connecting it all: CORS

You've been hired as a back-end API developer at Smarty plants!
Another developer created the API, and the front-end developer keeps getting CORS errors when they try to use it.

You have been tasked with enabling CORS on specific URL's so that the
the front-end developers can keep working.

To succeed at this challenge, you'll need to demonstrate that you can do the following:

- Modify existing Express Router configuration to enable CORS.
- You will not need to make any edits to HTML or CSS for this project.

## Instructions

Your goal for this checkpoint is to get the tests to pass.
To do so, you will be modifying an existing API server with two resources, users and plants in addition to error handling.
Your server should follow the structure you've learned in the course.

## Tasks

Complete the following tasks to pass the tests and this assignment.

1. In the ssrc/plants/plants.router.js file, make the necessary changes to enable CORS for the entire router.
2. In the src/users/users.router.js file, enable CORS for any GET to /users, and /users/:userId.
3. Once these tasks are complete, all tests should pass.
