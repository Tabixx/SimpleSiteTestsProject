const username = '#ba_username'
const password = '#ba_password'
const loginButton = 'button[onclick="onLoginSubmit()"]'
const yippieSuccess = '#loggedInMessage'
const returnButton = '#retrun\\ button'

class BasicAuthPage{
    inputUsername() {
        cy.get(username).clear().type('admin').should('have.value', 'admin')
    }
    inputPassword() {
        cy.get(password).clear().type('admin').should('have.value', 'admin')
    }
    clickLogin() {
        cy.get(loginButton).click()
    }
    verifyLoginSuccess() {
        cy.get(yippieSuccess).should('be.visible').and('contain.text', 'You are logged in!')
    }
    clickReturnToMainPage() {
        cy.get(returnButton).click()
    }
}

export default BasicAuthPage