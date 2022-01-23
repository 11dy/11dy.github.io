const images =["1.jpg", "2.jpg", "3.jpg","4.jpg","5.jpg","6.jpg"] // img 폴더에 있는 이미지들이랑 images 배열 안의 이름이 같으면 된다.

const chosenImage = images[Math.floor(Math.random()*images.length)]; //images 배열의 0부터 2까지 랜덤 선택
// 자바스크립트에서 뭔가를 생성해서 그걸 html에 추가하는 법 
// 목표 설정: div 밑에 <img src="img/0.jpeg" />가 생성되는게 목표.(html에서는 할 수 없다.)
const bgImage = document.createElement("img"); 

//bgImage.classList.add("bgi"); // img에 클래스 이름 추가 



bgImage.src = `img/${chosenImage}`; // source 사용 시 이런 식으로 사용한다. 
// 위 방식은 html에 div 밑에 <img src="img/0.jpeg" />를 생성하는 것과 같은 역할을 한다.
// 이 상태에서는 아직 document에 존재하지 않는다. body 내부에 넣어줘야함 
document.body.appendChild(bgImage); // body에 html을 추가

//document.body.style.backgroundImage = chosenImage;












