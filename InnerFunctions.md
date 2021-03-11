# 내장 함수 (Inner Functions)

## window 객체
### var를 이용해서 변수 선언
```js
var v1 = 'a';
v2 = 'b';
const condition1 = v1 === window.v1;
const condition2 = v2 === window.v2;
```
* IE11 이후 부터 var는 사용하지 않는다.
* 여러 파일에서 동시에 사용 해야할 경우 `window.변수명` 이렇게 명시화 해서 사용한다.
```js
window.v3 = 'c';
```

### window 객체 안으로 function 만들기
```js
function f1() {}
const condition3 = f1 === window.f1;
```

### console.log, alert, confirm
```js
window.console.log('콘솔 로그');
window.alert('경고');
if (window.confirm('진행 하시겠습니까?')) {
  console.log('진행');
} else {
  alert('멈춤');
}
```
* `window` 안에 있는 메소드는 `window.` 생략 가능




<!-- * `defer` 설명, `쓰레드` 개념 설명
* ❔ 서로 다른 파일에서 1번씩 사용한다면
Document.written ← 줄바꿈
로컬 저장소를 바탕으로 CRUD 만들기 -->


## class 추가 삭제
```html
<!-- 추가 -->
document.getElementById('').classList.add('');
<!-- 삭제 -->
document.getElementById('').classList.remove('');
<!-- 첫번째 클래스명 -->
document.getElementById('').classList[0];
<!-- 클래스 개수 -->
document.getElementById('').classList.length;
<!-- 토글 클래스 -->
document.getElementById('').classList.toggle('active');
```

## form 태그
* Ajax 이전에 데이터를 서버에 전송하는 방식(get, post 메소드만 사용가능)

formA.html
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>From A</title>
  </head>
  <body>
    <h1>From A</h1>
    <form method="get" action="./formB.html">
      <input type="text" name="name" placeholder="이름" />
      <input type="submit" value="전송" />
    </form>
  </body>
</html>
```

formB.html
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>From B</title>
    <script>console.log(window.location);</script>
  </head>
  <body>
    <h1>From B</h1>
  </body>
</html>
```
* Frontend와 Backend의 차이점은?

## window.location
```js
console.log(window.location);
window.location.href = './list.html';
```

## window.history.back
```js
window.history.back();
```

## Event
### onkeypress
```html
<input type="text" onkeyup="console.log(event)" />
```

### onchange
```html
<input type="date" onchange="console.log(event)" />
```

## QueryString
```js
const url = new URL(window.location.href);
const queryString = url.searchParams;

console.log(queryString.get('a'));
console.log(queryString.getAll('a'));
```

## Orderby Icon
```html
<a href="?orderByName=name&orderByType=asc"><i class="bi bi-caret-up" id="i-name-asc"></i></a>
<a href="?orderByName=name&orderByType=desc"><i class="bi bi-caret-down" id="i-name-desc"></i></a>
```
```js
const orderByName = queryString.get('orderByName') || 'name';
const orderByType = queryString.get('orderByType') || 'desc';
const classList = document.getElementById('i-' + orderByName + '-' + orderByType).classList;
const className = classList[1];
classList.remove(className);
classList.add(className + '-fill');
```