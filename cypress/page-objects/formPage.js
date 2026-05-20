import { faker } from '@faker-js/faker';

const firstName = '#fname'
const lastName = '#lname'
const submitButton = '#formSubmitButton'
const randomFirstName = faker.person.firstName()
const randomLastName = faker.person.lastName()

class FormPage {
    inputFirstName() {
        cy.get(firstName).clear().type(randomFirstName).should('have.value', randomFirstName)
    }
    inputLastName() {
        cy.get(lastName).clear().type(randomLastName).should('have.value', randomLastName)
    }
    clickSubmit() {
        cy.get(submitButton).click()
    }
    verifySuccess() {
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('success')
        })
    }
}
export default FormPage