const cypress = require('cypress');

const args = process.argv.slice(2);

if (args.length > 0 && args[0] === '--dev') {
  cypress.open();
} else {
  cypress.run();
}
