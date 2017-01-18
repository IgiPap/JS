function Telefon(marka, model, cena, kolor) {
	this.marka = marka;
	this.model = model;
	this.cena = cena;
	this.kolor = kolor;
}
Telefon.prototype.printInfo = function() {
	console.log("Marka telefonu to " + this.marka + ", model " + this.model + ", kolor to " + this.kolor + ", a cena to " + this.cena + "PLN.");
}

var Siemens = new Telefon("Siemens", "C55", 1500, "biały");
var Ericsson = new Telefon("Ericsson", "T28s", 100, "czarny");
var Bosch = new Telefon("Bosch", "GSM 508", 900, "szary");

Siemens.printInfo();
Ericsson.printInfo();
Bosch.printInfo();