import { faker } from '@faker-js/faker'

const randomLetter = faker.string.alpha(1).toLowerCase()
const randomNumber = faker.string.numeric(1)

const specialKeys = ['{enter}', '{esc}', '{tab}', '{backspace}', '{del}', '{uparrow}', '{downarrow}', '{leftarrow}', '{rightarrow}']

const KeyNames = (SpKey) => {
    const keyMap = {
        '{enter}': 'ENTER',
        '{esc}': 'ESCAPE',
        '{tab}': 'TAB',
        '{backspace}': 'BACK_SPACE',
        '{del}': 'DELETE',
        '{uparrow}': 'UP',
        '{downarrow}': 'DOWN',
        '{leftarrow}': 'LEFT',
        '{rightarrow}': 'RIGHT',
    }
    return keyMap[SpKey]
}

const randomSpecialKey = () => faker.helpers.arrayElement(specialKeys)

export {randomLetter, randomNumber, KeyNames, randomSpecialKey}