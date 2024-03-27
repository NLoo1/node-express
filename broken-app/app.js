const express = require('express');
let axios = require('axios');
var app = express();

app.use(express.json())

app.post('/', function(req, res, next) {
  try {
    // Using a JSON body of developers 
    let developers = req.body.developers; 
    let promises = developers.map(developer => {
      return axios.get(`https://api.github.com/users/${developer}`)
        .then(response => {
          console.log(`Acquired data for ${developer}`);
          return { name: response.data.login, bio: response.data.bio }; 
        })
        .catch(err => {
          next(err)
        });
    });

    Promise.all(promises)
      .then(results => {
        return res.send(JSON.stringify(results)); // Send response after all promises are resolved
      })
      .catch(err => {
        next(err);
      });
  } catch (err) {
    next(err); 
  }
});

app.use((err, req, res, next) => {
  let status = err.response ? err.response.status : 500;
  let message = err.message
  return res.status(status).json({
    error: { message, status }
  });
});

app.listen(3000);
