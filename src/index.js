export default class BaseballGame {
    
    // 생성자
    constructor() {
        this.$submitButton = document.getElementById("submit");
        this.$userInput = document.getElementById("user-input");
        this.$result = document.getElementById("result");
        this.answer = this.makeRandomAnswer();
        this.addSubmitEvent();
    }

    // 이벤트 리스너 추가
    addSubmitEvent() {
        this.$submitButton.addEventListener('click', this.submitEvent.bind(this));
    }

    // 확인 버튼 이벤트
    submitEvent(e) {
        e.preventDefault();
        const userInputNum = this.$userInput.value;
        this.checkUserInputNum(userInputNum);
        
        return userInputNum;
    }

    // 사용자로부터 입력받은 값 검사
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
        if(userInputNum.includes(0)) {
            return alert("각 자리가 1~9인 수를 입력해주세요!");
        }

        // play 실행
        this.showResultSentence(this.play(this.answer, userInputNum));
    }

    // 중복없이 랜덤한 3자리수 정답 생성
    makeRandomAnswer() {
        const randomAnswers = [];
        let usedNumbers = [];

        while(randomAnswers.length < 3) {
            const pickedNum = MissionUtils.Random.pickNumberInRange(1, 9);
            if(!usedNumbers.includes(pickedNum)) {
                randomAnswers.push(pickedNum);
                usedNumbers.push(pickedNum);
            }
        }

        return randomAnswers;
    }

    // play 함수
    play(computerInputNumbers, userInputNumbers) {       
        if(this.isCorrect(computerInputNumbers, userInputNumbers)) {
            return "🎉 정답을 맞추셨습니다! 🎉";
        }

        const numStrike = this.countStrike(computerInputNumbers, userInputNumbers);
        const numBall = this.countBall(computerInputNumbers, userInputNumbers);

        return this.makeResultSentence(numStrike, numBall);
    }

    // 사용자로부터 입력받은 값이 정답과 같은지 검사
    isCorrect(computerInputNumbers, userInputNumbers) {
        return computerInputNumbers.every((element, index) => element.toString() === userInputNumbers[index]);
    }

    // 스트라이크 개수 검사
    countStrike(computerInputNumbers, userInputNumbers) {
        let numStrike = 0;

        computerInputNumbers.forEach((element, index) => {
            if(element.toString() === userInputNumbers[index]) {
                numStrike++;
            }
        });
        
        return numStrike;
    }

    // 볼 개수 검사
    countBall(computerInputNumbers, userInputNumbers) {
        let numBall = 0;

        computerInputNumbers.forEach((element, index) => {
            if(userInputNumbers.includes(element) && element.toString() !== userInputNumbers[index]) {
                numBall++;
            }
        });

        return numBall;
    }

    // 결과 문장 생성
    makeResultSentence(numStrike, numBall) {
        if(numStrike > 0 && numBall === 0) {
            return `${numStrike}스트라이크`;
        }
        if(numStrike === 0 && numBall > 0) {
            return `${numBall}볼`;
        }
        if(numStrike > 0 && numBall > 0) {
            return `${numBall}볼 ${numStrike}스트라이크`;
        }
        if(numStrike === 0 && numBall === 0) {
            return "낫싱";
        }
    }

    // 결과 문장 출력
    showResultSentence(resultSentence) {
        this.$result.textContent = resultSentence;

        if(resultSentence.includes("정답")) {
            const newContent = `
            <br><br>
            <div>
                <span> 게임을 새로 시작하시겠습니까?  </span>
                <button id="game-restart-button">게임 재시작</button>
            </div>
            `;
            this.$result.insertAdjacentHTML("beforeend", newContent);
            this.addRestartEvent();
        }
    }

    // 게임 재시작 이벤트 추가
    addRestartEvent() {
        this.$restart = document.getElementById("game-restart-button");
        this.$restart.addEventListener('click', () => {
            this.restartEvent();
        });
    }

    // 게임 재시작 버튼 이벤트
    restartEvent() {
        this.$userInput.value = "";
        this.$result.innerHTML = "";
        this.answer = this.makeRandomAnswer();
    }
}

new BaseballGame();