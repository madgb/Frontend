// 임의의 함수 prependChild: 원하는 장소의 parent요소에 firstchild를 생성해준다
// scrpt.parentNode.insertBefore(scrpt, scrpt.fistChild)
// 에서 insertBefore을 이용하여 임의로 prependChild라는 함수를 만들어보자
var prependChild = function(parent, firstchild){
  return parent.parentNode.insertBefore(parent, firstchild)
}

// 임의의 함수 insertAfter: 임의의 노드 thisNode를 AfterHere라는 노드 뒤에 위치시키도록 한다
//appendChild와 insertBefore을 사용하여
//에서 insertAfter라는 임의의 함수를 만들어보자
//nextSibling이 있으면 거기에 insertBefore을 하고
//없으면 맨 뒤에 넣으면 되니까 appendChild를 이용하는 조건문을 만든다

var insertAfter = function(thisNode, AfterHere){
  var brother = AfterHere.nextSibling;
  var targetParent = AfterHere.parentNode;
  if(brother === null){
    return targetParent.appendChild(thisNode);
  } else {
    return targetParent.insertBefore(thisNode, brother);} 
}