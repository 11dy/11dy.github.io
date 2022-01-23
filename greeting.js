const loginForm = document.querySelector("#login-form ");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting"); 

const USERNAME_KEY = "username";
const HIDDEN_CLASSNAME = "hidden"; 

function onLoginSubmit(event){  // noF5: 인수 
   event.preventDefault(); 
   loginForm.classList.add(HIDDEN_CLASSNAME);
   const username = loginInput.value;  // form이 submit되면 input으로부터 유저정보를 받는다.
   localStorage.setItem(USERNAME_KEY, username) // 키:저장될 아이템의 이름, 값은 username 변수. 
   paintGreetings(username) 
}  

//loginForm.addEventListener("submit", onLoginSubmit); // submit은 엔터나 버튼을 누를 때 발생
// hidden 이벤트 사용하면  유저가 이름을 제출한 뒤에 hidden이라는 classname을 더해주는 것.
function paintGreetings(username){
   greeting.innerText = `Hello ${username}`; 
   greeting.classList.remove(HIDDEN_CLASSNAME); 
}
 

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null){  //show the form 
   loginForm.classList.remove(HIDDEN_CLASSNAME);
   loginForm.addEventListener("submit", onLoginSubmit);
}else {  //show the greetings   // localstorage에 유저 정보가 있다면 정보를 받아서 인자로 넣어줌 
   paintGreetings(savedUserName);

}