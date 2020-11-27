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
};


let baseballGame = new BaseballGame();
