// ******
// Part 1 - Functions & Arguments
// ******

// a) Create a function called `greet`, it should return 'hello!'

// b) Inside a console.log, call your new function

// c) Update your function to take one argument: firstName. It should return 'hello <firstName>'

// d) Create a new function called `runMe`, it should console.log `I'm running!`

// e) Common interview question: What is an IIFE (pronounced "iffy")? Turn runMe into an IIFE.

helloFunction = (firstName) => {
    return `Hello, ${firstName}!`
}

(runMe = (i) => {
    console.log("I'm running!", i)
})('Hello')

console.log(helloFunction('Ben'))
// ******
// Part 2 - Callbacks
// ******

// a) Create a function called `finished`, it should console.log `all done`.

finished = () => {
    console.log('all done')
}
// b) Use setTimeout to call your `finished` method after 2.5 seconds.
setTimeout(() => {
finished()
}, 2500)
// c) Fix the following code. End result: you should see two logs.

function callMeBackBro (cb) {
  console.log('Call me back is running :)')
  cb()
}

callMeBackBro(function () {
  console.log('This line should also run!')
})

