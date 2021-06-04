describe('Form Validation', () => {
  it('Login Test Fail - Wrong Email', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#email').type('omar@instabug.com')
    cy.get('#password').type('12345678')
    cy.get('#login-form > .text-white').click()
  })
  it('Login Test Fail - Wrong Password', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#email').type('mohamed@instabug.com')
    cy.get('#password').type('this is a cool tool')
    cy.get('#login-form > .text-white').click()
  })
  it('Login Test Pass - Redirect', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#email').type('mohamed@instabug.com')
    cy.get('#password').type('12345678')
    cy.get('#login-form > .text-white').click()
  })
  it('Login Test Fail - Email Input', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#email').type('dddd')
    cy.get('#password').click()
  })
})