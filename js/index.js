// use this to copy code snippets or use your browser's console

function greet(customerOne, customerTwo) {
    console.log(`Hi ${customerOne} and ${customerTwo}, my name is ${this.name}`);
}
 
let sally = { name: 'Sally' };

greet.call( sally, 'Terry', 'George');
 
greet.apply(sally, ['Terry', 'George']);
// Hi Terry and George, my name is Sally!
// apply takes the first argument and the second is an array of arguments to be passed in the function