var km = prompt('Quanti chilometri verranno percorsi?');
var anni = prompt('Quanti anni ha il passeggero?');

var prezzotratta = km * 0.21;


if (anni < 18){
  document.getElementById('prezzo').innerHTML= prezzotratta - ( prezzotratta * 20/100) + '€';
} else if (anni == 65 || anni > 65){
  document.getElementById('prezzo').innerHTML= prezzotratta - ( prezzotratta * 40/100) + '€';
} else{
  document.getElementById('prezzo').innerHTML= prezzotratta + '€';
}
