import getAnswer from './getAnswer.js';
import getUserInput from './getUserInput.js';
import getGameResult from './getGameResult.js';


//정답값 구하기
let answerArray = getAnswer();
console.log(answerArray);

const $result = document.querySelector('#result');
const $userInput = document.querySelector('#user-input');

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
        }
    })

}


new BaseballGame();