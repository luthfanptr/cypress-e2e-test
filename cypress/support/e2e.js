import './commands'
import 'cypress-mochawesome-reporter/register'

beforeEach(() => {
    const blocked = ['**optimizely.com/**', '*.google-analytics.com']
    blocked.forEach(url => cy.intercept(url, {statusCode: 204, log: false}))
})