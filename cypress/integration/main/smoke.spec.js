/**
 * Main app integration smoke test.
 */

describe('Main app', function () {
  it('should start on the homepage', function () {
    cy.get('.app-content-container').contains('Project Search');
  });

  it('should click on the home link', function () {
    cy.getMainNavbar()
      .find('[data-testid="home-link"]')
      .click()
      .then(() => {
        cy.get('.app-content-container').contains('Project Search');
      });
  });

  it('should have the correct github link', function () {
    cy.getMainNavbar()
      .find('[data-testid="github-link"]')
      .should(
        'have.attr',
        'href',
        'https://github.com/teabolt/dcu_project_search_frontend'
      );
  });

  it('should have a footer', function () {
    cy.get('.app-footer').contains('Copyright');
  });
});
