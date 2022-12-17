//  Loops

/* For Loop

La intencion de un loop es hacer una operacion (pushing a code) una y otra y otra vez dependiendo de cierta cantidad de veces.
En esta primera seccion del loop empezamos con 3 cosas diferentes:
for    //palabra clave
(let i = 0   //Contador, inicializamos i con 0//
i < 5        //Condicion, evalua true (ejecuta el codigo) o false (ya no). Y deja de ejecutar el codigo cuando exceda el numero.
i++     // Suma, agrega uno a la vez. */

/*
for (let i = 0; i < 5; i++) {
    console.log('in loop:', i);
}
*/
//console.log('loop finished');

const names = ['Shaun', 'Mario', 'Luigi'];

for (let i = 0; i < names.length; i++) {
    //console.log(names[i]);
    let html = `${names[i]}`;
    console.log(html)
}