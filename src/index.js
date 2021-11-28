import getAnswer from './getAnswer.js';
import getUserInput from './getUserInput.js';
import getGameResult from './getGameResult.js';
import printResult from './printResult.js';


//정답값 구하기
let answerArray = getAnswer();
console.log(answerArray);

const $result = document.querySelector('#result');
const $userInput = document.querySelector('#user-input');

//리셋
function restart() {
    $userInput.value = '';
    $result.innerHTML = '';
    answerArray = getAnswer();
    console.log(answerArray);
}

export default function BaseballGame() {

    const $submit = document.querySelector('#submit');

    //확인 버튼 눌렀을 때
    $submit.addEventListener('click', () => {
        //유저입력값 가져오기
        if (getUserInput()) {
            const userInputArray = getUserInput();

            //게임결과내기
            this.play = function (userInputArray, answerArray) {
                return getGameResult(userInputArray, answerArray);
            }

            //게임 결과 출력
            printResult(userInputArray, answerArray, this.play);
        }
    })

    //재시작버튼 클릭시 재시작
    $result.addEventListener('click', ({ target }) => {
        if (target.id === 'game-restart-button') {
            restart();
        }
    })

}


new BaseballGame();