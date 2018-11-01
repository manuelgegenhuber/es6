// easily extract array elements OR object properties
// and stores them in variables

const numbers = [1, 2, 3, 4, 5];

//destructing (left side is not an array)
//order is relevant
let [num1, , num2, ...rest] = numbers;
console.log('Destructuring:', num1, num2, rest);