import InputPage from "../page-objects/inputPage"
import HomePage from "../page-objects/homePage"
import CheckboxPage from "../page-objects/checkboxPage"
import DropdownListPage from "../page-objects/dropdownListPage"
import HoversPage from "../page-objects/hoversPage"
import BasicAuthPage from  "../page-objects/basicAuthPage"
import FormPage from "../page-objects/formPage"
import KeyPressPage from "../page-objects/keyPressesPage"
import AddRemoveElementsPage from "../page-objects/elementAddRemovePage"
import StatusCodesPage from "../page-objects/statusCodesPage"
import iFramePage from "../page-objects/iFramePage"
import DatePickerPage from "../page-objects/datePickerPage"

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

    it('Test Key Presses', function() {
        homePage.clickKeyPressesTab()

        const keyPressesPage = new KeyPressPage();
        keyPressesPage.typeLetterKey()
        keyPressesPage.typeNumberKey()
        keyPressesPage.typeSpecialKey()
    })

    it('Test Add & Remove Element', function() {
        homePage.clickAddRemoveElementsTab()

        const elementAddRemovePage = new AddRemoveElementsPage();
        elementAddRemovePage.addElements()
        elementAddRemovePage.deleteElement()
        elementAddRemovePage.deleteAllElements()
    })

    it('Test Status Codes', function () {
        homePage.clickStatusCodesTab()

        const statusCodesPage = new StatusCodesPage();
        statusCodesPage.checkStatus200()
        statusCodesPage.checkStatus305()
        statusCodesPage.checkStatus404()
        statusCodesPage.checkStatus500()
    })

    it('Test iFrames', function () {
        homePage.clickIFrameTab()

        const iFrame = new iFramePage();
        iFrame.iFrameButton1Click()
        iFrame.iFrameButton2Click()
    })

    it('Test Date Picker', function() {
        homePage.clickDatePickerTab()

        const datePickerPage = new DatePickerPage();
        datePickerPage.selectValidDate()
        datePickerPage.selectDateTooEarly()
        datePickerPage.selectDateTooLate()
    })
})