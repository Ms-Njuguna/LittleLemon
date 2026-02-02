describe('Demo Login Page', () => {
  it('should load the page and display the login form', () => {
    cy.visit('test.html') // assumes file is opened with file:/// path

    cy.get('h1').should('contain', 'Welcome to the Demo App')
    cy.get('#username').should('be.visible')
    cy.get('#password').should('exist')
    cy.get('button[type=submit]').should('have.text', 'Login')
  })
})