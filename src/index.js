export default function BaseballGame() {
    this.play = function (computerInputNumbers, userInputNumbers) {
        // return "결과 값 String";
    };
}

// export default class BaseballGame {
//   play(computerInputNumbers, userInputNumbers) {
//     return "결과 값 String";
//   }
// }

new BaseballGame();

function makeComuputerNumber() {
    const computerNumArr = Array(9)
        .fill(0)
        .map((v, i) => (v = i + 1));
    const computerNumber = [];
    for (let i = 0; i < 3; i++) {
        const choiceNumber = Math.floor(Math.random() * (9 - i));
        computerNumber.push(computerNumArr.splice(choiceNumber, 1)[0]);
    }
    return computerNumber;
}
