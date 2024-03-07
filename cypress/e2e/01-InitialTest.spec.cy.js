// cypress/e2e/myFirstTest.cy.jsx
describe('My First Cypress Test', () => {
    it('Visits the app and asserts title', () => {
      cy.visit('/'); // Replace with your app's URL
      cy.get('h1').should('contain', 'Rick and Morty');
    });
  });

    it('Checks for main characters', () => {
      cy.visit('/characters'); // Replace with your characters page URL
      cy.get('.card-title').should('contain', 'Rick Sanchez');
      cy.get('.card-title').should('contain', 'Morty Smith');
    });
  