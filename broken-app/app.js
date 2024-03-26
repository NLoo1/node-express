const express = require('express');
let axios = require('axios');
var app = express();

app.use(express.json())

app.post('/', async function(req, res, next) {
  console.log(req.body)
  try {
    // Using a JSON body of developers, 
    let results = req.body.developers.map(async developer => {
      await axios.get(`https://api.github.com/users/${developer}`);
    });

    console.log(results)
    // let out = results.map(r => ({ name: r.data.name, bio: r.data.bio }));

    // return res.send(JSON.stringify(out));
  } catch(err) {
    next(err);
  }
});

app.listen(3000);
