// Stampare tutti i numeri da 1 a 100 con le seguenti regole:
// al posto dei multipli di 3 stampare "Fizz"
// al posto dei multipli di 5 stampare "Buzz"
// al posto dei multipli di 3 e 5 stampare "FizzBuzz"
// nome repo: js-fizzbuzz

// creazione var d'appoggio
var list = ''
// ciclo per creare numeri da 1 a 100
for (var i = 1; i < 101; i++) {
    var num = i;
    // il principio è quello di creare una stringa che contenga già al suo interno dei tag <li> per html
    // il tutto a braccetto con Bootstrap4 è una bomba a orologeria ==> SPETTACOLO PURO!!!
    if (num % 3 == 0 && num % 5 == 0) {
        list = list + '<li class = "list-inline-item mx-3 mb-3 text-warning bg-primary rounded">' + 'FizzBuzz' + '</li>';
    } else if (num % 3 == 0) {
        list = list + '<li class = "list-inline-item mx-3 mb-3 text-primary">' + 'Fizz' + '</li>';
    } else if (num % 5 == 0) {
        list = list + '<li class = "list-inline-item mx-3 mb-3 text-warning">' + 'Buzz' + '</li>';
    } else {
        list = list + '<li class = "list-inline-item mx-3 mb-3">' + num + '</li>';
    }
};
// qui si inserisce un tag padre <ul>
var list_unordered = '<ul class = "list-unstyled text-left">' + list + '</ul>';
console.log(list_unordered);
// inviamo tutto il pacchetto lista all'Html
document.getElementById('fizzbuzztest').innerHTML = list_unordered;
