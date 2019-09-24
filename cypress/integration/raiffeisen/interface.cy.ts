/* eslint-disable */
/// <reference types="Cypress" />

describe('Form test', () => { // Уточнить отличие describe от context
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });
    it('fields typing', () => {
        cy.get('input[data-marker="Form.value.Input"]').eq(0).type('Имя');
        cy.get('input[data-marker="Form.value.Input"]').eq(1).type('Фамилия');
        cy.get('input[data-marker="Form.value.Input"]').eq(2).type('Отчество');
        cy.get('input[data-marker="Form.value.Input"]').eq(3).type('01.02.1994');
        cy.get('input[data-marker="Form.value.Input"]').eq(4).type('200');
        cy.get('input[data-marker="Form.value.Input"]').eq(5).type('5');
        cy.get('input[type="checkbox"]').check({ force: true });

        cy.get('[data-marker="Form.value.Button"]').eq(0).click();
        cy.contains('Неактивная кнопка').should('be.disabled');
    });
});
