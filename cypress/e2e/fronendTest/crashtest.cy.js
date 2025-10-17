const { login } = require("../helperMethods/login");
const { routing } = require("../helperMethods/routing");

describe('crashtest for Resturants', () => { 
    it('should navigates between routes to check for crashing',()=>{
        login()
         cy.get('.ant-btn-icon').click();
  cy.get('ul.ant-menu', { timeout: 10000 }).should('exist');
  cy.get('li.ant-menu-item').first().realHover(); // or hover the submenu parent if needed
  cy.wait(500); // allow React/AntD to mount submenu
  cy.contains('span.ant-menu-title-content', 'Restaurant', { timeout: 10000 })
    .should('be.visible')
    .click();
        cy.get("body div[id='root'] div[class='ant-layout ant-layout-has-sider min-h-screen css-dev-only-do-not-override-sqr1i9'] div[class='ant-layout css-dev-only-do-not-override-sqr1i9'] main[class='ant-layout-content bg-gray-50 p-6 sm:p-10 overflow-auto css-dev-only-do-not-override-sqr1i9'] div[class='space-y-6'] div[class='ant-row css-dev-only-do-not-override-sqr1i9'] div:nth-child(1) div:nth-child(1) div:nth-child(2) div:nth-child(1) div:nth-child(1) div:nth-child(1)").click();

        routing({
            route:['http://localhost:3000/restaurants','http://localhost:3000/restaurants/1'],
            selectors: [
                "h1[class='text-xl sm:text-2xl font-bold text-gray-800 mb-2']", // Selector for the schedules page
                
            ]
        })
    })
    it('should navigates between routes to check for crashing reservation & resturant now',()=>{
        login()
         cy.get('.ant-btn-icon').click();
  cy.get('ul.ant-menu', { timeout: 10000 }).should('exist');
  cy.get('li.ant-menu-item').first().realHover(); // or hover the submenu parent if needed
  cy.wait(500); // allow React/AntD to mount submenu
  cy.contains('span.ant-menu-title-content', 'Restaurant', { timeout: 10000 })
    .should('be.visible')
    .click();
        cy.get("body div[id='root'] div[class='ant-layout ant-layout-has-sider min-h-screen css-dev-only-do-not-override-sqr1i9'] div[class='ant-layout css-dev-only-do-not-override-sqr1i9'] main[class='ant-layout-content bg-gray-50 p-6 sm:p-10 overflow-auto css-dev-only-do-not-override-sqr1i9'] div[class='space-y-6'] div[class='ant-row css-dev-only-do-not-override-sqr1i9'] div:nth-child(1) div:nth-child(1) div:nth-child(2) div:nth-child(1) div:nth-child(1) div:nth-child(1)").click();

        routing({
            route:['http://localhost:3000/restaurants/1/reservation','http://localhost:3000/restaurants/1/restaurantnow'],
            selectors: [
                "h1[class='text-xl sm:text-2xl font-bold text-gray-800 mb-2']"
            ]
        })
    })
    it('should navigates between routes to check for crashing staff managment & structure managment',()=>{
        login()
         cy.get('.ant-btn-icon').click();
  cy.get('ul.ant-menu', { timeout: 10000 }).should('exist');
  cy.get('li.ant-menu-item').first().realHover(); // or hover the submenu parent if needed
  cy.wait(500); // allow React/AntD to mount submenu
  cy.contains('span.ant-menu-title-content', 'Restaurant', { timeout: 10000 })
    .should('be.visible')
    .click();
        cy.get("body div[id='root'] div[class='ant-layout ant-layout-has-sider min-h-screen css-dev-only-do-not-override-sqr1i9'] div[class='ant-layout css-dev-only-do-not-override-sqr1i9'] main[class='ant-layout-content bg-gray-50 p-6 sm:p-10 overflow-auto css-dev-only-do-not-override-sqr1i9'] div[class='space-y-6'] div[class='ant-row css-dev-only-do-not-override-sqr1i9'] div:nth-child(1) div:nth-child(1) div:nth-child(2) div:nth-child(1) div:nth-child(1) div:nth-child(1)").click();

        routing({
            route:['http://localhost:3000/restaurants/1/staff','http://localhost:3000/restaurants/1/structure'],
            selectors: [
                "h1[class='text-xl sm:text-2xl font-bold text-gray-800 mb-2']"
            ]
        })
    })
    it('should navigates between routes to check for crashing Menu managment,Orders managment',()=>{
        login()
         cy.get('.ant-btn-icon').click();
  cy.get('ul.ant-menu', { timeout: 10000 }).should('exist');
  cy.get('li.ant-menu-item').first().realHover(); // or hover the submenu parent if needed
  cy.wait(500); // allow React/AntD to mount submenu
  cy.contains('span.ant-menu-title-content', 'Restaurant', { timeout: 10000 })
    .should('be.visible')
    .click();
        cy.get("body div[id='root'] div[class='ant-layout ant-layout-has-sider min-h-screen css-dev-only-do-not-override-sqr1i9'] div[class='ant-layout css-dev-only-do-not-override-sqr1i9'] main[class='ant-layout-content bg-gray-50 p-6 sm:p-10 overflow-auto css-dev-only-do-not-override-sqr1i9'] div[class='space-y-6'] div[class='ant-row css-dev-only-do-not-override-sqr1i9'] div:nth-child(1) div:nth-child(1) div:nth-child(2) div:nth-child(1) div:nth-child(1) div:nth-child(1)").click();

        routing({
            route:['http://localhost:3000/restaurants/1/menu','http://localhost:3000/restaurants/1/orders'],
            selectors: [
                "h1[class='text-xl sm:text-2xl font-bold text-gray-800 mb-2']"
            ]
        })
    })
        it('should navigates between routes to check for crashing Kitchen Dasgboard, Bill managment ',()=>{
        login()
         cy.get('.ant-btn-icon').click();
  cy.get('ul.ant-menu', { timeout: 10000 }).should('exist');
  cy.get('li.ant-menu-item').first().realHover(); // or hover the submenu parent if needed
  cy.wait(500); // allow React/AntD to mount submenu
  cy.contains('span.ant-menu-title-content', 'Restaurant', { timeout: 10000 })
    .should('be.visible')
    .click();
        cy.get("body div[id='root'] div[class='ant-layout ant-layout-has-sider min-h-screen css-dev-only-do-not-override-sqr1i9'] div[class='ant-layout css-dev-only-do-not-override-sqr1i9'] main[class='ant-layout-content bg-gray-50 p-6 sm:p-10 overflow-auto css-dev-only-do-not-override-sqr1i9'] div[class='space-y-6'] div[class='ant-row css-dev-only-do-not-override-sqr1i9'] div:nth-child(1) div:nth-child(1) div:nth-child(2) div:nth-child(1) div:nth-child(1) div:nth-child(1)").click();

        routing({
            route:['http://localhost:3000/restaurants/1/kitchen','http://localhost:3000/restaurants/1/billing'],
            selectors: [
                "h1[class='text-xl sm:text-2xl font-bold text-gray-800 mb-2']"
            ]
        })
    })
         it('should navigates between routes to check for crashing Refunds, Administration, Settings',()=>{
        login()
         cy.get('.ant-btn-icon').click();
  cy.get('ul.ant-menu', { timeout: 10000 }).should('exist');
  cy.get('li.ant-menu-item').first().realHover(); // or hover the submenu parent if needed
  cy.wait(500); // allow React/AntD to mount submenu
  cy.contains('span.ant-menu-title-content', 'Restaurant', { timeout: 10000 })
    .should('be.visible')
    .click();
        cy.get("body div[id='root'] div[class='ant-layout ant-layout-has-sider min-h-screen css-dev-only-do-not-override-sqr1i9'] div[class='ant-layout css-dev-only-do-not-override-sqr1i9'] main[class='ant-layout-content bg-gray-50 p-6 sm:p-10 overflow-auto css-dev-only-do-not-override-sqr1i9'] div[class='space-y-6'] div[class='ant-row css-dev-only-do-not-override-sqr1i9'] div:nth-child(1) div:nth-child(1) div:nth-child(2) div:nth-child(1) div:nth-child(1) div:nth-child(1)").click();

        routing({
            route:['http://localhost:3000/restaurants/1/refund','http://localhost:3000/restaurants/1/administration/menucategories','http://localhost:3000/restaurants/1/settings'],
            selectors: [
                "span[class='ant-typography text-lg sm:text-xl font-semibold text-gray-800 truncate max-w-[120px] sm:max-w-none css-dev-only-do-not-override-sqr1i9']"
            ]
        })
    })

 })