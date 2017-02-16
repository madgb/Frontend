var para = document.createElement('p');
var text = document.createTextNode('나는 p이다');

//방법1. 변수 para(요소 p 생성기)에 미리 Textnode를 담아둔다
//그리고 Textnode가 담긴 변수 para를 wrapper에 appendChild로 붙인다
// para.appendChild(text);
// wrapper.appendChild(para);

//방법2. 계층구조대로 순서대로 먹인다
// wrapper.appendChild(para).appendChild(text);

//어떤 것이 더 좋을까?

var children = function(name, clss, clname){
  return wrapper.appendChild(name).setAttribute(clss, clname)
}

children(huge2, class, modal)

//요소 생성기
var para = document.createElement('p');
var huge2 = document.createElement('h2');
var btn = document.createElement('button');
var btn2 = document.createElement('button');
//~text: TextNode 생성기
var h2text = document.createTextNode('나는 h2이다');
var ptext = document.createTextNode('나는 p이다');
var bttext = document.createTextNode('나는 bt이다');
var bttext2 = document.createTextNode('나는 bt2이다');
//선택자 - 쿼리셀렉터 등을 이용해 클래스를 잡거나, 선언한다
var wrapper = document.querySelector('.modal');
var body = document.body;
var scrpt = body.querySelector('script')
var footer = document.querySelector('footer');

wrapper.appendChild(huge2).appendChild(h2text);
wrapper.appendChild(para).appendChild(ptext);
wrapper.appendChild(btn).appendChild(bttext);
wrapper.appendChild(btn2).appendChild(bttext2);

wrapper.appendChild(huge2).setAttribute('class', 'modal-title')
wrapper.appendChild(para).setAttribute('class', 'modal-desc')
wrapper.appendChild(btn).setAttribute('class', 'modal-cta')
wrapper.appendChild(btn2).setAttribute('class', 'modal-close')
wrapper.appendChild(btn2).setAttribute('aria-label', 'close modal window')


// scrpt.parentNode.insertBefore(scrpt, scrpt.fistChild)
// 에서 insertBefore을 이용하여 임의로 prependChild라는 함수를 만들어보자
var prependChild = function(parent, firstchild){
  return parent.parentNode.insertBefore(parent, firstchild)
}

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
    return targetParent.insertBefore(thisNode, brother);
  } 
}

var queryAll = function (select, context) {
	if(typeof select !== 'string'){
		throw new Error('문자 유형을 적어주세요');
	}
	if(!context){context = document;}
	return context.querySelectorAll(select);
}

var query = function(selector, parent){
	return queryAll(selector, parent)[0];
}


ssh donut@211.202.27.210 -p 22


