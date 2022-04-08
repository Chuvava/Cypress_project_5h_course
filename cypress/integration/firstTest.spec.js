/// <reference types="Cypress" />
import { mobileReplenishment } from "../support/pages/mobileReplenishment"
import { transfers } from "../support/pages/transfers"

it.only('Replenishment of Ukraine mobile phone number', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en');

    mobileReplenishment.typePhoneNumber('686979712');
    mobileReplenishment.typeAmount('1');
    mobileReplenishment.typeDebitCardData('4552331448138217', '0524', '111');
    mobileReplenishment.submitPayment();
    cy.wait(3000);
    mobileReplenishment.checkDebitCard('4552 **** **** 8217');
    mobileReplenishment.checkDebitAmountAndCurrency('1', 'UAH');
    mobileReplenishment.checkDebitComission('2');
    mobileReplenishment.checkComissionCurrency('UAH');
});

it('Money transfer between foreign cards', () => {
    cy.visit('https://next.privat24.ua/money-transfer/card?lang=en')

    transfers.typeDebitCardData('4552331448138217', '0524', '111');
    transfers.typeDebitNameAndSurname('Shayne', 'McConnell');
    transfers.typeRecieverCard('5309233034765085');
    transfers.typeAmount('300');
    transfers.typeComment('Cypress test');
    cy.wait(2000);
    transfers.submitPayment();
    transfers.checkDebitAndRecieverCards('4552 3314 4813 8217', '5309 2330 3476 5085');
    transfers.checkDebitAmountAndTotalAmount('300 UAH');
    transfers.checkDebitComission('89.10 UAH');
    transfers.checkComment('Cypress test');
});