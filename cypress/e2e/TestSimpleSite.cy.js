import InputPage from "../page-objects/inputPage"
import HomePage from "../page-objects/homePage"
import CheckboxPage from "../page-objects/checkboxPage"
import DropdownListPage from "../page-objects/dropdownListPage"
import HoversPage from "../page-objects/hoversPage"

describe('TestingSimpleSiteProject', () => {
    beforeEach(()=> {
        cy.visit('/')
    })
    
    it('test inputs', function () {
        
        const homePage = new HomePage();
        homePage.clickInputsTab()

        const inputPage = new InputPage();
        inputPage.typeNumberIntoField()
        inputPage.typeLettersIntoField()
    })

    it('test checkboxes', function () {
        
        const homePage = new HomePage();
        homePage.clickCheckboxTab()

        const checkboxPage = new CheckboxPage();
        checkboxPage.checkFirstCheckbox()
        checkboxPage.uncheckLastCheckbox()
    })

    it('test dropdown list', function() {

        const homePage = new HomePage();
        homePage.clickDropdownListTab()

        const dropdownPage = new DropdownListPage();
        dropdownPage.chooseDropdownListFirstOption()
    })

    it('test hover', function() {
        
        const homePage = new HomePage();
        homePage.clickHoversTab()

        const hoversPage = new HoversPage();
        hoversPage.hoverOverElement()
    })
})