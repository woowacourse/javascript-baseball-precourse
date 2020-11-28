export default function BaseballGame() {

// * 랜덤으로 0과 9사이의 숫자를 만든다.
    this.makeRandomInt = function () {
        const randomNumber = parseInt(Math.random()*10);
        return randomNumber;
    };
// * 0이 아닌지 확인하기.
    this.isNotZero = function (number) {
        if (number != 0) {
            return true;
        };
        return false;
    };

// * 기존에 뽑은 숫자와 동일한 숫자를 뽑았는지 확인
    this.isInRandomNumbers = function (randomNumbers,oneNumber) {
        if (randomNumbers.includes(oneNumber)) return true;
        return false;
    };
// * 랜덤으로 서로 다르고 0이 아닌 3자리 숫자 만들기
    this.makeRandomNumbers = function () {
        const isMaking = true;
        let randomNumbers = "";
        while(isMaking){
            const oneNumber = this.makeRandomInt();
            if (this.isNotZero(oneNumber) && !this.isInRandomNumbers(randomNumbers,oneNumber)) {
                randomNumbers += oneNumber;
            };
            if (randomNumbers.length === 3) {
                return Number(randomNumbers);
            };
        };
    };
// *입력의 길이가 3인지 확인한다.
    this.isLengthEqualsThree = function (input) {
        if (input.length === 3) {
            return true;
        };
        return false;
    };
// * 모두 숫자인지 확인한다.
    this.isNumber = function (input) {
        for (var item of input) {
            if (isNaN(Number(item))) return false;
        };
        return true;
    };
    // * 서로 모두 다른 숫자인지 확인한다.
    this.isAllDifferent = function (input) {
        const fillterdInput = Array.from(new Set(input));
        if (fillterdInput.length !== input.length) return false;
        return true;
    };
    // * 0이 없는지 확인한다.
    this.isZeroExits = function (input) {
        for (var item of input) {
          if (item === "0") {
            return true;
          };
        };
        return false;
    };
    // * 사용자의 입력이 올바른 입력인지 판별하기
    this.isInputRight = function (input) {
        if (!this.isLengthEqualsThree(input)) {
            return false;
        };
        if (!this.isNumber(input)) {
            return false;
        };
        if (!this.isAllDifferent(input)) {
            return false;
        };
        if (this.isZeroExits(input)) {
            return false;
        };
        return true;
    };
    // * 주어진 index가 strike, ball인지 확인하기
    this.calculateResult = function (index,computerInputNumbers, userInputNumbers) {
        if (String(userInputNumbers)[index] == String(computerInputNumbers)[index])  {
            return "스트라이크";
        };
        if (String(computerInputNumbers).includes(String(userInputNumbers)[index])) {
            return "볼";
        };
        return "아웃";
    };
    // * 깔끔하게 스트라이크, 볼, 낫싱을 String으로 출력하기(결과계산하기).
    this.play = function (computerInputNumbers, userInputNumbers) {
        let result = {
            "볼" : 0,
            "스트라이크" : 0,
            "아웃" : 0
        };
        for (var index = 0 ; index < String(computerInputNumbers).length ; index += 1) {
            let oneResult = this.calculateResult(index,computerInputNumbers,userInputNumbers);
            result[oneResult] += 1;
        };
        if (result["아웃"] === 3) {
            return "낫싱";
        };
        if (result["스트라이크"] === 0) {
            return `${result["볼"]}볼`;
        };
        if (result["볼"] === 0) {
            return `${result["스트라이크"]}스트라이크`;
        };
        return `${result["볼"]}볼 ${result["스트라이크"]}스트라이크`;
    };
    // * 정답을 맞췄는지 확인하기
    this.isRight = function (computerInputNumbers, userInputNumbers) {
        if (this.play(computerInputNumbers,userInputNumbers) === '3스트라이크') {
            return true;
        };
        return false;
    };
    // * 맞췄을때 '정답을 맞추셨습니다' 문구 추가하기
    this.addCorrectHTML = function () {
        const child = document.querySelector('#result');
        const newChild = document.createElement('Strong');
        child.innerHTML = ""
        child.appendChild(newChild);
        newChild.innerHTML = " 🎉 정답을 맞추셨습니다! 🎉 ";
    };
    // * 다시하기 버튼 생성하기.
    this.addNewGameHTML = function () {
        const parent = document.querySelector('#result')
        const newChild = '<div id = "restart-div"></br><span id= "restart-span">게임을 새로 시작하시겠습니까?</span>  <button id="restart-button">게임 재시작</button></div>'
        parent.innerHTML += newChild
    };
    // * restart함수 만들기
    this.restart = function () {
        const parent = document.querySelector("#result");
        const restartDiv = document.querySelector('#restart-div');
        const input = document.querySelector("#user-input");
        const checkButton = document.querySelector("#submit");
        parent.removeChild(restartDiv);
        parent.innerHTML = "";
        input.value =  "";
        checkButton.disabled = false;
        return this.randomNumber = this.makeRandomNumbers();
    };
    // * 다시하기 버튼에 restart 이벤트 리스너 추가하기
     this.addEventToRestartButton = function () {
         const button = document.querySelector("#restart-button");
         button.addEventListener("click", () => this.restart());
     };
};


let baseballGame = new BaseballGame();
