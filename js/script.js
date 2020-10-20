var tratta = parseInt(prompt('Quanti chilometri verranno percorsi?'));
var anni = parseInt(prompt('Quanti anni ha il passeggero?'));

var prezzo = tratta * 0.21;
var prezzoMinorenni = prezzo * 20/100;
var prezzoSenior = prezzo * 40/100;

if (anni < 18){
  document.getElementById('prezzo').innerHTML= prezzoMinorenni.toFixed(2) + '€' ;
} else if (anni >= 65){
  document.getElementById('prezzo').innerHTML= prezzoSenior.toFixed(2) + '€' ;
} else{
  document.getElementById('prezzo').innerHTML= prezzo.toFixed(2) + '€' ;
}
