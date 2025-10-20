const { login } = require("../helperMethods/login")
const {adduser, addUser} = require("../helperMethods/routing")
const {randomName} = require ("../helperMethods/documentGenerator")

describe('Adding User', () => { 
    it('adding user in the hotel managment',()=>{
    login();
       cy.get('.ant-btn-icon').click();
  cy.get('ul.ant-menu', { timeout: 10000 }).should('exist');
  cy.get('li.ant-menu-item').first().realHover(); // or hover the submenu parent if needed
  cy.wait(500); // allow React/AntD to mount submenu
  cy.contains('span.ant-menu-title-content', 'Restaurant', { timeout: 10000 })
    .should('be.visible')
    .click();
        cy.get("body div[id='root'] div[class='ant-layout ant-layout-has-sider min-h-screen css-dev-only-do-not-override-sqr1i9'] div[class='ant-layout css-dev-only-do-not-override-sqr1i9'] main[class='ant-layout-content bg-gray-50 p-6 sm:p-10 overflow-auto css-dev-only-do-not-override-sqr1i9'] div[class='space-y-6'] div[class='ant-row css-dev-only-do-not-override-sqr1i9'] div:nth-child(1) div:nth-child(1) div:nth-child(2) div:nth-child(1) div:nth-child(1) div:nth-child(1)")
        .click();
  
        cy.visit('http://localhost:3000/restaurants/1/administration/usermanagement')
        cy.get("div[class='flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3'] span:nth-child(2)").should('be.visible')
        .click();
       addUser({
            firstName : randomName,
            email: randomName,

        })
       cy.get(".ant-switch-inner").click()
       cy.get("button[class='ant-btn css-dev-only-do-not-override-sqr1i9 ant-btn-primary ant-btn-color-primary ant-btn-variant-solid'] span").click() 
        // selecting the department 
        cy.get("#department").click()
        cy.get("div[title='Management'] div[class='ant-select-item-option-content']").click()
        //submitt button 
        cy.get("button[class='ant-btn css-dev-only-do-not-override-sqr1i9 ant-btn-primary ant-btn-color-primary ant-btn-variant-solid'] span").click()
 })
 it('should validate the fields',()=>{
    login();
       cy.get('.ant-btn-icon').click();
  cy.get('ul.ant-menu', { timeout: 10000 }).should('exist');
  cy.get('li.ant-menu-item').first().realHover(); // or hover the submenu parent if needed
  cy.wait(500); // allow React/AntD to mount submenu
  cy.contains('span.ant-menu-title-content', 'Restaurant', { timeout: 10000 })
    .should('be.visible')
    .click();
        cy.get("body div[id='root'] div[class='ant-layout ant-layout-has-sider min-h-screen css-dev-only-do-not-override-sqr1i9'] div[class='ant-layout css-dev-only-do-not-override-sqr1i9'] main[class='ant-layout-content bg-gray-50 p-6 sm:p-10 overflow-auto css-dev-only-do-not-override-sqr1i9'] div[class='space-y-6'] div[class='ant-row css-dev-only-do-not-override-sqr1i9'] div:nth-child(1) div:nth-child(1) div:nth-child(2) div:nth-child(1) div:nth-child(1) div:nth-child(1)")
        .click();
         cy.visit('http://localhost:3000/restaurants/1/administration/usermanagement')
        cy.get("div[class='flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3'] span:nth-child(2)").should('be.visible')
        .click();
         cy.get("button[class='ant-btn css-dev-only-do-not-override-sqr1i9 ant-btn-primary ant-btn-color-primary ant-btn-variant-solid'] span").click()
         cy.get("div[id='name_help'] div[class='ant-form-item-explain-error']").should('include.text','Please enter the full name');
         cy.get("div[id='email_help'] div[class='ant-form-item-explain-error']").should('include.text','Please enter the email')
         cy.get("div[id='department_help'] div[class='ant-form-item-explain-error']").should('include.text','Please select a department')

 })
 })