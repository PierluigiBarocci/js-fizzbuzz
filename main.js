// Stampare tutti i numeri da 1 a 100 con le seguenti regole:
// al posto dei multipli di 3 stampare "Fizz"
// al posto dei multipli di 5 stampare "Buzz"
// al posto dei multipli di 3 e 5 stampare "FizzBuzz"
// nome repo: js-fizzbuzz

// creazione array d'appoggio
var list = []
// ciclo per creare numeri da 1 a 100
for (var i = 1; i < 101; i++) {
    var num = i;
    list.push(num);
    if (num % 3 == 0 && num % 5 == 0) {
        console.log('FizzBuzz');
    } else if (num % 3 == 0) {
        console.log('Fizz');
    } else if (num % 5 == 0) {
        console.log('Buzz');
    } else {
        console.log(num);
    }
}
