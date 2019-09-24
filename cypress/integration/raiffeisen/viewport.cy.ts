describe('Test Viewport', () => { // Уточнить отличие describe от context
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });
    it('viewport', () => {
        cy.get('div[data-marker="Topbar.Logo"]').should('be.visible');
        cy.get('div[data-marker="Topbar.LogoCollapsed"]').should('not.be.visible');
        cy.viewport(320, 480);

        // the navbar should have collapse since our screen is smaller
        cy.get('div[data-marker="Topbar.Logo"]').should('not.be.visible');
        cy.get('div[data-marker="Topbar.LogoCollapsed"]').should('be.visible');
        /* eslint-disable cypress/no-unnecessary-waiting */
        cy.viewport('macbook-15');
        cy.wait(200);
        cy.viewport('macbook-13');
        cy.wait(200);
        cy.viewport('macbook-11');
        cy.wait(200);
        cy.viewport('ipad-2');
        cy.wait(200);
        cy.viewport('ipad-mini');
        cy.wait(200);
        cy.viewport('iphone-6+');
        cy.wait(200);
        cy.viewport('iphone-6');
        cy.wait(200);
        cy.viewport('iphone-5');
        cy.wait(200);
        cy.viewport('iphone-4');
        cy.wait(200);
        cy.viewport('iphone-3');
        cy.wait(200);

        cy.viewport('ipad-2', 'portrait');
        cy.wait(200);
        cy.viewport('iphone-4', 'landscape');
        cy.wait(200);
        /* eslint-enable cypress/no-unnecessary-waiting */
    });
});
