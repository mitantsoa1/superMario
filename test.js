//SOMME
function somme(a, b) {
    retur(a + b);
}
var res = somme(2, 3);
console.log(res);
//FACTORIEL 

var fact = 1;
var N = document.querySelector('#input').value;
N = Number(N);

function factoriel(N) {
    if (N == 0) {
        return 1;
    }
    return (n * factoriel(n - 1));
}
fact = factoriel(N);
console.log(fact);


//Verifier si B est divisible par 
var etat = false;

function divisible(a, b) {
    var divise = false;
    if (b % a == 0) {
        divise = true;

    } else {
        divise = false;

    }
    if (divise == false)
        console.log("b n'est pas divisible par a");
    console.log("b est divisible par a");
}
// quotient et reste d 'une division de A et B::

function division(a, b) {
    var res = b % a;
    var q = b / a;
    alert(res);
    console.log("le reste est " + res + " et le quotient est " + q);
}
//voyelle
var voyelle = function(lettre) {

    var v = ["a", "e", "i", "o", "u"];

    for (var i in v) {

        if (lettre === i) {
            return true;
        } else {
            return false;
        }
    }

};

voyelle("e");

//permutation
function permut(a, b) {
    var x = a;
    var y = b;
    var temp;

    temp = x;
    x = y;
    y = temp;
}
//valeur absolue

function absolute(a) {
    var abs = a;
    if (abs < 0) {
        abs = abs * -1;
    }
    console.log(abs);
}