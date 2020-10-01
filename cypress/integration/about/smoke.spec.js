/**
 * About app integration smoke test.
 */

describe('About', function () {
  before(function () {
    cy.navigateToApp('About');
  });

  it('should navigate to the about page', function () {
    cy.url().should('include', '/about');
  });

  it('should have about page contents', function () {
    cy.get('.app-content-container').contains('About');
  });

  it('should navigate back to the home page via breadcrumbs', function () {
    cy.get('[data-testid="app-breadcrumbs"]').contains('Home').click();
    cy.get('.home-app');
  });
});
