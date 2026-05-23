const iframe = 'iframe'
const button1 = '#simpleButton1'
const button2 = '#simpleButton2'
const clickedButton = '#whichButtonIsClickedMessage'

class iFramePage{
    iFrameButton1Click(){
        cy.get(iframe).its('0.contentDocument.body').should('be.visible').find(button1).click()

        cy.get(iframe).its('0.contentDocument.body').should('be.visible').find(clickedButton).should('have.text', 'Button 1 was clicked!')
    }
    iFrameButton2Click(){
        cy.get(iframe).its('0.contentDocument.body').should('be.visible').find(button2).click()

        cy.get(iframe).its('0.contentDocument.body').should('be.visible').find(clickedButton).should('have.text', 'Button 2 was clicked!')
    }
}
export default iFramePage