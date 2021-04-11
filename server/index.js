const express = require('express')
const app = express()
const port = process.env.PORT || 3003
const models = require('./db/models/models.js');

app.use(express.static('./client/dist'))
app.use(express.json());

app.get(`/api/cows`, (req, res) => {
  models.getAll((data) => {
    res.status(200).json(data);
  })
  //use get all here to send information to client
});

app.post (`/api/cows`, (req, res) => { //create: (params, callback)
  models.create({req.body.name, req.body.description}, ()=> {
      res.sendStatus(200);

  })
  //send information from body to db
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))