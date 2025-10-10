function addResturant(params){
cy.get("#name").type(params.name) // resturant name 
 cy.get('#country',{timeout:10000}).click()  // resturant country
    //     .type(params.country)
    //    cy.get('div.flex.items-center.gap-1',{timeout:20000}).should('be.visible').click({multiple:true,force:true})
    cy.get("div[title='Afghanistan'] div[class='ant-select-item-option-content']").click()
cy.get('#city',{timeout:10000}).click()  // resturant city
    //     .type(params.city)
    //    //cy.get('div.flex.items-center.gap-1',{timeout:20000}).should('be.visible').click({multiple:true,force:true})
    //    cy.get("div[title='Afghanistan'] div[class='ant-select-item-option-content']",{timeout:10000}).should('be,visible').click({force:true})
    cy.get("div[title='Adraskan'] div[class='ant-select-item-option-content']").click()
cy.get('#address').type(params.address)  // resturant address
cy.get('#phone').type(params.phoneNumber)  // resturant phone number
cy.get('#email').type(params.email)  //email address

cy.get('#currency',{timeout:10000}).click();  // resturant currency
    //     .type(params.currency)
    //    cy.get('div.flex.items-center.gap-1',{timeout:20000}).should('be.visible').click({multiple:true,force:true})
    cy.get("div[title='USD - US Dollar ($)'] div[class='ant-select-item-option-content']").click();

cy.get('#description').type(params.description)



}
module.exports = {addResturant}