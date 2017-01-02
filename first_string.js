
var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';
var animal = 'Zielone słonie';

var animalUpperCased = animal.toUpperCase();
//console.log(animalUpperCased);

var textCharsAfter = text.replace('Papugi', animalUpperCased);
//console.log(textCharsAfter);

var textAfterSplit = textCharsAfter.length/2;
//console.log(textAfterSplit);

var dividedCharsAfter = textCharsAfter.substr(0, 45);

console.log(dividedCharsAfter);