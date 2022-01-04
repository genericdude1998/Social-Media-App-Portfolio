describe('Login Procedure', () => {
    it('should correctly login to feed', () => {
        cy.visit('https://genericdude1998.github.io/Social-Media-App-Portfolio/#/');
        cy.get('input[type=text]').type('Admin');
        cy.get('input[type=password]').type('1234');
        cy.get('button[type=submit]').click();
        cy.url().should('contain', 'feed');
    });
    it('should incorrectly login', () => {
        cy.visit('https://genericdude1998.github.io/Social-Media-App-Portfolio/#/');
        cy.get('input[type=text]').type('Wrong');
        cy.get('input[type=password]').type('Wrong');
        cy.get('button[type=submit]').click();
        cy.contains('username or password are wrong please try again!');
    });
});