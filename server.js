/* eslint-disable no-console */
const express = require('express');
const path = require('path');

const paths = require('./config/paths');

const app = express();

const port = 3000 || process.env.PORT;
const host = 'localhost' || process.env.HOST;

app.use(express.static(path.join(__dirname, paths.build)));

app.get('/*', function (_req, res) {
  res.sendFile(path.join(__dirname, paths.build, 'index.html'));
});

app.listen(port, host, () => {
  console.log(`App listening at http://${host}:${port}`);
});
