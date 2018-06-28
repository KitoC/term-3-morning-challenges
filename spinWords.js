/*
Spin words (From CodeWars)
🤙 Write the tests first and then make your tests pass 🤙
Write a function that takes in a string of one or more words,
and returns the same string, but with all five or more letter
words reversed. Strings passed in will consist of only letters
and spaces. Spaces will be included only when more than one
word is present.
Examples:
spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
spinWords( "This is a test") => returns "This is a test"
spinWords( "This is another test" )=> returns "This is rehtona test"
*/

spinWords = (string) => {

    // let arr = string.split(' ')
    
    // for (let i = 0; i < arr.length; i ++){

    //     if (arr[i].length >= 5) {
    //         arr[i] = arr[i].split('').reverse().join('')
    //     }
    // }

    // return arr.join(' ')

    return string.split(' ').map((word) => {
        if (word.length >= 5) {
            return word.split('').reverse().join('')
        }
        return word
    }).join(' ')
}


const assert = require('assert')

describe('Word spinner', () => {

    it('Reverses one word (if over 5 letters)', () => {
        let string = 'people'
        assert.equal(spinWords(string), 'elpoep')
    })

    it('Returns string the same if no words with letters > 5', () => {
        let string = 'And then he said'
        assert.equal(spinWords(string), 'And then he said')
    })

    it('Takes a string sentence and reverses any word in that string that has 5 or more letters', () => {
        let string = 'This sentence has a range of words'
        assert.equal(spinWords(string), 'This ecnetnes has a egnar of sdrow')
    })

})