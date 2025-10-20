const { login } = require("../helperMethods/login")
const { addCategory } = require("../helperMethods/routing")
const {randomName} = require("../helperMethods/documentGenerator")

describe('menu Category',()=>{
    it('should add the category in the menu',()=>{
        login()
              cy.get('.ant-btn-icon').click();
  cy.get('ul.ant-menu', { timeout: 10000 }).should('exist');
  cy.get('li.ant-menu-item').first().realHover(); // or hover the submenu parent if needed
  cy.wait(500); // allow React/AntD to mount submenu
  cy.contains('span.ant-menu-title-content', 'Restaurant', { timeout: 10000 })
    .should('be.visible')
    .click();
        cy.get("body div[id='root'] div[class='ant-layout ant-layout-has-sider min-h-screen css-dev-only-do-not-override-sqr1i9'] div[class='ant-layout css-dev-only-do-not-override-sqr1i9'] main[class='ant-layout-content bg-gray-50 p-6 sm:p-10 overflow-auto css-dev-only-do-not-override-sqr1i9'] div[class='space-y-6'] div[class='ant-row css-dev-only-do-not-override-sqr1i9'] div:nth-child(1) div:nth-child(1) div:nth-child(2) div:nth-child(1) div:nth-child(1) div:nth-child(1)")
        .click();
        cy.visit("http://localhost:3000/restaurants/1/administration/menucategories");

        for (let i = 0; i < 1; i++) {
         
            
   
        cy.get("main[class='ant-layout-content bg-gray-50 p-6 sm:p-10 overflow-auto css-dev-only-do-not-override-sqr1i9'] span:nth-child(2)").click();
        addCategory({
            catnumber: "12",
            catName:randomName,
            catSeq:0
        })
        cy.get("button[class='ant-btn css-dev-only-do-not-override-sqr1i9 ant-btn-primary ant-btn-color-primary ant-btn-variant-solid'] span").click()
         }
        
    })
    // same category number should not be added
     it('should add the category in the menu same category number twice',()=>{
        login()
              cy.get('.ant-btn-icon').click();
  cy.get('ul.ant-menu', { timeout: 10000 }).should('exist');
  cy.get('li.ant-menu-item').first().realHover(); // or hover the submenu parent if needed
  cy.wait(500); // allow React/AntD to mount submenu
  cy.contains('span.ant-menu-title-content', 'Restaurant', { timeout: 10000 })
    .should('be.visible')
    .click();
        cy.get("body div[id='root'] div[class='ant-layout ant-layout-has-sider min-h-screen css-dev-only-do-not-override-sqr1i9'] div[class='ant-layout css-dev-only-do-not-override-sqr1i9'] main[class='ant-layout-content bg-gray-50 p-6 sm:p-10 overflow-auto css-dev-only-do-not-override-sqr1i9'] div[class='space-y-6'] div[class='ant-row css-dev-only-do-not-override-sqr1i9'] div:nth-child(1) div:nth-child(1) div:nth-child(2) div:nth-child(1) div:nth-child(1) div:nth-child(1)")
        .click();
        cy.visit("http://localhost:3000/restaurants/1/administration/menucategories");

        for (let i = 0; i < 2; i++) {
         
            
   
        cy.get("main[class='ant-layout-content bg-gray-50 p-6 sm:p-10 overflow-auto css-dev-only-do-not-override-sqr1i9'] span:nth-child(2)").click();
        addCategory({
            catnumber: "12",
            catName:randomName,
            catSeq:0
        })
        cy.get("button[class='ant-btn css-dev-only-do-not-override-sqr1i9 ant-btn-primary ant-btn-color-primary ant-btn-variant-solid'] span").click()
         }
         cy.get("div[id='categoryNumber_help'] div[class='ant-form-item-explain-error']").should('include.text','Category number already exists. Please choose a different number')
    })
})