describe('Login Procedure', () => {
    it('should correctly create a new comment', () => {
        cy.visit('https://genericdude1998.github.io/Social-Media-App-Portfolio/#/');
        cy.get('input[type=text]').type('Admin');
        cy.get('input[type=password]').type('1234');
        cy.get('button[type=submit]').click();
        
        cy.get('input[class=k4R139FB0uqddBSTNWHr]').each(el => cy.wrap(el).type('hello!!!'));
        cy.get('button[type=submit]').first().click();
        setTimeout(() => {
            cy.get('button[class=h2YUy_yiJ2J6ezi56ytx]').click();
        }, 4000);
    });
});