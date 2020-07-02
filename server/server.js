const express = require('express');
const app = express();
const PORT = 5000;
const bodyParser = require('body-parser');

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/math', (req, res) => {
  res.sendStatus(201);
});

app.listen(PORT, () => {
  console.log('Listening on localhost:', PORT);
});
