/*
Defaults
Fill in undefined properties in object with the first value present in the
following list of defaults objects.
Example:
const iceCream = {flavor: "chocolate"};
defaults(iceCream, {flavor: "vanilla", sprinkles: "lots"});
=> {flavor: "chocolate", sprinkles: "lots"}
*/

// Your code here!
const defaults = (object, defaults) => {
  for(key in defaults){
    if(defaults.hasOwnProperty(key)){
      if(object[key] === undefined){
        object[key] = defaults[key]
      }
    }
  }
  return object
}

// Check your solution by running these tests: mocha *this_filename*
const assert = require('assert');

describe('Defaults', () => {
  it('can insert a default', () => {
    const list = {a: 1, b: 2, c: 3};
    const result = defaults(list, {d: 4});
    const expected = {a: 1, b: 2, c: 3, d: 4};
    assert.deepEqual(result, expected);
  })

  it('does not touch existing keys', () => {
    const list = {a: 1, b: 2, c: 3};
    const result = defaults(list, {c: 5});
    const expected = {a: 1, b: 2, c: 3};
    assert.deepEqual(result, expected);
  })

  it('only sets defaults for undefined keys', () => {
    let list = {a: null, b: false, c: 3};

    // Leave falsy values alone! Only set defaults for undefined.
    let result = defaults(list, {b: 2});
    let expected = {a: null, b: false, c: 3};
    assert.deepEqual(result, expected);

    list = {a: null, b: undefined, c: 3};

    result = defaults(list, {b: 2});
    expected = {a: null, b: 2, c: 3};
    assert.deepEqual(result, expected);
  })
});


function Person() {
}
Person.prototype.age = 99;


// ********************
var scott = new Person();
scott.name = 'scott';

for (var key in scott) {
  console.log(key)
}

// ^ Oops! We see age from prototype!

// Better:
// for (var key in scott) {
//   if (scott.hasOwnProperty(key)) {
//     console.log(key)
//   }
// }