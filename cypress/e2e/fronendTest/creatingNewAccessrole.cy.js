const { login } = require("../helperMethods/login")

describe('Administration Access ROle', () => { 
    it('should nevigate between option',()=>{
        login()
            cy.get('.ant-btn-icon').click();
  cy.get('ul.ant-menu', { timeout: 10000 }).should('exist');
  cy.get('li.ant-menu-item').first().realHover(); // or hover the submenu parent if needed
  cy.wait(500); // allow React/AntD to mount submenu
  cy.contains('span.ant-menu-title-content', 'Restaurant', { timeout: 10000 })
    .should('be.visible')
    .click();
        cy.get("body div[id='root'] div[class='ant-layout ant-layout-has-sider min-h-screen css-dev-only-do-not-override-sqr1i9'] div[class='ant-layout css-dev-only-do-not-override-sqr1i9'] main[class='ant-layout-content bg-gray-50 p-6 sm:p-10 overflow-auto css-dev-only-do-not-override-sqr1i9'] div[class='space-y-6'] div[class='ant-row css-dev-only-do-not-override-sqr1i9'] div:nth-child(1) div:nth-child(1) div:nth-child(2) div:nth-child(1) div:nth-child(1) div:nth-child(1)").click();

        cy.visit('http://localhost:3000/restaurants/1/administration/menucategories');
        cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > label:nth-child(1) > div:nth-child(2) > span:nth-child(1)')
        .click()
        cy.url().should('eq','http://localhost:3000/restaurants/1/administration/menucategories')
        cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > label:nth-child(2) > div:nth-child(2) > span:nth-child(1)')
        .click()
        cy.url().should('eq','http://localhost:3000/restaurants/1/administration/taxes')
        cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > label:nth-child(4) > div:nth-child(2) > span:nth-child(1)')
        .click()
        cy.url().should('eq','http://localhost:3000/restaurants/1/administration/usermanagement')
        cy.get("label[class='ant-segmented-item ant-segmented-item-selected'] div[class='ant-segmented-item-label']")
        .click()
        cy.url().should('eq','http://localhost:3000/restaurants/1/administration/accessroles')

    })
 })