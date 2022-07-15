import ball from "./ball.js";
import inputUserNum from "./inputUserNum.js";
import makeComputerNum from "./makeComputerNum.js";
import printResult from "./printResult.js";

export default function BaseballGame() {
    this.play = function (computerInputNumbers, userInputNumbers) {;
        let score = {
            ball: {
                string: '볼', 
                count: 0
            },
            strike: {
                string: '스트라이크', 
                count: 0
            },
            nothing: {
                string: '낫싱', 
                count: ' '
            }
        };

        const computerInputNumber = String(computerInputNumbers)
        for (let i = 0; i < 3; i++){

            if (computerInputNumber[i] == String(userInputNumbers)[i]){
                score['strike']['count']++;
            } 
            else{
                score = ball(computerInputNumber, String(userInputNumbers), i, score);
            }
        }

        score['nothing']['string'] = (score['strike']['count'] == 0 && score['ball']['count'] == 0) ? '낫싱' : '';
        return printResult(score);
    }
}


function press_button(){
    const game = new BaseballGame();
    
    const computer_num = makeComputerNum();
    const user_num = inputUserNum();

    document.getElementById('result').innerHTML = game.play(computer_num, user_num);
}

function restart_button(){
    location.reload();
}

window.onload = ()=>{
    document.getElementById('submit').addEventListener("click", press_button);
    document.getElementById('game-restart-button').addEventListener("click", restart_button);
}

