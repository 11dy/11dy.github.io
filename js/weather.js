const API_KEY = "f23a85e0fc2beecac65a5e50a73f8d40"

function onGeoOk(position){  // js가 유저의 위치를 전달 
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    // api key, lon, lat은 반드시 있어야한다. 
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child"); // span에서 날씨를 줌
        const city = document.querySelector("#weather span:last-child"); // 도시 두번째로 표시 
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}℃`;  // 여기 만들고 html에 div 태그 안에 id =weather생성. 그 후에 name과 weather이 들어갈 span 2개 생성
        // >날씨 이름 / data.main.temp
    } ); // js가 url을 부름 
}
function onGeoError(){
    alert("Can't find you! No weather for you");
} 
 







// 유저의 위치를 주는 함수 사용 
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); // 이걸 브라우저에서 실행하면 됨 , 인수는 잘됐을 때 함수, 에러났을 때 함수 두개가 필요
// 성공 함수는 geolocationposition object 하나를 입력받는다. > js가 input 파라미터로 주는 것
//2단계: console.log("You live in", lat, lng); 에서 출력된 숫자들을 장소로 바꿔줄 서비스 사용
// 구글 크롬의 network에 가면(콘솔창에 있음) wifi에서 어떤 일이 일어나는 지 보여준다. > url 클릭하면 세부 내용 출력됨
// unit을 url에 같이 보낼 수 있다. 
// 섭씨 온도 변경 > 위 url에 &units=metric 입력. 
// fetch는 약속이다. 조금 나중에 일어나는 특징을 가짐. > .then()사용  

// response.json()은 크롬 network에 들어가서 url을 클릭하면 나오는 정보들이다. 

/*
fetch(url)
.then(response => response.json())
.then(data => {
    console.log(data.name, data.weather[0].main);  // console 창에 현재 위치와 날씨를 보여줌
} ); // js가 url을 부름 
*/ 
// 날씨 이름 / data.main.temp





















// open API 
/*1. openweathermap.org 이동 
8-1 profile key >my API key 
api.openweathermap.org/data/2.5/weather?lat=37.5058034&lon=127.0936762&appid=f23a85e0fc2beecac65a5e50a73f8d40
> 내 위치와 날씨 알려주는 api 
*/