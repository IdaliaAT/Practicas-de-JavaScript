// Variables & Block Scope

// Code blocks son pequeñas secciones de código que se corren cuando una condicion es verdadera o cuando una condicion se cumple.

// Cuando pongo una variable al inicio, fuera de un code block es una variable global que puedo usar dentro o fuera de bloques de codigo tiene global scope. 

// Pero si reasignamos la variable dentro del code block altera el valor solo dentro del bloque.

// Tambien existen los bloques de codigo anidados.


let age = 30;

if (true) {
    let age = 40;
    let name = 'Shaun'
    console.log('dentro del 1er. code block: ', age, name);
}

console.log('fuera del code block: ', age, name);