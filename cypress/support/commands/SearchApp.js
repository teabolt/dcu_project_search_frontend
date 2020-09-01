Cypress.Commands.add('verifyProjectHeader', function () {
  cy.get('[data-testid="project-0"]')
    .should('contain', 'Test Title 1')
    .should('contain', '2020')
    .should('contain', 'Description');
});
