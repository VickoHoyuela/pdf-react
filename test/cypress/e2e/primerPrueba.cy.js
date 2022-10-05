describe('Primera prueba', () => {
  it('Visitar Google', () => {
    cy.visit('https://www.google.com.mx/')
  })

  it('Visitar mi app', () => {
    cy.visit('http://localhost:5173/')
  })
})