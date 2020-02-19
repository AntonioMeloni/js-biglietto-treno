var km = prompt('Quanti chilometri vuoi percorrere?');

var anni = prompt('Quanti anni hai?');


var costoBiglietto;

if (anni < 18) {
    costoBiglietto = (km * 0.21) - (((km * 0.21) * 20)/100);
}else if (anni > 65) {
    costoBiglietto = (km * 0.21) - (((km * 0.21) * 40)/100);
}else {
    costoBiglietto= km * 0.21;
}
console.log(costoBiglietto);

document.getElementById('costo-biglietto').innerHTML = costoBiglietto;

document.getElementById('container').setAttribute('class','visible');
