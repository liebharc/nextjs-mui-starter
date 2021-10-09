describe('The landing page', () => {
    const moveToBottom = () =>
        cy
            .get('.HeaderNavBar_joinButton__3yjon > .MuiButton-root')
            .contains('Get started')
    const emailInput = () =>
        cy.get(
            '.MuiGrid-grid-md-8 > .MuiFormControl-root > .MuiInput-root > .MuiInput-input'
        )
    const consentCheck = () => cy.get('.PrivateSwitchBase-input')
    const subscribeButton = () =>
        cy
            .get('.MuiGrid-grid-md-4.undefined > .MuiButton-root')
            .contains('Subscribe')
    function expectErrorMessage(message: string) {
        cy.get('.MuiFormHelperText-root').then((e) => {
            expect(e.text().trim()).to.equal(message)
        })
    }
    function expectSuccessMessage(message: string) {
        cy.get('.SubscribeSection_messageSuccess__3xoQA').then((e) => {
            expect(e.text().trim()).to.include(message)
        })
    }

    it('allows to subscribe', () => {
        cy.visit('/')
        moveToBottom().click()
        subscribeButton().click()
        expectErrorMessage('We need your consent to contact you')
        consentCheck().check()
        subscribeButton().click()
        expectErrorMessage('We need your email to contact you')
        emailInput().type('test@test.com')
        subscribeButton().click()
        expectSuccessMessage('Thanks!')
    })
})
