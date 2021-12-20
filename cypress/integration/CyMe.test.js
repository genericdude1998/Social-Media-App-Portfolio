describe('Feed', () => {
    it('should correctly navigate to create Post and create a new Post', () => {
        cy.visit('https://genericdude1998.github.io/Social-Media-App-Portfolio/#/');
        cy.get('input[type=text]').type('Admin');
        cy.get('input[type=password]').type('1234');
        cy.get('button[type=submit]').click();
        
        cy.get('a').contains('Me').click();
        cy.url().should('contain', '#/userInfo/1');
    });
});