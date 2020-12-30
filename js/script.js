var COSTO_UNITARIO_KM = 0.21;
var SCONTO_MINORENNI = 0.2;
var SCONTO_SENIOR = 0.4;

//cerco e salvo in una variabile i due bottoni nel DOM
var buttonGenerateEl = document.getElementById('Generate');
var buttonResetEl = document.getElementById('Reset');


buttonGenerateEl.addEventListener('click', function(){

  //assegno nome al biglietto

  var name = document.getElementById('name').value;

  document.getElementById('nameSurname').innerHTML = name

  //assegno numero carrozza random

  var carriage = Math.floor(Math.random() * 10) + 1;

  document.getElementById('carriage').innerHTML = carriage;

  //assegno numero CP random tra 90.000 e 100.000 (escluso)

  var trainNumber = Math.floor(Math.random() * 10000) + 90000;

  document.getElementById('train').innerHTML = trainNumber;

  // assegno Offerta e calcolo prezzo

  var isChild = document.getElementById('child').selected;
  var isAdult = document.getElementById('adult').selected;
  var isSenior = document.getElementById('senior').selected;
  var km = parseInt(document.getElementById('km').value);

  var prezzo = km * COSTO_UNITARIO_KM;
  var offer;

  if( km == '' || name == '' || (isNaN(km)) ){
    alert('Inserisci i dati correttamente e riprova');
  } else if (isChild) {
    var offer = 'Sconto Minorenni';
    var prezzo = (prezzo -= prezzo * SCONTO_MINORENNI).toFixed(2);
    document.getElementById('ticket').style.visibility = 'visible';
  } else if (isSenior) {
    var offer = 'Sconto Senior';
    var prezzo = (prezzo -= prezzo * SCONTO_SENIOR).toFixed(2);
    document.getElementById('ticket').style.visibility = 'visible';
  } else {
    var offer = 'Nessuna offerta'
    var prezzo = prezzo.toFixed(2);
    document.getElementById('ticket').style.visibility = 'visible';
  }


  document.getElementById('offerActive').innerHTML = offer;
  document.getElementById('price').innerHTML = prezzo +'€';

});

buttonResetEl.addEventListener('click', function(){
  document.getElementById('ticket').style.visibility = 'hidden';
  document.getElementById('name').value = '';
  document.getElementById('km').value = '';
});
