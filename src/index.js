import { compareNumbers } from './compareNumbers.js';
import { createComputerNumbers } from './createComputerNumbers.js';
import { createUserNumbers } from './createUserNumbers.js';

export default function BaseballGame() {
    this.play = function (computerInputNumbers, userInputNumbers) {
        return compareNumbers(computerInputNumbers, userInputNumbers);
    };
}

window.onload = ()=>{
    document.getElementById('submit').addEventListener("click", ()=>{
        const game = new BaseballGame();

        const computer_num = createComputerNumbers();
        const user_num = createUserNumbers()
        document.getElementById('result').innerHTML = game.play(computer_num, user_num);
    });

    document.getElementById('game-restart-button').addEventListener("click", ()=>{
        location.reload();
    });
}
