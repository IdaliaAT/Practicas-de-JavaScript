//  Else If statements

// Si la condicion no es verdadera entonces ejecutara "si no" else if o else.  Se tienen diferentes opciones, si no es la primera, va a checar la segunda y si no es, checa la tercera. O es una o es otra dependiendo de lo que se indique en el codigo. 

const password = 'p@ssword12';

if (password.length >= 12) {
    console.log('that password is might strong');
} else if (password.length >= 8) {
    console.log('that password is long enough!');
} else {
    console.log('password is not long enough');
}