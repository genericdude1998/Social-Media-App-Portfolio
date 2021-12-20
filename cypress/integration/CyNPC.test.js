describe('Feed', () => {
    it('should correctly navigate to create Post and create a new Post', () => {
        cy.visit('https://genericdude1998.github.io/Social-Media-App-Portfolio/#/');
        cy.get('input[type=text]').type('Admin');
        cy.get('input[type=password]').type('1234');
        cy.get('button[type=submit]').click();
        
        cy.get('a').contains('Create New Post').click();
        cy.url().should('contain', '#/createPost');

        cy.get('textarea').type('Sample Comment');
        cy.get('button[type=submit]').click();

        cy.url().should('contain', '#/feed');
        cy.get('p').contains('Sample Comment');
    });
});