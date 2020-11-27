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
};


let baseballGame = new BaseballGame();
