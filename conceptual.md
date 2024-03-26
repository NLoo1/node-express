### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
> Callbacks, promises, async/await functions 

- What is a Promise?
> One time guarantee of future value
- What are the differences between an async function and a regular function?
> An async function is a function that pauses code execution until data is received, usually a Promise. A regular function runs synchronously, and will not wait for a Promise.

- What is the difference between Node.js and Express.js?
> Node.js is a framework that allows developers to run JavaScript locally without the need for a server. Express.js is a library in Node.js that enables web server handling, similar to Flask.

- What is the error-first callback pattern?
> In a function, the first parameter is an error that will be passed if the function does not work as expected. In a function with a error-first callback, the first block of code will typically check for an error, then log that error. Otherwise, the error will be null or undefined.

- What is middleware?
> Runs in the middle of the request/response cycle. Looks like a library of functions that interacts with req and res

- What does the `next` function do?
> Moves to the next route/handler that applies to a user's request. Often used to pass errors

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
> These requests, while unrelated, are called sequentially, meaning more time is spent waiting for each response instead of sending out each response at the same time. Additionally, there is no error handling. From looking at this function, it's not clear what these const variables represent. Do they represent the user's data, or user details like join date or username? Additionally, the same code is duplicated, rather than using Promise.all
