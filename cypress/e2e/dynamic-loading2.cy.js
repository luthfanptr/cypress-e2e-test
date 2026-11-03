describe("Dynamic Loading Example 2", () => {
    const base = 'https://the-internet.herokuapp.com'

    context('Example 2: Element rendered after fact', () => {
        beforeEach(() => {
            cy.visit(`${base}/dynamic_loading/2`)
        });

        it.only('Positive Test Case', () => {
            cy.get('#finish').should('not.exist')
            cy.get('#start button').should('be.visible').click()
            cy.get('#loading').should('be.visible')
            cy.get('#loading', { timeout: 10000 }).should('not.be.visible')
            cy.get('#finish').should('be.visible').and('contain', 'Hello World!')
            cy.screenshot('example2-success')
        });

        it('Negative Test Case', () => {
            cy.get('#start button').should('be.visible').click()
            cy.get('#loading').should('be.visible')
            cy.get('#finish').should('not.exist')
        });
    })

})