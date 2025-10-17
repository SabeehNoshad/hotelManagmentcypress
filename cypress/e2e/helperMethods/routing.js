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
module.exports = {routing}