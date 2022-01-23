//form과 ul을 html에서 js로 가져가는 방법 
const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = document.querySelector("#todo-form input"); //이미 toDoForm을 찾아놨기 때문에 그 안에서 input을 찾을 수 있다. 
// 원래는 querySoloctor("input")> 이렇게 입력하니까 콘솔로그하면 출력 안됨 

//함수를 만들고 그 이벤트의 기본 동작을 막음> greeting과 같은 역할 
//왜냐하면 submit의 기본 동작은 새로고침을 하는 것이고 이건 의도적인게 아님 

const TODOS_KEY = "todos"; //11-2 

let toDos = []; // 9

function saveToDos(){  // toDos array의 내용을 localStorage에 넣는 것. 
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // 10-1 
}


function deleteToDo(event){  // 8-4
 const li= event.target.parentElement; // 삭제하고 싶은 li 
 li.remove(); 
 toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));  //클릭했던 li의 id를 갖고 있는 toDo를 지움 
 // toDo의 id가 li의 id와 다른걸 남김. 
 // 이 toDo는 toDos DB에 있는 요소 중 하나다. > 그래서 위 함수는 DB에 있는 모든 것과 함께 실행됨. 
 // 이 문장의 의미는 우리가 클릭한 li.id와 다른 toDo는 남겨두고 싶어. 
 saveToDos();
}
/* 이모지버튼을 누르면 event를 얻고 event는 target을 줌 
   >target은 button이고 button은 부모를 가지고 있음 >li
   parseInt> 문자열을 숫자로 바꿔줌  
*/


function paintToDo(newTodo){ // toDo의 세부사항 , 함수를 그리는 것
    const li = document.createElement("li");
    li.id = newTodo.id; 
    const span = document.createElement("span"); 
    span.innerText = newTodo.text; //handleToDoSubmit에서 온 nowTodo 텍스트를 span의 텍스트로 만들어줌
    const button = document.createElement("button"); // 8-1 
    button.innerText = "❤"; // 버튼에 들어가는 이모지 > 윈도우키 +. 
    button.addEventListener("click",deleteToDo ); // 8-3
    li.appendChild(span); // span을 li안에 삽입 
    li.appendChild(button); //8-2
    toDoList.appendChild(li);//새로운 li를 toDoList에 추가


}// span에 input으로 받은값이 들어감 

function handleToDoSubmit(event){
    event.preventDefault();  //새로고침이 일어나지 않음 
    const newTodo = toDoInput.value; // 텍스트 사라지기 전에 입력한 값 저장 , input에서 value를 얻음
    toDoInput.value = ""; // 엔터 누르면 입력했던 텍스트가 사라진다. 인풋 벨류 사라짐. 단 newTodo의 내용이 지워지는 것이 아니다.
    const newTodoObj = { //12-4 push할 obj생성 
        text: newTodo, 
        id: Date.now(),
    }
    toDos.push(newTodoObj);//9-1, 12-3 ,12-4 obj 생성 후 newTodo 대신 입력 
    paintToDo(newTodoObj); // input에서 받은 값을 여기로 보냄 
    saveToDos(); // 
}
toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item){  //js는 지금 처리되고 있는 item 또한 그냥 제공해준다. 
 console.log("this is the turn of", item); // 문장+ 입력 값이 콘솔창에 출력된다. 
}
const savedToDos = localStorage.getItem(TODOS_KEY); //11-1 

if (savedToDos !== null){ // l.s에 savedToDos가 존재 한다면 
    const parsedToDos = JSON.parse(savedToDos);  //로컬스토리지에서 온 문자열을 jsobject로 변하게 함 
    toDos = parsedToDos;// 11-4 
    parsedToDos.forEach(paintToDo);          //11-3 forEach는 배열의 각 아이템에 대해 함수를 실행하게 해준다.
    // 위와 같다.(화살표 함수) parsedToDos.array.forEach((item) => console.log("this is the turn of", item));
}

//function sexyFilter(){ }  //14  이 함수는 반드시 true를 리턴해야한다. 새 array에서 이obj를 유지하려면.



/* todo-list 생성 
1.form과 input을 나타내는 변수 생성
2.submit 사용시 새로고침 안되는 함수 생성
3.toDo를 그리는 함수 생성> li(list item)을 만들어서 그 li를 ul(list)에 추가.
4.  <li>
     <span></span>
    </li>
   > 이런 형태가 되어야한다. 나중에 toDo를 삭제하는 button을 만들 것이기 때문에 
5. 새로운 li를 toDoList에 추가
    > 인풋 입력창 아래에 value들이 생성된다.(. value) 이런 형태로. 
    > 입력하면 항목이 추가되는게 todo list 
6. 아무것도 입력하지 않으면 추가되지 않음> html에서 field를 보호하고 있기 때문에.
   (input에 required를 넣었기 때문)
7. 하지만 여기까지만 진행하면 toDo를 지울 수 없다. 
   그리고 새로고침 시 toDo들이 사라지는 문제가 있다. 
8. toDo 삭제하는 코드 생성 
    -1. <li> 내부에 event를 수신하는 button 생성 
    -2. button을 li에 추가 
    주의: append는 마지막에 놓여져야한다. 마지막으로 li를 toDoList에 추가 
    -3. button에 이벤트리스너 추가 
    > button이 같은 event를 기다리고 있고, 모두 같은 function을 실행하고 있음
    > 버튼이 구별되지않는 문제 발생, 어떤 버튼을 눌렀는지 모름  
    :: 클릭 이벤트에 대한 정보가 있음 
    -4 deleteToDo함수에 event 인자 추가 
    > 콘솔로그로 보면 path , target항목이 있다. > event가 click 된 위치를 알려준다. 
     event는 property를 가지는데 어떤 button이 클릭되었는지를 알려줌 
     console.dir(event.target)로 확인 
     > 결론적으로 찾아야할 것은 parentNode or parentElement다. 
     console.dir(event.target.parentElement.innerText)> 뭘 클릭했는지 알 수 있다. 
     console.dir(event.target.parentElement)>얘는 li가 나옴 
     target은 클릭된 html element다. 

9. 실제로 toDo 들을 저장하는 방법 
> localStorage에 저장 
> save toDo, load toDo
    -1. paintToDo가 실행 될 때 마다 그 텍스트를 array에 push. 그 전에 toDos 배열을 가져와 newTodo를 push.
    -2. 문제는 localStorage에 array를 저장할 수 없다는 것이다. 오직 텍스트만 저장 가능하다.
    -3. 함수 설정. toDos array의 내용을 localStorage에 넣는 것. 
    -4. saveToDos function이 호출되는 시점에는 newTodo는 array에 들어있다. 

10. 콘솔창에서 localStorage.getItem("todos")하면 배열처럼 보이는 텍스트를 얻는다.
> 단순 텍스트로 저장하지 않으려면.. 
> js object나 array나 어떤 것이든 string으로 바꿔주는 기능 사용. : jason stringify()

10-1. saveTodo함수의 localStorage.setItem("todos", toDos); 부분을 
       ("todos", JSON.stringify(toDos));

 입력값을 브라우저에 저장할 수 있을까? > localStorage 
toDo들을 저장> toDo들을 불러오기 > 새로고침 시 l.s에서 이것들을 불러와서 화면에 나타내주기
=========================================
JASON.parse("[]"): 배열을 단순한 문자열로 바꿀 수 있다. 이걸 다시 js가 이해할 수 있는 살아있는 배열로 만들 수 있음.
> 콘솔창에서 진행함 
> JSON.parse(localStorage.getItem("todos")) 
> ["a","b","c"]출력. 
>이건 맨 마지막줄에서 진행됨 
11-1 
11-2 
savedToDos가 null이 될 때도 있음 
js는 배열에 있는 각각의 item에 대해 함수를 실행할 수 있게 해준다. 
11-3. parsedToDos는 배열이라 forEach라는 걸 갖고 있다. 
  > forEach는 함수를 실행하게 해줌, 그 배열에 있는 각각의 item에 대해서 실행해준다.
  parsedToDos가 가지고 있는 각각의 item에 대해 sayHello function을 실행해달라고 요청 

11-4. 새로 추가한 것만 로컬스토리지에 저장되고 예전것은 없어짐. (덮어쓰는 현상)
> 이유: application이 시작될 때 toDos array는 항상 비어있기 때문에
     newToDo를 작성하고 form을 submit할 때마다 newToDo를 toDos array(비어있는)에 그냥 push
     >toDos를 let으로 선언 
     l.s에 toDo들이 있으면 toDos에 parsedToDos를 넣어서 전에 있던 toDo 들을 복원 
     
     > 11-4가 끝나면 입력한 값이 새로고침해도 없어지지 않고 덮어쓰이지도 않는다. 
     > 하지만 화면에서 항목을 삭제하고 새로고침하면 다시 생성되는 오류가 발생한다. (해결은 7.6강)
     > l.s는 입력한 배열을 복사해두는 곳이라고 생각하면 된다. 
     > 지향해야하는 toDos의 형태는 [{id:1212121, text:"drink"}]형태다. 랜덤id와 to do의 내용의 형태
12. 랜덤 아이디 생성방법 
12-1. toDos 데이터베이스를 비우기 
12-2 element가 만들어질 때 이 id를 갖게 됨 > Date.now(): 밀리초(1000 분의 1)를 주는 함수
12-3 디비에 ToDo 내용을 추가하는 곳으로 가자> let toDos에서 저장 
      매번 사용자가 적어둔 text를 push > toDos.push(newTodo); 이렇게 
12-4 text push가 아니라 object push를 해야됨> 오브젝트 생성 후 push 
     newTodoObj를 toDos.push(newTodoObj) 이런 식으로 삽입 

13. id를 사용하는 방법 
> id를 html에 두는 것 
>paintToDo는 text인 newTodo만 가지고 있다. > 이걸 obj로 바꿔야 됨 
>paintToDo에 string 으로 newTodo를 주는 것 대신에 newTodoObj를 준다. 
13-1. paintToDo()함수의 span.innerText = newTodo; > newTodoObj의 text를 받으면 됨 
13-2 id로 각각의 li item을 구별. 
> 예전 paintToDo는 toDoInput.value에서 온 newTodo와 함께 call했지만 

14 배열에서 무언가를 지우고싶을때 실제로 그 배열에서 삭제하는 것이 아니라 지우고싶은 
   item을 제외하고 새 array를 만든다. > [].filter(sexyFilter)함수 사용. sexyFilter> 무조건 true리턴하는 함수 반대로
   무조건 false를 리턴한다면 빈 배열을 출력한다.

  todo.id가 내가 지우고 싶은 id와 다른지 물어보는 함수 구현 
  만약 내가 삭제하고 싶은 id와 다르면 todo를 array에 그대로 둠 
  ex)console창 
  const todos = [{text:"a", id:121212}, ...]
  function sexyFilter(todo){return todo.id !== 121212}< text도 삭제 가능 todo.text
  todos.filter(sexyFilter)
  > 지우고자 하는 id가 없어짐 
> filter function은 새 array를 준다. 
*/










