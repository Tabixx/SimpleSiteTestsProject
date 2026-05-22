const addElement = 'button[onclick="addElement()"]'
const deleteButton = '.added-manually'

class AddRemoveElementsPage{
    addElements(){
        cy.get(addElement).click()
        cy.get(addElement).click()
        cy.get(addElement).click()
        cy.get(deleteButton).should('have.length', 3)
    }
    deleteElement(){
        cy.get(deleteButton).first().click()
        cy.get(deleteButton).should('have.length', 2)
    }
    deleteAllElements(){
        cy.get(deleteButton).first().click()
        cy.get(deleteButton).first().click()
        cy.get(deleteButton).should('not.exist')
    }
}

export default AddRemoveElementsPage