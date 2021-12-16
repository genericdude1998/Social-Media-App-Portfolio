describe('Login Procedure', () => {
    it('should correctly create a new comment', () => {
        cy.visit('https://genericdude1998.github.io/Social-Media-App-Portfolio/#/');
        cy.get('input[type=text]').type('Admin');
        cy.get('input[type=password]').type('1234');
        cy.get('button[type=submit]').click();

        cy.get('a[class=i_4yHM7F5skO2msZbvWd null]').click();
    });
});