describe('The Home Page', () => {
    it('successfully loads', () => {
        cy.server()
        cy.visit('/')
        cy.contains('Reload').click()
        cy.contains('Home')
            .should('have.css', 'font-family').and('match', /^Roboto,/)
    })
  })