/// <reference types="Cypress" />

// describe('Mobile phone replenishment', () => {

//     context("Replenishment less than the allowed amount", () => {
//         it("Show error: Minimum amount of the replenishment 1 UAH", () => {});
//     });

// });

// it('By ID', () => {
//     cy.visit("http://www.facebook.com/");
//     cy.get('email');
// })

// it('By Class', () => {
//     cy.visit("https://docs.cypress.io/api/commands/get");
//     cy.get('.DocSearch-Button');
// })

// it('By Tag', () => {
//     cy.visit("https://docs.cypress.io/api/commands/get");
//     cy.get('nav');
// })

// it('By Tag Value', () => {
//     cy.visit("http://www.facebook.com/");
//     cy.get('[name="pass"]');
// })

// it.only('By Different Tag', () => {
//     cy.visit("http://www.facebook.com/");
//     cy.get('[data-testid="open-registration-form-button"][role="button"]');
//     cy.fi
// })

it("Using Get with find and Eq", () => {
    cy.visit("https://next.privat24.ua/deposit/open")
    cy.get('tbody').find('td').find('div').find('button').eq(0);
});

it.only("Using Get with find and Eq", () => {
    cy.viewport(1800, 700)
    cy.visit("https://docs.cypress.io/api/commands/eq")
    cy.get('.w-sidebar').find('ul').find('li').find('a').eq(1)
});