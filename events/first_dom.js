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
addAnother = function() {
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    var children = ul.children.length + 1
    li.setAttribute("id", "element"+children)
    li.appendChild(document.createTextNode("Element "+children));
    ul.appendChild(li)
}