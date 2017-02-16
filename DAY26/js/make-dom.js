var maked_division = document.createElement('div');
var maked_division_text = document.createTextNode('this is division')
var maked_unordered_list = document.createElement('ul')
var maked_unordered_list_item = document.createElement('li')
var maked_unordered_list_item_text = document.createTextNode('list item')

maked_division.appendChild(maked_division_text);
console.log(maked_division);

var target_place = document.querySelector('#parent > .child:last-child');

target_place.appendChild(maked_division);

var target_container = document.createElement('div');

target_container.setAttribute('id', 'target_container');
target_container.appendChild(maked_unordered_list);
document.body.appendChild(target_container);

var body = document.body;
var target = body.firstChild;

body.insertBefore(target_container, target);