import InputPage from "../page-objects/inputPage"
import HomePage from "../page-objects/homePage"
import CheckboxPage from "../page-objects/checkboxPage"
import DropdownListPage from "../page-objects/dropdownListPage"
import HoversPage from "../page-objects/hoversPage"
import BasicAuthPage from  "../page-objects/basicAuthPage"
import FormPage from "../page-objects/formPage"

describe('TestingSimpleSiteProject', () => {
    beforeEach(()=> {
        cy.visit('/')
    })
  const homePage = new HomePage();

    it('Test Inputs', function () {
        homePage.clickInputsTab()

        const inputPage = new InputPage();
        inputPage.typeNumberIntoField()
        inputPage.typeLettersIntoField()
    })

    it('Test Checkboxes', function () {
        homePage.clickCheckboxTab()

        const checkboxPage = new CheckboxPage();
        checkboxPage.checkFirstCheckbox()
        checkboxPage.uncheckLastCheckbox()
    })

    it('Test Dropdown List', function() {
        homePage.clickDropdownListTab()

        const dropdownPage = new DropdownListPage();
        dropdownPage.chooseDropdownListFirstOption()
    })

    it('Test Hover', function() {
        homePage.clickHoversTab()

        const hoversPage = new HoversPage();
        hoversPage.hoverOverElement()
    })

    it('Test Basic Authentication', function () {
        homePage.clickBasicAuthTab()

        const basicAuthPage = new BasicAuthPage();
        basicAuthPage.inputUsername()
        basicAuthPage.inputPassword()
        basicAuthPage.clickLogin()
        basicAuthPage.verifyLoginSuccess()
        basicAuthPage.clickReturnToMainPage()
    })

    it('Test Form', function() {
        homePage.clickFormTab()

        const formPage = new FormPage();
        formPage.inputFirstName()
        formPage.inputLastName()
        formPage.verifySuccess()
        formPage.clickSubmit()
    })
})