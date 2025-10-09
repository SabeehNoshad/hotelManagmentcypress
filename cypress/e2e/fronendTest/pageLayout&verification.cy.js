const { login } = require("../helperMethods/login")

describe('Landing page verification ', () => { 
    it('should verify the title of the page ',() =>{
        login();
      cy.get('span.ant-typography.text-lg.font-semibold.text-gray-800.truncate')
      .should('be.visible')
      .should('contain.text', 'Restaurant Manager');
      cy.get('.ant-btn-icon').click();
    })

    it('should show administrator upon selecting Admin',()=>{
    login()
     cy.get('.ant-btn-icon').should('be.visible').click();
     cy.get("button[title='Administrator'] span").scrollIntoView().should('be.visible').click();
     cy.get(".ant-tag.ant-tag-has-color.css-dev-only-do-not-override-sqr1i9").scrollIntoView().should('contain.text','Administrator')
 })
 it('should contain the text manager when selected manager as a role',()=>{
    login();
      cy.get('.ant-btn-icon').should('be.visible').click();
     cy.get("button[title='Manager'] span",{timeout:3000}).scrollIntoView().should('be.visible').click();
     cy.get(".ant-tag.ant-tag-has-color.css-dev-only-do-not-override-sqr1i9").scrollIntoView().should('contain.text','Manager')
 })
 it('should contain the text staff when selected staff as a role',()=>{
    login();
      cy.get('.ant-btn-icon').should('be.visible').click();
     cy.get("button[title='Staff']",{timeout:3000}).scrollIntoView().should('be.visible').click();
     cy.get(".ant-tag.ant-tag-has-color.css-dev-only-do-not-override-sqr1i9").scrollIntoView().should('contain.text','Staff')
 })
 })