/* eslint-disable cypress/no-unnecessary-waiting */

Cypress.Commands.add('waitForLoadingSpinners', function () {
  cy.get('.loading-spinner', { timeout: 3000 }).should('not.exist');
});

Cypress.Commands.add('getMainNavbar', function () {
  cy.get('.main-navbar');
});

Cypress.Commands.add('navigateToApp', function (appName) {
  cy.getMainNavbar().contains(appName).click();
});
