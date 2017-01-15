/*var currentItem = document.getElementsByTagName('li');
console.log(currentItem);

var list = document.getElementById('Lista');
var button = document.getElementById('add');

add.addEventListener('click', function() {
	var li = document.createElement('li');
  	list.appendChild(li);
  	list.innerHTML += '<li>item</li>';
  	ul.appendChild(li);
})*/
var addAnother = function() {
    var ul = document.getElementById("Lista");
    var li = document.createElement("li");
    var nextLiNumber = document.getElementsByTagName('li').length;
    var textNode = document.createTextNode("item " + nextLiNumber);

    li.appendChild(textNode);
    ul.appendChild(li)
}

var addButton = document.getElementById('addElem');

addButton.addEventListener('click', addAnother)