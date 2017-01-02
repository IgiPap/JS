
var womensNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var mensNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

var allNames = womensNames.concat(mensNames);
console.log(allNames);

var newName ='Marian';

allNames.indexOf(newName) == -1 ? allNames.push(newName) : 'Unable to add new name.';