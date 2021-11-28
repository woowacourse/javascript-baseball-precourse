let answer;
let isNewGame = true;
let result = document.getElementById('result');
let btn = document.getElementById('submit');

export default function BaseballGame() {
    this.play = function (computerInputNumbers, userInputNumbers) {
        if(isNewGame){
            answer = randomGenerator();
        }
        isNewGame = false;
        let balls = countBall(userAnswer, answer);
        let strikes = countStrike(userAnswer, answer);
        let resultText = "";
        if(balls != 0){
            resultText += balls+"볼 ";
        }
        if(strikes == 3){
            resultText += '🎉 <strong>정답을 맞추셨습니다!</strong> 🎉</br>';
            resultText += '게임을 새로 시작하시겠습니까? ';
            resultText += '<button id="game-restart-button">재시작</button>';
        }else if(strikes != 0){
            resultText += strikes+"스트라이크";
        }else if(balls == 0){
            resultText = "낫싱";
        }
        return resultText;
    };
}

//return 3자리 랜덤 숫자 
function randomGenerator(){
    const answer = MissionUtils.Random.pickUniqueNumbersInRange(1,9,3);
    return answer;
}

btn.addEventListener('click', function(){
    const userInput = document.getElementById('user-input').value;
    result.innerHTML = BaseballGame.play(answer, userInput);
})

let restartBtn = document.getElementById('game-restart-button');
restartBtn.addEventListener('click', function(){
    alert('1');
})

function countBall(userAnswer, answer){
    let ballCount = 0;
    for(let i = 0; i < 3; i++){
        if(userAnswer[i] == answer[(i+1)%3] || userAnswer[i] == answer[(i+2)%3]){
            ballCount ++;
        }
    }
    return ballCount;
}

function countStrike(userAnswer, answer){
    let strikeCount = 0;
    for(let i = 0; i < 3; i++){
        if(userAnswer[i] == answer[i]){
            strikeCount ++;
        }
    }
    return strikeCount;
}

function restart(){
    result.innerHTML = "";
    answer = randomGenerator();
    isNewGame = true;
}