/**
 * Main app integration smoke test.
 */

describe('Main app', function () {
  it('should navigate to the homepage', function () {
    cy.get('.search-app');
  });
});
