/* eslint-disable no-console */
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const paths = require('./config/paths');

require('./config/env');

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

const app = express();

// Logging
app.use(morgan('combined'));

// Serve static files
app.use(express.static(path.join(__dirname, paths.build)));

app.get('/*', function (_req, res) {
  res.sendFile(path.join(__dirname, paths.build, 'index.html'));
});

app.listen(PORT, HOST, () => {
  console.log(`App listening at http://${HOST}:${PORT}`);
});
