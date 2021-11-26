export default class BaseballGame {
    
    //생성자
    constructor() {
        this.$submitButton = document.getElementById("submit");
        this.$userInput = document.getElementById("user-input");
        this.answer = this.makeRandomAnswer(); //정답 생성 배열로 나옴
        this.addEvent();
    }

    //이벤트 리스너 추가
    addEvent() {
        this.$submitButton.addEventListener('click', this.getUserInputNum.bind(this));
    }

    //사용자로부터 입력받은 값 확인
    getUserInputNum(e) {
        e.preventDefault();//다시 실행되는거 방지
        const userInputNum = this.$userInput.value;
        this.checkUserInputNum(userInputNum);
        
        return userInputNum;
    }

    //사용자로부터 입력받은 값 검사
    checkUserInputNum(userInputNum) {
        if(isNaN(userInputNum)) {
            return alert("숫자만 입력해주세요!");
        }
        if(userInputNum.length !== 3) {
            return alert("3자리의 수를 입력해주세요!");
        }
        if(new Set(userInputNum).size !== 3) {
            return alert("서로 다른 숫자를 입력해주세요!");
        }
        if(userInputNum.includes(0)){
            return alert("각 자리가 1~9인 수를 입력해주세요!");
        }
    }

    // 중복없이 랜덤한 3자리수 정답 생성
    makeRandomAnswer() {
        const randomAnswer = [];
        let usedNumbers = [];

        while(randomAnswer.length < 3) {
            const pickedNum = MissionUtils.Random.pickNumberInRange(1, 9);
            if(!usedNumbers.includes(pickedNum)) {
                randomAnswer.push(pickedNum);
                usedNumbers.push(pickedNum);
            }
        }
        return randomAnswer;
    }

    play(ComputerInputNumbers, userInputNumbers) {      
        return "결과 값 String";
    }
}

new BaseballGame();