let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child')
console.log(list);console.log(listItem);

val = list.childNodes; // includes text node>> <.br> // line breaks create text nodes


val = list.childNodes;//  returns only element, htmlcollection .nodeName .
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;

/*
 nodeType3
1 - Element
2 - Attribute (depreceated)
3 - Text Node
8 - Comment
9 - Document itself
10 - Doctype
*/

val = list.children;

// firstchild isb a node
// firstElementChild 

listItem.nextSibling;
listItem.parentNode;


console.log(val);