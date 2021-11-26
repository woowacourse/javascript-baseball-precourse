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
        
        return userInputNum;
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