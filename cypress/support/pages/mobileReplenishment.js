export class MobilePhoneReplenishment {
    typePhoneNumber(phoneNumber){
        cy.get('[data-qa-node="phone-number"]')
            .type(phoneNumber)
    }

    typeAmount(amount){
        cy.get('[data-qa-node="amount"]')
            .type(amount)
    }

    typeDebitCardData(cardNumber, expDate, cvv){
        cy.get('[data-qa-node="numberdebitSource"]')
            .type(cardNumber)
            .get('[data-qa-node="expiredebitSource"]')
            .type(expDate)
            .get('[data-qa-node="cvvdebitSource"]')
            .type(cvv)
    }

    submitPayment(){
        cy.get('[data-qa-node="submit"]')
            .click()
    }

    checkDebitCard(debitCard){
        cy.get('[data-qa-node="card"]')
            .should('have.text', debitCard)
    }

    checkDebitAmountAndCurrency(amount, currency){
        cy.get('[data-qa-node="amount"]')
            .should('have.contain', amount)
            .should('have.contain', currency)
    }

    checkDebitComission(debitComission){
        cy.get('[data-qa-node="commission"]')
            .eq(1)
            .should('have.text', debitComission)
    }

    checkComissionCurrency(currency){
        cy.get('[data-qa-node="commission-currency"]')
            .should('have.contain', currency)
    }
}

export const mobileReplenishment = new MobilePhoneReplenishment();