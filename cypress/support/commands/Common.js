/* eslint-disable cypress/no-unnecessary-waiting */

Cypress.Commands.add('waitForLoadingSpinners', function () {
  cy.get('.loading-spinner', { timeout: 3000 }).should('not.exist');
});
