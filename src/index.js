import BaseballGame from "./game/index.js";

const game = new BaseballGame();

// 유저 입력 이벤트 리스너
const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', event =>{
    event.preventDefault();
    const userInput = document.getElementById('user-input').value;
    
    if(game.isValid(userInput)){
        alert("유효한 값");
        //TODO: compare two numbers
        
    } else{
        alert("잘못된 값을 입력하셨습니다.");
    }
})