/*
Find Last Index
Like _.findIndex but iterates the array in reverse, returning the index closest
to the end where the predicate truth test passes.
Example:
const users = [{'id': 1, 'name': 'Bob', 'last': 'Brown'},
             {'id': 2, 'name': 'Ted', 'last': 'White'},
             {'id': 3, 'name': 'Frank', 'last': 'James'},
             {'id': 4, 'name': 'Ted', 'last': 'Jones'}];
_.findLastIndex(users, {
  name: 'Ted'
});
=> 3
*/

// Your code here!
const findLastIndex = (arr, toFind) => {


    for (let i = arr.length - 1; i >= 0; i--){
        if (arr[i] === toFind){
            return i
        } else if (arr[i] !== toFind) {
            for (el in toFind) {
                if (arr[i][el].length === toFind[el].length){
                    if (arr[i][el] === toFind[el]) {
                        return i
                    }
                } 
            }
        }
    }    
}

// Check your solution by running these tests: mocha *this_filename*
const assert = require('assert');

describe('Find Last Index', () => {
    it('finds the last index', () => {
        const objects = [
            { a: 0, b: 0 },
            { a: 1, b: 1 },
            { a: 2, b: 2 },
            { a: 0, b: 0 }
        ];
        const result = findLastIndex(objects, { a: 0 });
        assert.equal(result, 3);
    })


    it('finds the last index with multiple properties', () => {
        const objects = [
            { a: 0, b: 0 },
            { a: 1, b: 1 },
            { a: 2, b: 2 },
            { a: 0, b: 0 }
        ];
        const result = findLastIndex(objects, { a: 2, b: 2 });
        assert.equal(result, 2);
    })

    it('finds the last index with multiple properties', () => {
        const objects = [
            { a: 0, b: 0 },
            { a: 1, b: 1 },
            { a: 2, b: 2 },
            { a: 0, b: 0 }
        ];
        const result = findLastIndex(objects, { b: 2, a: 2, });
        assert.equal(result, 2);
    })
});