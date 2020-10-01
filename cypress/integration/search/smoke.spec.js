/**
 * Search app integration smoke test.
 */

describe('Search', function () {
  const TEST_QUERY = 'test';
  const SEARCH_ENDPOINT = 'search';

  beforeEach(function () {
    // Mock a response from the search endpoint.
    cy.server();
    cy.route('GET', `**${SEARCH_ENDPOINT}**`, 'fixture:search.json');
  });

  it('should navigate to the search page', function () {
    cy.get('.app-content-container').contains('Project Search');
  });

  it('should search for projects', function () {
    cy.get('[data-testid="search-box"]').type(TEST_QUERY);
    cy.waitForLoadingSpinners();
  });

  it('should show a summary of results', function () {
    const NUM_EXPECTED_PROJECTS = 3;
    cy.get('[data-testid="search-result-summary"]').contains(
      `${NUM_EXPECTED_PROJECTS} projects found for "${TEST_QUERY}"`
    );
  });

  it('should show a resulting project', function () {
    cy.verifyProjectHeader();
  });

  it('should expand the details of a project', function () {
    cy.get('[data-testid="project-0"]')
      .find('[data-testid="project-expand-button"]')
      .click();

    // Verify that header is the same
    cy.verifyProjectHeader();

    // Verify expanded details
    cy.get('[data-testid="project-0"]')
      .should('contain', 'Programme')
      .should('contain', 'Supervisor')
      .should('contain', 'Students')
      .should('contain', 'Area')
      .should('contain', 'Technology')
      .should('contain', 'Video');
  });

  it('should collapse the details of a project', function () {
    cy.get('[data-testid="project-0"]')
      .find('[data-testid="project-collapse-button"]')
      .click();

    cy.verifyProjectHeader();
  });

  it('should clear the search and not find any projects', function () {
    cy.get('[data-testid="search-box-clear"]').scrollIntoView().click();
    cy.get('[data-testid="search-result-summary"]').should('not.exist');
    cy.get('[data-testid="project-0"]').should('not.exist');
  });
});
