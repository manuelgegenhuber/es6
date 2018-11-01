// spread -> Used to split up array elements OR object properties.
// rest -> Used to merge a listof function arguments into an array.


// spread
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const newNumbers = [...numbers, 9, 10];
console.log(newNumbers);

const person = {
    name: 'Susi'
};
const newPerson = {
    ...person,
    age: 99
};
console.log(newPerson);

// rest
const filter = (...args) => {
    return args.filter(element => element > 1);
};
console.log(filter(1, 2, 3, 4, 5, 6));
console.log(filter(...numbers));