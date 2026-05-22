import {randomLetter, randomNumber, randomSpecialKey, KeyNames} from './keyMap'

const keyPress = '#target'
const keyPressResult ='#keyPressResult'
const SpKey = randomSpecialKey()

class KeyPressPage{
    typeLetterKey() {
        cy.get(keyPress).type(randomLetter)
        cy.get(keyPressResult).should('contain.text', `You entered: ${randomLetter.toUpperCase()}`)
    }
    typeNumberKey() {
        cy.get(keyPress).type(randomNumber)
        cy.get(keyPressResult).should('contain.text', `You entered: ${randomNumber}`)
    }
    typeSpecialKey(){
        cy.get(keyPress).type(SpKey)
        cy.get(keyPressResult).should('contain.text', `You entered: ${KeyNames(SpKey)}`)
    }
}

export default KeyPressPage