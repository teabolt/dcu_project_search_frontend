/* eslint-disable no-sync */
/* eslint-disable no-console */
const fs = require('fs');
const http = require('http');
const https = require('https');
const path = require('path');

const ejs = require('ejs');
const express = require('express');
const morgan = require('morgan');

const paths = require('./config/paths');

require('./config/env');

const runtimeEnv = require('./runtime-env');

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

const app = express();

// Logging
app.use(morgan('combined'));

// Location of templates
app.set('views', path.join(__dirname, paths.build));
// Templating engine
app.engine('html', ejs.renderFile);

function indexHandler(_req, res) {
  // Treat the HTML file as an EJS template.
  // We can add runtime environment variables to the window object this way.
  res.render('index.html', runtimeEnv.env);
}

/**
 * The routes are ordered so that static files are served if a path with a static file URL is
 * requested. Otherwise the app itself is served. The exception is that index.html is served as a
 * rendered file instead of just as static HTML.
 */

// Serve index.html as a rendered file
app.get('/index.html', indexHandler);

// Serve static files, ignore index
app.use(express.static(path.join(__dirname, paths.build), { index: false }));

// Fallback for rest of paths
app.get('/*', indexHandler);

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
