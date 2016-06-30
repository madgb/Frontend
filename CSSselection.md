
#### CSS선택자 정리

선택자 | 예시  | 설명 |
------------ | ------------- | ------------ |
. (class) | .div  | class="div""인 모든 요소를 선택 |
'#' (id) | #main  | id="main"인 요소를 선택 |
*| *| 모든 요소를 선택
e, e | div, p | <div>인 모든 요소와 <p>인 모든 요소 선택
e e | div p | <div> 요소 안의 모든 <p>요소를 선택
e > e | div > p | <div>요소의 자식 <p>요소를 선택
e+e | div+p | <div> 요소 뒤의 <p> 요소를 선택
[attr='vaule]|[type="text"]|type="text"인 요소 선택
  | [type^="text"]|type이 text로 시작하는 요소 선택
  | [type$="text"]|type이 text로 끝나는 요소 선택
  | [type*="text"]|type에 text가 들어가는 요소 선택
  | [type~="text"]|type에 공백으로 text가 들어가는 요소 선택
  :link | a:link | 링크가 걸려있는 상태 
  :visited| a:visited| 방문한 적이 있을 경우 적용
  :hover|a:hover|마우스 커서가 올라가면 적용
  :active|a:active|커서로 누르고 있는 동안 적용
  :focus|a:focus|탭으로 선택된 경우 적용
  :first-letter|p:first-letter|p요소의 첫 번째 문자에 적용
  :first-line|p:first-line|p요소의 첫 번째 줄에 적용
  :first-child|div:first-child|div요소의 자식 중 첫 번째 요소
  :last-child|dic:last-child|dic요소의 자식 중 마지막 요소
  :nth-child(n)|div:nth-child(2n+1)|div요소의 2n+1(1, 3, 5..)요소에 적용
  :nth-of-type(n)|div:nth-of-type(2)|div요소들 중 두 번째에 적용
  :not(선택)|.main:not([type(text)])|main클래스들 중에서 type="text"인 요소를 제외하고 선택

