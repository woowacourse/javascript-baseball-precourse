import BaseballGame from "./game/index.js";

const game = new BaseballGame();

// 유저 입력 이벤트 리스너
const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', event =>{
    event.preventDefault();
    const userInput = document.getElementById('user-input').value;
    console.log(userInput);
})