// Type Conversion

let score = '100'; // Aqui era string
//console.log(score + 1);  // Resulta 1001

score = Number(score); // Esto type conversion
console.log(score + 1); // Resulta 101
console.log(typeof score); // aparece number.

// let result = Number('hello'); // NaN
// let result = String(50); // 50 string.
// let result = Boolean(0);  //False 'boolean' el cero es false.

let result = Boolean('0'); // true 'boolean'

console.log(result, typeof result);