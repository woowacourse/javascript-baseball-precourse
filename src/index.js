import Computer from './computer/computer.js';
import User from './user/user.js';
import { GAME_RULE, RESULT_TEXT, RESTART_TEXT } from './utils/constants.js';
import { calcResult } from './calcResult.js';

export default class BaseballGame {
    constructor() {
        this.computer = new Computer();
        this.user = new User();
        this.$userInputForm = document.getElementById('user-input-form');
        this.$userInput = document.getElementById('user-input');
        this.$resultArea = document.getElementById('result');
        this.addAllEventListeners();
    }

    // result를 문자열로 구성하여 반환하는 함수
    play(computerInputNumbers, userInputNumbers) {
        const { strikeCnt, ballCnt } = calcResult(computerInputNumbers, userInputNumbers);
        const { ball, strike, nothing, success } = RESULT_TEXT;
        const { answerLength } = GAME_RULE;

        // 기본 result의 형태는 ?볼 ?스트라이크
        let result = `${ballCnt}${ball} ${strikeCnt}${strike}`;

        // 결과가 1) 정답 또는 2) 낫싱인 경우에만 result 교체
        if (strikeCnt === answerLength) {               // 0볼 3스트라이크인 경우
            result = success;
        }
        else if (strikeCnt === 0 && ballCnt === 0) {    // 0볼 0스트라이크인 경우
            result = nothing;
        }

        return result;
    }
    
    // 게임을 재시작하는 로직이 담긴 함수
    restartGame() {
        // user-input 초기화
        this.$userInput.value = null;
        this.$userInput.readOnly = false;
        this.user.setUserInputNumbers([]);
        
        // result 초기화
        this.$resultArea.innerHTML = '';
        
        // 새로운 번호 생성
        this.computer = new Computer();
    }

    // 게임 종료 시 재시작 글과 버튼을 생성하여 보여주는 함수
    showRestartArea() {
        const { text, buttonText, buttonId } = RESTART_TEXT;
        const $restartText = document.createTextNode(text);
        const $restartButton = document.createElement('button');

        $restartButton.innerHTML = buttonText;
        $restartButton.setAttribute('id', buttonId);
        $restartButton.addEventListener('click', () => {
            this.restartGame();
        });

        const $brTag = document.createElement('br');

        // 가독성을 위해 br 태그 추가
        this.$resultArea.appendChild($brTag);
        this.$resultArea.appendChild($restartText);
        this.$resultArea.appendChild($restartButton);
    }

    // 게임을 종료시키는 함수
    exitGame() {
        this.showRestartArea();
        // 게임이 종료되어 재시작 버튼을 누르기 전까지는 사용자가 input을 변경할 수 없음
        this.$userInput.readOnly = true;
    }

    // 게임 결과(힌트 또는 정답과 재시작 부분)를 사용자에게 보여주는 함수
    setResult() {
        const result = this.play(this.computer.getAnswer(), this.user.getUserInputNumbers());

        this.$resultArea.textContent = result;

        const { success } = RESULT_TEXT;

        // 정답을 맞힌 경우에는 게임 종료
        if (result === success) {
            this.exitGame();
        }
    }

    // 사용자 입력 Form의 Submit Event Function
    onSubmitForm() {
        this.$userInputForm.addEventListener('submit', e => {
            e.preventDefault();

            // 숫자 3개가 들어가있는 경우에만 게임 결과를 보여줌
            if (this.user.getUserInputNumbers().length === 3) {
                this.setResult();
            }
        });
    }

    // 여러 이벤트 핸들러를 한 번에 추가하는 함수
    addAllEventListeners() {
        this.onSubmitForm();
    }
}

new BaseballGame();