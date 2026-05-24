import Urls from "./urls";

const inputsHeader = '#inputs-header'
const checkboxHeader = '#checkbox-header'
const dropdownListHeader = '#dropdownlist-header'
const hoversHeader = '#hovers-header'
const basicAuthHeader = '#basicauth-header'
const formHeader = '#form-header'
const keypressesHeader = '#keypresses-header'
const elementsAddRemoveHeader = '#addremoveelements-header'
const statusCodesHeader = '#statuscodes-header'
const iframeHeader = '#iframe-header'
const datePickerHeader = '#datepicker-header'
const dragAndDropHeader = '#draganddrop-header'

class HomePage{
    clickInputsTab(){
        cy.get(inputsHeader).click()
    }
    clickCheckboxTab(){
        cy.get(checkboxHeader).click()
    }
    clickDropdownListTab(){
        cy.get(dropdownListHeader).click()
    }
    clickHoversTab(){
        cy.get(hoversHeader).click()
    }
    clickBasicAuthTab(){
        cy.get(basicAuthHeader).click()
    }
    clickFormTab(){
        cy.get(formHeader).click()
    }
    clickKeyPressesTab(){
        cy.get(keypressesHeader).click()
    }
    clickAddRemoveElementsTab(){
        cy.get(elementsAddRemoveHeader).click()
    }
    clickStatusCodesTab(){
        cy.get(statusCodesHeader).click()
    }
    clickIFrameTab(){
        cy.get(iframeHeader).click()
    }
    clickDatePickerTab(){
        cy.get(datePickerHeader).click()
    }
    clickDragAndDropTab(){
        cy.get(dragAndDropHeader).click()
    }
    visitPage(){
        const url = new Urls()
        url.visitHomePage()
    }
}
export default HomePage;