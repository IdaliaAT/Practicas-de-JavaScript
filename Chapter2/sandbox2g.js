let age = 25

// Loose comparison (different types can still be equal)

console.log(age == 25); // true
console.log(age == '25'); //true
console.log(age != 25); //false
console.log(age != '25'); //false

// Strict Comparison (differente types cannot be equal).

console.log(age === 25); //true
console.log(age === '25'); //false
console.log(age !== 25); //false
console.log(age !== '25'); //true