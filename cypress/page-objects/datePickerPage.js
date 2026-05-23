const dateInput = '#start'

class DatePickerPage{
    selectValidDate(){
        cy.get(dateInput).click().clear().type('2020-05-13').should('have.value', '2020-05-13')
        cy.get(dateInput).then($input => {
        expect($input[0].checkValidity()).to.be.true
        })
    }
    selectDateTooEarly(){
        cy.get(dateInput).click().clear().type('2019-05-13').should('have.value', '2019-05-13')
        cy.get(dateInput).then($input => {
        expect($input[0].checkValidity()).to.be.false
        })
    }
    selectDateTooLate(){
        cy.get(dateInput).click().clear().type('2021-05-13').should('have.value', '2021-05-13')
        cy.get(dateInput).then($input => {
        expect($input[0].checkValidity()).to.be.false
        })
    }
    
}
export default DatePickerPage;