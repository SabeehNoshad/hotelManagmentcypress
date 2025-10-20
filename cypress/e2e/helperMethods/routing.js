const { get } = require("lodash");

// for crash test routing and verification 
function routing(params){
    if (params && params.route && params.route.length > 0){
        params.route.forEach((url,index) => {
            cy.visit(url);
            if (params.selectors[index]){
                cy.get(params.selectors[index],{timeout:20000}).should('be.visible');
                cy.log('element is visible')
            }
            else{
                cy.log(`No Selector provided for ${url}`)
            }
        });
    }
}
// add user under user managment
function addUser(params){
    cy.get("#name").type(params.firstName);
    cy.get('#email').type(params.email + "@gmail.com")
}
// for adding a taxes under administration 
function addTax(params){
    cy.get("#taxId").type(params.Id);
    cy.get("#taxName").type(params.taxName)
    cy.get("#type").click();
    cy.get("div[title='Sales Tax'] div[class='ant-select-item-option-content']").click();
    cy.get("#percentage").type(params.percentage);

}
// adding menu category
function addCategory(params){
    cy.get("#categoryNumber").type(params.catnumber)
    cy.get('#categoryName').type(params.catName);
    cy.get("#categorySequence").type(params.catSeq)
}
// adding menu items
function addMenuItem(params){
cy.get("#name").type(params.name)
cy.get("#categoryId").click()
cy.get("div[class='ant-select-item ant-select-item-option ant-select-item-option-active'] div[class='ant-select-item-option-content']").click()
cy.get("#description").type(params.description)
cy/get("#price").type(params.price)
//ingredients
params.ingredient.forEach(ingredient => {
        cy.get("input[placeholder='Enter ingredient name']")
        .type(`${ingredient}{enter}`);
    })

}
module.exports = {routing,addUser,addTax,addCategory,addMenuItem}