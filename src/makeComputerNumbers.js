export default function makeComputerNumbers() {
    const computerNumArr = Array(9)
        .fill(0)
        .map((v, i) => (v = i + 1));
    const computerInputNumbers = [];
    for (let i = 0; i < 3; i++) {
        const choiceNumber = Math.floor(Math.random() * (9 - i));
        computerInputNumbers.push(computerNumArr.splice(choiceNumber, 1)[0]);
    }
    return computerInputNumbers;
}
