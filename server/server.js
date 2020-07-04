const express = require('express');
const app = express();
const PORT = 5000;
const bodyParser = require('body-parser');

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/mathadd', (req, res) => {
  const mathObject = req.body;
  //req.body structure {equation:[num_1:number, num_2:number, operator:'string']}

  res.sendStatus(201);
});

app.get('/math', (req, res) => {
  res.send('will change later'); //DON'T FORGET TO CHANGE!
});

app.listen(PORT, () => {
  console.log('Listening on localhost:', PORT);
});
