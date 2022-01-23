const BGC = document.querySelector("body");
const btn = document.querySelector("button");
const color = [
    "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34"
];


//사용자가 버튼을 클릭하면 color배열에서 두 가지 색상이 랜덤으로 선택되어야한다. 
function backgroundButton(){
    let randomColor1 = color[Math.floor(Math.random()*color.length)];
    let randomColor2 = color[Math.floor(Math.random()*color.length)];
    
    BGC.style = `background: linear-gradient(${randomColor1}, ${randomColor2});`
}

btn.addEventListener("click", backgroundButton); // 버튼을 누르면 배경 색상이 바뀜








