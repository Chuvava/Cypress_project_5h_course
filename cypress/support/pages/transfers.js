export class Transfers {

    typeDebitCardData(cardNumber, expDate, cvv){
        cy.get('[data-qa-node="numberdebitSource"]')
            .type(cardNumber)
            .get('[data-qa-node="expiredebitSource"]')
            .type(expDate)
            .get('[data-qa-node="cvvdebitSource"]')
            .type(cvv)
    }

    typeNameAndSurname(name, surname){
        cy.get('[data-qa-node="firstNamedebitSource"]')
            .type(name)
            .get('[data-qa-node="lastNamedebitSource"]')
            .type(surname)
    }
}

export const transfers = new Transfers();