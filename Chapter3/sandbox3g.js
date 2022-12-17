//  Break and Continue 

// Ejemplo en un juego.  
// Tenemos un arreglo de marcadores y va a hacer una iteracion de acuerdo a la longitud o cantidad total de marcadores o scores y que vaya sumando uno cada vez hasta alcanzar la cantidad total o sea el length (longitud).

// Que es Break?

// Imaginemos que tenemos los scores pero cuando llegue a el marcador sea 100 que es la cantidad maxima que se puede alcanzar en el juego, queremos que se detenga "Break" ya no mas iteraciones, porque ya alcanzamos el numero mas alto, aun y cuando todavia en el length hay mas scores, y va a ignorar los que faltan.

// Que es Continue?

// Imaginemos que ahora en lugar de querer resaltar el 100 queremos hacer algo con el cero, porque es un marcador vergonzoso, aqui utilizamos el Continue, y lo que hace es como no imprimirlo y se salta al siguiente marcador.  Y aparece 50, 25, 30, 100   No registra el 0 entre el 25 y el 30.


const scores = [50, 25, 0, 30, 100, 20, 10];

for (let i = 0; i < scores.length; i++) {
    if (scores[i] === 0) {
        continue;
    }

    console.log('your score: ', scores[i]);

    if (scores[i] === 100) {
        console.log('congrats, you got the top score!');
        break;
    }
}