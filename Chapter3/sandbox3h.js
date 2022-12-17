// Switch statements   o Condiciones Switch.
// Supongamos que tengamos un valor o una calificacion, en este caso vamos a usar la D, pero puede ser cualquiera A, B, C, etc. Y vamos a poner mensajes diferentes a cada una.
// Cuando tenemos multiples opciones individuales o valores es cuando utilizamos el condiciones de switch.

const grade = 'D';

switch (grade) {
    case 'A':
        console.log('Tu obtuviste una A!');
        break;
    case 'B':
        console.log('Tu obtuviste una B!');
        break;
    case 'C':
        console.log('Tu obtuviste una C!');
        break;
    case 'D':
        console.log('Tu obtuviste una D!');
        break;
    case 'E':
        console.log('Tu obtuviste una E!');
        break;
    default:
        console.log('No tienes una calificacion valida');
}

// Nota: el Switch utiliza igualdad estricta ===. Ejemplo si la const grade fuera '50' y en un case 50, marcaria que el default, porque utiliza el '50' es un string y el 50 es un numero.