var parent_el = document.getElementById('parent');
var parent_el_child_nodes = parent_el.childNodes;

console.log(parent_el_child_nodes);
console.log('수집된 parent_el의 자식 노드의 개수:', parent_el_child_nodes.length);

for (var i=0; i<9; i=i+1){
	if ( parent_el_child_nodes[i].nodeType === 1){
		console.log( '%c current node is ELEMENT_NODE', 'background: #E0E0E0; color: #E00C08;')
	}else {
		console.log('current node is TEXT_NODE')
	}
}

var target = parent_el_child_nodes[1].childNodes;

for (var i=0; i<7; i=i+1){
	if (target[i] === 1){
		console.log('%c current node is ELEMENT_NODE', 'background: #E0E0E0; color: #E00C08;')
	}else {
		console.log('current node is TEXT_NODE')
	}
}
