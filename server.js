/* eslint-disable no-console */
const express = require('express');
const path = require('path');

const paths = require('./config/paths');

require('./config/env');

const app = express();

const port = process.env.PORT || 3000;
const host = process.env.HOST || '0.0.0.0';

app.use(express.static(path.join(__dirname, paths.build)));

app.get('/*', function (_req, res) {
  res.sendFile(path.join(__dirname, paths.build, 'index.html'));
});

app.listen(port, host, () => {
  console.log(`App listening at http://${host}:${port}`);
});
