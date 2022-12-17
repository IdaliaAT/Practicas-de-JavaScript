//  logical operators or || and AND &&

// 1er. condicion: Como hacer varias multiples condiciones satisfactorias en una sola condicion, es decir checar que al mismo tiempo se cumpla las dos condiciones con el && doble amperson.
//Ejemplo al checar que un password tenga 12 caracteres y que tambien incluya el @. Las dos tienen que ser posible.

// 2a. condicion: Utilizando el or || en la condicion que dice Si la longitud del password es mayor o igual a 8 o incluye @, aqui es una u otra. Solo una puede ser posible.  
// Y a la segunda le podemos agregar mas, hacer como dos condiciones dentro de la segunda condicion. Seria si la longitud del password es mayor o igual a 8 caracteres o || si la longitud del password es mayor o igual a 5 y &&.

//Es una combinacion de diferentes condiciones.



const password = 'p@ss';

if (password.length >= 12 && password.includes('@')) {
    console.log('that password is mighty strong');
} else if (password.length >= 8 || password.includes('@') && password.length >= 5) {
    console.log('that password is strong enough!');
} else {
    console.log('password is not strong enough');
}