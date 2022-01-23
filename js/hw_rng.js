const game = document.querySelector("#guessing_game");
const maxNum = document.querySelector("#num1");
const Num = document.querySelector("#num2");

const chose = document.querySelector("#chose");
const result = document.querySelector("#result");


function RNG(event){       
    event.preventDefault();
    const firstInput = parseInt(maxNum.value);  // 최대값 입력   
    const secondInput = parseInt(Num.value);  //임의의 수 입력 
    const randNum = Math.floor(Math.random()*firstInput+1);  // 0부터10까지의 난수 저장(함수 호출할 때 마다 생성)
    
    if(secondInput === randNum)
    {   chose.innerText = `You chose: ${secondInput}, machine chose: ${randNum}`;
        result.innerText ="You won!"
    } else {
        chose.innerText = `You chose: ${secondInput}, machine chose: ${randNum}`;
        result.innerText ="You lose!" 
    }

}

guessing_game.addEventListener("submit", RNG);//submit 발생 시 form을 이벤트리스너로 연결 
