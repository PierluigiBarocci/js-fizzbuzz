// Stampare tutti i numeri da 1 a 100 con le seguenti regole:
// al posto dei multipli di 3 stampare "Fizz"
// al posto dei multipli di 5 stampare "Buzz"
// al posto dei multipli di 3 e 5 stampare "FizzBuzz"
// nome repo: js-fizzbuzz

// creazione array d'appoggio
var list = ''
// ciclo per creare numeri da 1 a 100
for (var i = 1; i < 101; i++) {
    var num = i;
    if (num % 3 == 0 && num % 5 == 0) {
        list = list + '<li>' + 'FizzBuzz' + '</li>';
    } else if (num % 3 == 0) {
        list = list + '<li>' + 'Fizz' + '</li>';
    } else if (num % 5 == 0) {
        list = list + '<li>' + 'Buzz' + '</li>';
    } else {
        list = list + '<li>' + num + '</li>';
    }
};
list_unordered = '<ul>' + list + '</ul>';
console.log(list_unordered);
document.getElementById('fizzbuzztest').innerHTML = list_unordered;
