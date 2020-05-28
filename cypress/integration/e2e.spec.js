describe('The Home Page', () => {
    it('successfully loads', () => {
        cy.server({
            // whitelist: (xhr) => { return true}
        })
        cy.route({
            url: 'http://localhost:3001/api/item'
        }).as('getItems')
        cy.visit('/')
        
        // cy.wait(['@getItems']) //doesn't work because of proxy?
        

        cy.contains('home')
    })
  })