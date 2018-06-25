/*
Once
Creates a version of the function that can only be called one time.
Repeated calls to the modified function will have no effect, returning the value
from the original call. Useful for initialization functions, instead of having
to set a boolean flag and then check it later.
Example:
let total = 0
const count = () => ++total;
let countOnce = once(count);
countOnce()
=> 1
countOnce()
=> 1
*/

// Your code here!
const once = (func) => {
    let result;
    return function () {
        if (func) {
            result = func();           
            func = null;
        }

        return result
    }
}


// Check your solution by running these tests: mocha *this_filename*
const assert = require('assert');

describe('Once', () => {
    it('returns a function', () => {
        const exampleOnce = once(() => {})
        assert.equal(typeof exampleOnce, 'function');
    });
    it('only runs once', () => {
        let total = 0;
        const count = () => {
            return ++total;
        }

        const countOnce = once(count);
        const countOnce = once(count);
        assert.equal(countOnce(), 1);
        assert.equal(countOnce(), 1);
    });
});