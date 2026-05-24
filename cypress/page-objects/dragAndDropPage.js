const columnA = '#column-a'
const columnB = '#column-b'

class DragAndDropPage{
    dragColumnA(){
        cy.get(columnA).should('be.visible').drag(columnB)
        cy.wait(500)
        cy.get('#column-b header').should('have.text', 'A')
        cy.get('#column-a header').should('have.text', 'B')
    }
    dragColumnB(){
        cy.get(columnB).should('be.visible').drag(columnA)
        cy.wait(500)
        cy.get('#column-a header').should('have.text', 'A')
        cy.get('#column-b header').should('have.text', 'B')
    }
}
export default DragAndDropPage;