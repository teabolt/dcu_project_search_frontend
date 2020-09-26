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
});
