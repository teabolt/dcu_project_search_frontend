// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

import './commands';

// beforeEach(() => {
//   cy.window().then((win) => {
//     cy.spy(win.console, 'error');
//   });
// });

before(() => {
  cy.visit('http://localhost:3000');
});

// TODO: Change to afterEach once we can filter out certain errors.
// after(() => {
//   cy.window().then((win) => {
//     expect(win.console.error).to.have.callCount(0);
//   });
// });
