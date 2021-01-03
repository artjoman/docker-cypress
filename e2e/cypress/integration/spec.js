it('loads page', () => {
  cy.visit('/')
  cy.contains('Hi there!')
})

it('loads page', () => {
  cy.visit('/')
  cy.contains('Hi there!!!!')
})
