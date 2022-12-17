//  Loops

/* While Loop

Es parecido al For, hacen lo mismo pero la diferencia es la sintaxis.
Tiene igual la inicializacion.
Tiene tambien la condicion.
Y tiene la expresion final del incremento o acumulador.
*/

const names = ['Shaun', 'Mario', 'Luigi'];

//let i = 0;

//while (i < 5) {
//    console.log('in loop: ', i);
//    i++;
//}


let i = 0;
while (i < names.length) {
    console.log(names[i]);
    i++;
}