function login(){
    cy.visit('http://localhost:3000/resturants',{timeout:20000})
}
module.exports = {login}