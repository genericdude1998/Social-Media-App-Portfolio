describe('Logout', () => {
    it('should correctly go back to login page', () => {
        cy.visit('https://genericdude1998.github.io/Social-Media-App-Portfolio/#/');
        cy.get('input[type=text]').type('Admin');
        cy.get('input[type=password]').type('1234');
        cy.get('button[type=submit]').click();

        cy.get('a').contains('Logout').click();
        cy.url().should('contain', '#/');
    });
});