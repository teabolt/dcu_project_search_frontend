/* eslint-disable no-process-exit */
/* eslint-disable no-console */
const cypress = require('cypress');

const args = process.argv.slice(2);

if (args.length > 0 && args[0] === '--dev') {
  cypress.open();
} else {
  cypress
    .run()
    .then((results) => {
      if (results.totalFailed) {
        process.exit(1);
      }
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
}
