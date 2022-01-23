const clock = document.querySelector("h1#clock"); // h2와 id를 함께 사용 또는 id만 사용해도 된다.

function getClock(){
    const date = new Date();  // 호출하는 당시의 현재 날짜랑 시간을 알려준다. 
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText =`${hours}:${minutes}:${seconds}`; 
}

getClock();  // 사이트가 load되자 카운트 실행  
setInterval(getClock, 1000); // 반복 
