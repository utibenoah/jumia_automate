
describe('add to cart', () => {
  it.only('cart', () => {
    cy.visit('www.jumia.com.ng')
    cy.get("a[href='/health-beauty/']").should('be.visible').click({force: true})
    cy.get(':nth-child(2) > .card > .crs-w > .crs > :nth-child(1) > .prd').click()
    cy.get('#add-to-cart > .add').should('be.visible').click({force: true})
    cy.get('a[href="/cart/"]').should('be.visible').click()
    
  })


  it('registration', () => {
    
  });

  it('login', () => {
    
  });
})