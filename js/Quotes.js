const quotes = [  // 명언 10개가 들어있는 배열의 형태 
    {
        quote: "Whoever fights monsters should see to it that in the process he does not become a monster. And if you gaze long enough into an abyss, the abyss will gaze back into you.",
        author: "Friedrich Nietzsche",
    },
    {
        quote: "Life is what happens when you're busy making other personality",
        author: "Jhon Lennon",
    },
    {
        quote:"It is hard enough to remember my opinions, without also remembering my reasons for them!",
        author:"Friedrich Nietzsche",
    },
    {
        quote:"Whoever fights monsters should see to it that in the process he does not become a monster. And if you gaze long enough into an abyss, the abyss will gaze back into you.",
        author:"Friedrich Nietzsche",
    },
    {
        quote:"There is always some madness in love. But there is also always some reason in madness.",
        author:"Friedrich Nietzsche",
    },
    {
        quote:"You must have chaos within you to give birth to a dancing star.",
        author:"Friedrich Nietzsche",
    },
    {
        quote:"You have your way. I have my way. As for the right way, the correct way, and the only way, it does not exist.",
        author:"Friedrich Nietzsche",
    },
    {
        quote:"Sometimes people don't want to hear the truth because they don't want their illusions destroyed.",
        author:"Friedrich Nietzsche",
    },
    {
        quote:"In heaven, all the interesting people are missing.",
        author:"Friedrich Nietzsche",
    },
    {
        quote:"He who has a why to live for can bear almost any how.",
        author:"Friedrich Nietzsche",
    },
    {
        quote:"There are no facts, only interpretations.",
        author:"Friedrich Nietzsche",
    },
    
    

]

const quote = document.querySelector("#quote span:first-child"); // id가 quote인 element의 첫번째 span을 가져옴 
const author = document.querySelector("#quote span:last-child"); // id가 quote인 element의 두번째 span을 가져옴 

// Math module을 이용해 배열의 모든 원소를 출력하는 함수를 작성한다. 
// Math.random() 0 부터 1 사이의 수를 제공한다.  
//Math.round(1.1) > 1출력 반올림하는 함수다. 
//Math.ceil(1.1) > 2가 된다. 올림 
// Math.floor(1.9)>1 내림 

const todayQuotes = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todayQuotes.quote; // quote의 위치에 랜덤으로 출력되는 quotes object의 quote 출력 
author.innerText = todayQuotes.author; // author의 위치에 랜덤으로 출력되는 quotes object의 author 출력 














