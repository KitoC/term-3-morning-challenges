// ******
// Part 3 - Context
// ******
// 
// Start with the following code:
const whatsThisThen = function (someParam) {
    console.log(this.name, someParam)
};

const ye = { name: 'Kanye' };

// a) Research: call, apply and bind. Guess the output of each before running:

// b) 
// whatsThisThen();
// My expectation: undefined 
// Actual output: undefined

// c)
// whatsThisThen('hello!');
// My expectation: undefined, 'hello!'
// Actual output: undefined, 'hello!'

// d)
// whatsThisThen.call(ye);
// My expectation: 'Kanye', { name: 'kanye' }
// Actual output: 'Kanye', undefined

// e)
// whatsThisThen.call(ye, 'hello!')
// My expectation: undefined, 'Kanye', 'hello!'
// Actual output: 'Kanye', 'hello!'

// f)
// whatsThisThen.apply(ye, 'hello')
// My expectation: 'Kanye', undefined
// Actual output: ​​CreateListFromArrayLike called on non-object

// g)
// whatsThisThen.apply(ye, ['hello'])
// My expectation: 'kanye', 'hello'
// Actual output:'kanye', 'hello'

// h) What does `call` do?

// i) What's the difference between `call` and `apply`?

// j) When would you use bind?