//  Logical Not (!)

// Cuando ponemos este simbolo antes de un signo significa No es, puede ser enfrente de un booleano !false y lo revierte, lo hace true. Lo cambia.

//

let user = false;

if (!user) {
    console.log('you must be logged in to continue');
}

console.log(!true);
console.log(!false);