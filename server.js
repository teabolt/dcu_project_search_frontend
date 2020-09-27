/* eslint-disable no-sync */
/* eslint-disable no-console */
const fs = require('fs');
const http = require('http');
const https = require('https');
const path = require('path');

const express = require('express');
const morgan = require('morgan');

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

const IS_HTTPS = process.env.NODE_ENV === 'production';

let server;
if (IS_HTTPS) {
  const credentials = {
    key: fs.readFileSync(process.env.SSL_KEY),
    cert: fs.readFileSync(process.env.SSL_CERT),
  };
  server = https.createServer(credentials, app);
} else {
  server = http.createServer(app);
}

if (server) {
  server.listen({ port: PORT, host: HOST }, () => {
    console.log(
      `App listening at http${IS_HTTPS ? 's' : ''}://${HOST}:${PORT}`
    );
  });
} else {
  console.error(`Server is not created: ${server}`);
}
