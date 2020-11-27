export default function BaseballGame() {

// * 랜덤으로 서로 다르고 0이 아닌 3자리 숫자 만들기
    this.makeRandomInt = function () {
        const randomNumber = parseInt(Math.random()*10);
        return randomNumber;
    };
};
let baseballGame = new BaseballGame();
