// Array Methods. 

let ninjas = ['shaun', 'ryu', 'chun-li'];

// ninjas[1] = 'ken';    Aqui cambia la posicion 1 del arreglo por ken.
// console.log(ninjas[1]);   Aqui arroja en la consola la posicion 1

// let ages = [20,25,30,35];  
// console.log(ages[2]);    Aqui arroja la edad 2 del arreglo.

// let random = ['shaun', 'crystal', 30, 20];    
// console.log(random);    Aqui arroja todos juntos.

// console.log(ninjas.length);    Aqui da la longitud del arreglo ninjas.

// Array Methods

// let result = ninjas.join(',');     Aqui los junta y separa solamente por una coma o lo que le definas en el parametro o argumento.

// let result = ninjas.indexOf('chun-li');    Aqui te dice cual es la posicion de chun-li en el arreglo, la cual debe ser la 2 porque empieza contando desde 0.

// let result = ninjas.concat(['ken', 'crystal']);  Aqui dice la longitud y concatena o une este nuevo arreglo con el otro, es decir le estamos agregando ken y crystal al ninjas y los pone todos juntos.

// let result = ninjas.push('ken');   Aqui agrega un nuevo valor al  arreglo.   Regresa la nueva longitud del nuevo arreglo. Este metodo es destructivo (no realmente) porque si altera el valor inicial, lo cambia.  

let result = ninjas.pop(); //Este metodo es destructivo porque cambia el valor original del arreglo. Quita el ultimo valor. Quito ken.

console.log(result);