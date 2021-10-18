require('dotenv').config();

const path = require('path');

const express = require('express');

const app = express();

const { PORT } = process.env;
const port = PORT || 3000;

app.use(express.static(path.join(__dirname, '../ui/public')));

app.get('/index', (req, res) => {
  res.send('Index route');
});

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}...`);
});
