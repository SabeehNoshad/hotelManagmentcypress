const { login } = require("../helperMethods/login")
const {addTax} = require ("../helperMethods/routing")
const {randomName} = require("../helperMethods/documentGenerator")

describe('addTaxes', () => { 
    it('should add the taxes under the slab total bill  ',()=>{
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
        cy.visit('http://localhost:3000/restaurants/1/administration/taxes');
        cy.get("button[class='ant-btn css-dev-only-do-not-override-sqr1i9 ant-btn-primary ant-btn-color-primary ant-btn-variant-solid w-full sm:w-auto']").click();
        addTax({
            Id: "GST",
            taxName: randomName,
            percentage:"15.25",

        })
        cy.get("#appliesOn").click()
        //tax on total bill 
        cy.get("div[title='Total Bill'] div[class='ant-select-item-option-content']").click()
        cy.get("button[class='ant-btn css-dev-only-do-not-override-sqr1i9 ant-btn-primary ant-btn-color-primary ant-btn-variant-solid'] span").click()
    })

    // Dine in Only
     it('should add the taxes under the slab Dine in Only  ',()=>{
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
        cy.visit('http://localhost:3000/restaurants/1/administration/taxes');
        cy.get("button[class='ant-btn css-dev-only-do-not-override-sqr1i9 ant-btn-primary ant-btn-color-primary ant-btn-variant-solid w-full sm:w-auto']").click();
        addTax({
            Id: "GST",
            taxName: randomName,
            percentage:"15.25",

        })
        cy.get("#appliesOn").click()
        //tax on Dine In only 
        cy.get("div[title='Dine-In Only'] div[class='ant-select-item-option-content']").click()
        cy.get("button[class='ant-btn css-dev-only-do-not-override-sqr1i9 ant-btn-primary ant-btn-color-primary ant-btn-variant-solid'] span").click()
    })

    // take away orders
    it('should add the taxes under the slab take away orders  ',()=>{
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
        cy.visit('http://localhost:3000/restaurants/1/administration/taxes');
        cy.get("button[class='ant-btn css-dev-only-do-not-override-sqr1i9 ant-btn-primary ant-btn-color-primary ant-btn-variant-solid w-full sm:w-auto']").click();
        addTax({
            Id: "GST",
            taxName: randomName,
            percentage:"15.25",

        })
        cy.get("#appliesOn").click()
        //tax on take away orders 
        cy.get("div[title='Takeaway Orders'] div[class='ant-select-item-option-content']").click()
        cy.get("button[class='ant-btn css-dev-only-do-not-override-sqr1i9 ant-btn-primary ant-btn-color-primary ant-btn-variant-solid'] span").click()
    })

    //Delivery orders
      it('should add the taxes under the slab delivery orders',()=>{
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
        cy.visit('http://localhost:3000/restaurants/1/administration/taxes');
        cy.get("button[class='ant-btn css-dev-only-do-not-override-sqr1i9 ant-btn-primary ant-btn-color-primary ant-btn-variant-solid w-full sm:w-auto']").click();
        addTax({
            Id: "GST",
            taxName: randomName,
            percentage:"15.25",

        })
        cy.get("#appliesOn").click()
        //tax on delivery orders 
        cy.get("div[title='Delivery Orders'] div[class='ant-select-item-option-content']").click()
        cy.get("button[class='ant-btn css-dev-only-do-not-override-sqr1i9 ant-btn-primary ant-btn-color-primary ant-btn-variant-solid'] span").click()
    })
 })