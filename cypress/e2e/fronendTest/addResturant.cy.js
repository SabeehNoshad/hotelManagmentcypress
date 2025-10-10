const { login } = require("../helperMethods/login")
import 'cypress-real-events/support';
import { addResturant } from '../helperMethods/add resturant function';
const {randomName,randomText,trimmedText} =require ("../helperMethods/documentGenerator")


describe('adding a  resturant ', () => { 




    it('Add restaurant button to be clickable', () => {
  login();

  // Step 1: Open the sidebar/menu
  cy.get('.ant-btn-icon').click();

  // Step 2: Wait for the menu to render
  cy.get('ul.ant-menu', { timeout: 10000 }).should('exist');

  // Step 3: Hover realistically over the parent menu to trigger the submenu render
  cy.get('li.ant-menu-item').first().realHover(); // or hover the submenu parent if needed
  cy.wait(500); // allow React/AntD to mount submenu

  // Step 4: Now find and click the "Restaurant" option safely
  cy.contains('span.ant-menu-title-content', 'Restaurant', { timeout: 10000 })
    .should('be.visible')
    .click();

  // Step 5: Continue with your next element
  cy.get("div.flex.flex-col.sm\\:flex-row.sm\\:justify-between.sm\\:items-center.gap-4 span:nth-child(2)")
    .scrollIntoView()
    .should('be.visible')
    .click();
});




it('add the resutrant sucessfully',()=>{
      login();

  // Step 1: Open the sidebar/menu
  cy.get('.ant-btn-icon').click();

  // Step 2: Wait for the menu to render
  cy.get('ul.ant-menu', { timeout: 10000 }).should('exist');

  // Step 3: Hover realistically over the parent menu to trigger the submenu render
  cy.get('li.ant-menu-item').first().realHover(); // or hover the submenu parent if needed
  cy.wait(500); // allow React/AntD to mount submenu

  // Step 4: Now find and click the "Restaurant" option safely
  cy.contains('span.ant-menu-title-content', 'Restaurant', { timeout: 10000 })
    .should('be.visible')
    .click();

  // Step 5: Continue with your next element
  cy.get("div.flex.flex-col.sm\\:flex-row.sm\\:justify-between.sm\\:items-center.gap-4 span:nth-child(2)")
    .scrollIntoView()
    .should('be.visible')
    .click();
    addResturant({
        name: randomName,
        country : 'Pakistan',
        City : 'Karachi',
        address : randomText,
        phoneNumber : '+1654961461564984',
        email : 'sadasdasd@dsf.com',
        currency : 'usd',
        description : trimmedText
    })
    cy.get("button[type='submit'] span").scrollIntoView().click();
  //  cy.get("ant-message ant-message-top css-dev-only-do-not-override-1vjf2v5").should('contain.text','Resturant added sucessfull')
})




    it('should show the necessary validation when filling up the form',()=>{
        login()
         // Step 1: Open the sidebar/menu
  cy.get('.ant-btn-icon').click();

  // Step 2: Wait for the menu to render
  cy.get('ul.ant-menu', { timeout: 10000 }).should('exist');

  // Step 3: Hover realistically over the parent menu to trigger the submenu render
  cy.get('li.ant-menu-item').first().realHover(); // or hover the submenu parent if needed
  cy.wait(500); // allow React/AntD to mount submenu

  // Step 4: Now find and click the "Restaurant" option safely
  cy.contains('span.ant-menu-title-content', 'Restaurant', { timeout: 10000 })
    .should('be.visible')
    .click();

  // Step 5: Continue with your next element
  cy.get("div.flex.flex-col.sm\\:flex-row.sm\\:justify-between.sm\\:items-center.gap-4 span:nth-child(2)")
    .scrollIntoView()
    .should('be.visible')
    .click();
       cy.get("button[type='submit'] span").scrollIntoView().click();

       // checking the valication 
       cy.get("div[id='name_help'] div[class='ant-form-item-explain-error']").should('include.text',"Please")
        cy.get("div[id='country_help'] div[class='ant-form-item-explain-error']").should('include.text',"Please")
         cy.get("div[id='city_help'] div[class='ant-form-item-explain-error']").should('include.text',"Please")
          cy.get("div[id='address_help'] div[class='ant-form-item-explain-error']").should('include.text',"Please")
           cy.get("div[id='phone_help'] div[class='ant-form-item-explain-error']").should('include.text',"Please")
            cy.get("div[id='phone_help'] div[class='ant-form-item-explain-error']").should('include.text',"Please")
             cy.get("div[id='email_help'] div[class='ant-form-item-explain-error']").should('include.text',"Please")

      

    })




    it('should not add sucessfully open wrong email validation',()=>{
        login()
          cy.get('.ant-btn-icon').click();
  cy.get('ul.ant-menu', { timeout: 10000 }).should('exist');
  cy.get('li.ant-menu-item').first().realHover(); // or hover the submenu parent if needed
  cy.wait(500); // allow React/AntD to mount submenu
  cy.contains('span.ant-menu-title-content', 'Restaurant', { timeout: 10000 })
    .should('be.visible')
    .click();
  cy.get("div.flex.flex-col.sm\\:flex-row.sm\\:justify-between.sm\\:items-center.gap-4 span:nth-child(2)")
    .scrollIntoView()
    .should('be.visible')
    .click();
    addResturant({
        name: randomName,
        country : 'Pakistan',
        City : 'Karachi',
        address : randomText,
        phoneNumber : '+1sadfdsfasdfasd',
        email : 'sadasdasd',
        currency : 'usd',
        description : trimmedText
    })
    cy.get("button[type='submit'] span").scrollIntoView().click();
  //  cy.get("ant-message ant-message-top css-dev-only-do-not-override-1vjf2v5").should('contain.text','Resturant added sucessfull')
   cy.get("div[id='email_help'] div[class='ant-form-item-explain-error']").should('include.text',"Please")

    })




  it('should not create sucessfully upon placing email.com without "."',()=>{
           login()
          cy.get('.ant-btn-icon').click();
  cy.get('ul.ant-menu', { timeout: 10000 }).should('exist');
  cy.get('li.ant-menu-item').first().realHover(); // or hover the submenu parent if needed
  cy.wait(500); // allow React/AntD to mount submenu
  cy.contains('span.ant-menu-title-content', 'Restaurant', { timeout: 10000 })
    .should('be.visible')
    .click();
  cy.get("div.flex.flex-col.sm\\:flex-row.sm\\:justify-between.sm\\:items-center.gap-4 span:nth-child(2)")
    .scrollIntoView()
    .should('be.visible')
    .click();
    addResturant({
        name: trimmedText,
        country : 'Pakistan',
        City : 'Karachi',
        address : randomText,
        phoneNumber : '+1sadfdsfasdfasd',
        email : 'sadasdasd@sadasd',
        currency : 'usd',
        description : trimmedText
    })
    cy.get("button[type='submit'] span").scrollIntoView().click();
  //  cy.get("ant-message ant-message-top css-dev-only-do-not-override-1vjf2v5").should('contain.text','Resturant added sucessfull')
   cy.get("div[id='email_help'] div[class='ant-form-item-explain-error']").should('include.text',"Please")
    })

    it('should not create resturant without proper phone number',()=>{
              login()
          cy.get('.ant-btn-icon').click();
  cy.get('ul.ant-menu', { timeout: 10000 }).should('exist');
  cy.get('li.ant-menu-item').first().realHover(); // or hover the submenu parent if needed
  cy.wait(500); // allow React/AntD to mount submenu
  cy.contains('span.ant-menu-title-content', 'Restaurant', { timeout: 10000 })
    .should('be.visible')
    .click();
  cy.get("div.flex.flex-col.sm\\:flex-row.sm\\:justify-between.sm\\:items-center.gap-4 span:nth-child(2)")
    .scrollIntoView()
    .should('be.visible')
    .click();
    addResturant({
        name: randomName,
        country : 'Pakistan',
        City : 'Karachi',
        address : randomText,
        phoneNumber : '+1',
        email : 'sadasdasd@fdascom',
        currency : 'usd',
        description : trimmedText
    })
    cy.get("button[type='submit'] span").scrollIntoView().click();
  //  cy.get("ant-message ant-message-top css-dev-only-do-not-override-1vjf2v5").should('contain.text','Resturant added sucessfull')
  
    cy.get("div[id='phone_help'] div[class='ant-form-item-explain-error']").should('include.text',"Please")
    })




    it('should not create upon alphabets in the phone number',()=>{
                login()
          cy.get('.ant-btn-icon').click();
  cy.get('ul.ant-menu', { timeout: 10000 }).should('exist');
  cy.get('li.ant-menu-item').first().realHover(); // or hover the submenu parent if needed
  cy.wait(500); // allow React/AntD to mount submenu
  cy.contains('span.ant-menu-title-content', 'Restaurant', { timeout: 10000 })
    .should('be.visible')
    .click();
  cy.get("div.flex.flex-col.sm\\:flex-row.sm\\:justify-between.sm\\:items-center.gap-4 span:nth-child(2)")
    .scrollIntoView()
    .should('be.visible')
    .click();
    addResturant({
        name: randomName,
        country : 'Pakistan',
        City : 'Karachi',
        address : randomText,
        phoneNumber : 'dsgdfgdf',
        email : 'sadasdasd@fdas.com',
        currency : 'usd',
        description : trimmedText
    })
    cy.get("button[type='submit'] span").scrollIntoView().click();
  //  cy.get("ant-message ant-message-top css-dev-only-do-not-override-1vjf2v5").should('contain.text','Resturant added sucessfull')
  
    cy.get("div[id='phone_help'] div[class='ant-form-item-explain-error']").should('include.text',"Please")

    })


  
    it('should sucessfully update the resturant address',()=>{
               login()
          cy.get('.ant-btn-icon').click();
  cy.get('ul.ant-menu', { timeout: 10000 }).should('exist');
  cy.get('li.ant-menu-item').first().realHover(); // or hover the submenu parent if needed
  cy.wait(500); // allow React/AntD to mount submenu
  cy.contains('span.ant-menu-title-content', 'Restaurant', { timeout: 10000 })
    .should('be.visible')
    .click();
  cy.get("div.flex.flex-col.sm\\:flex-row.sm\\:justify-between.sm\\:items-center.gap-4 span:nth-child(2)")
    .scrollIntoView()
    .should('be.visible')
    .click();
    cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(3) > li:nth-child(1) > span:nth-child(1) > button:nth-child(1) > span:nth-child(2)')
    .click();
    cy.get("button[type='submit'] span").scrollIntoView().click();

    })
    it('should sucessfully update the resturant phone number',()=>{
                login()
          cy.get('.ant-btn-icon').click();
  cy.get('ul.ant-menu', { timeout: 10000 }).should('exist');
  cy.get('li.ant-menu-item').first().realHover(); // or hover the submenu parent if needed
  cy.wait(500); // allow React/AntD to mount submenu
  cy.contains('span.ant-menu-title-content', 'Restaurant', { timeout: 10000 })
    .should('be.visible')
    .click();
  
    cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(3) > li:nth-child(1) > span:nth-child(1) > button:nth-child(1) > span:nth-child(2)')
    .first().realHover().click();
    cy.get('#phone').clear().type('123')
    cy.get("button[type='submit'] span").scrollIntoView().click();
    })


    it('should sucessfully update the resutrant email address ',()=>{
         login()
          cy.get('.ant-btn-icon').click();
  cy.get('ul.ant-menu', { timeout: 10000 }).should('exist');
  cy.get('li.ant-menu-item').first().realHover(); // or hover the submenu parent if needed
  cy.wait(500); // allow React/AntD to mount submenu
  cy.contains('span.ant-menu-title-content', 'Restaurant', { timeout: 10000 })
    .should('be.visible')
    .click();
  
    cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(3) > li:nth-child(1) > span:nth-child(1) > button:nth-child(1) > span:nth-child(2)')
    .first().realHover().click();
    cy.get('#email').clear().type('new@new.com')
    cy.get("button[type='submit'] span").scrollIntoView().click();
    })



    it('should sucessfully update the name of the resturant',()=>{
         login()
          cy.get('.ant-btn-icon').click();
  cy.get('ul.ant-menu', { timeout: 10000 }).should('exist');
  cy.get('li.ant-menu-item').first().realHover(); // or hover the submenu parent if needed
  cy.wait(500); // allow React/AntD to mount submenu
  cy.contains('span.ant-menu-title-content', 'Restaurant', { timeout: 10000 })
    .should('be.visible')
    .click();
  
    cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(3) > li:nth-child(1) > span:nth-child(1) > button:nth-child(1) > span:nth-child(2)')
    .first().realHover().click();
    cy.get('#name').clear().type(randomName)
    cy.get("button[type='submit'] span").scrollIntoView().click();
    })

 })