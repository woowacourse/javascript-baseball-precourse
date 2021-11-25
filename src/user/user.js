import { ALERT_TEXT } from "../utils/constants.js";
import { isUserInputValid, splitNumStrToArr } from "./checkFunctions.js";

export default class User {
    constructor() {
        this.$userInput = document.getElementById('user-input');
        this.$submitButton = document.getElementById('submit');
        this.userInputNumbers = [];
        this.addAllEventListeners();
    }

    // 사용자 입력 수 배열 반환
    getUserInputNumbers() {
        return this.userInputNumbers;
    }

    // 사용자 입력 수 배열 저장
    setUserInputNumbers(numbers) {
        this.userInputNumbers = numbers;
    }

    // 엔터가 입력되거나 submit 버튼이 눌렸을 때 실행될 함수
    eventHandlerFunction() {
        const userInputValue = this.$userInput.value;

        if (isUserInputValid(userInputValue)) {     // 올바르게 입력하였을 때
            const numArr = splitNumStrToArr(userInputValue);
            this.setUserInputNumbers(numArr);
        }
        else {                                      // 잘못된 값을 입력하였을 때
            alert(ALERT_TEXT);
        }
    }

    // user-input의 Keyup Event Function
    onEnterKeyUp() {
        this.$userInput.addEventListener('keyup', e => {
            // 눌렸던 키가 엔터일 때만
            if (e.key === 'Enter') {
                this.eventHandlerFunction();
            }
        });
    }

    // submit 버튼의 Click Event Function
    onSubmitButtonClicked() {
        this.$submitButton.addEventListener('click', () => {
            this.eventHandlerFunction();
        });
    }
    
    // 여러 이벤트 핸들러를 한 번에 추가하는 함수
    addAllEventListeners() {
        this.onEnterKeyUp();
        this.onSubmitButtonClicked();
    }
}