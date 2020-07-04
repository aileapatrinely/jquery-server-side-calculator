const express = require('express');
const app = express();
const PORT = 5000;
const bodyParser = require('body-parser');

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mathHistory = [];

app.post('/math', (req, res) => {
  const mathObject = req.body;
  let num_1 = parseInt(mathObject.num1);
  let num_2 = parseInt(mathObject.num2);
  if (mathObject.operator === '+') {
    let total = num_1 + num_2;
  } else if (mathObject.operator === '-') {
    let total = num_1 - num_2;
  } else if (mathObject.operator === '*') {
    let total = num_1 * num_2;
  } else if (mathObject.operator === '/') {
    let total = num_1 / num_2;
  }
  const mathDone = {
    num1: mathObject.num1,
    num2: mathObject.num2,
    operator: mathObject.operator,
    total: total,
  };
  mathHistory.push(mathDone);
  res.sendStatus(201);
});

app.get('/math', (req, res) => {
  res.send(mathDone);
});

app.listen(PORT, () => {
  console.log('Listening on localhost:', PORT);
});
