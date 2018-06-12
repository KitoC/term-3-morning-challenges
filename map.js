/*
Map
Produces a new array of values by mapping each value in list through a
transformation function (iteratee). The iteratee is passed three arguments:
the value, then the index (or key) of the iteration, and finally a reference
to the entire list.
Hint: You're pretty much building JS's .map helper. Except your version will
work with arrays AND objects. A good first step would be checking if the first
argument is an object or an array.
Example:
map([1, 2, 3], (num) => { return num * 3; });
=> [3, 6, 9]
map({one: 1, two: 2, three: 3}, (num) => { return num * 3; });
=> [3, 6, 9]
*/

// Your code here!
const map = (objectArr, operation) => {
    let arr = []



    // First attempt

    // if (Array.isArray(objectArr)) {
    //     for (let item of objectArr) {
    //         arr.push(operation(item))
    //     }
    // } else {
    //     for (let key in objectArr) {
    //         if(objectArr){
    //             arr.push(operation(objectArr[key]))
    //         }
    //     }
    // }

    // short version
    
     for (let key in objectArr) {
         if (objectArr) {
             arr.push(operation(objectArr[key]))
         }
     }
    return arr
}

// Check your solution by running these tests: mocha *this_filename*
const assert = require('assert');

describe('Map', () => {
    it('can map arrays', () => {
        const result = map([1, 2, 3], (num) => {
            return num * 3;
        });
        assert.deepEqual(result, [3, 6, 9]);
    })
    it('can map objects', () => {
        const result = map({
            one: 1,
            two: 2,
            three: 3
        }, (num) => {
            return num * 3;
        });
        assert.deepEqual(result, [3, 6, 9]);
    })
});