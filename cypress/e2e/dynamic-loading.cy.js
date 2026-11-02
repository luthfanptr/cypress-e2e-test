describe("dynamic loaded page elements", () => {
  const base = 'https://the-internet.herokuapp.com'

  context('Example 1: Element on page hidden', () => {
    beforeEach(() => {
      cy.visit(`${base}/dynamic_loading/1`)
    });

    it.only('Positive Test Case', () => {
      cy.get('#start button').should('be.visible').click()
      cy.get('#loading').should('be.visible')
      cy.get('#finish', { timeout: 10000 }).should('be.visible').and('contain', 'Hello World!')
      cy.screenshot('example1-success')
    });

    it('Negative Test Case', () => {
      cy.get('#start button').should('be.visible').click()
      cy.get('#finish', { timeout: 500 }).should('be.visible')
    });
  })
});
