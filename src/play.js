export function compareInputNumbers(computerInputNumbers, userInputNumbers) {
    let ball = 0;
    let strike = 0;
    for (let i = 0; i < computerInputNumbers.length; i++) {
        if (computerInputNumbers[i] === userInputNumbers[i]) {
            strike += 1;
        } else if (computerInputNumbers.includes(userInputNumbers[i])) {
            ball += 1;
        }
    }
    return { ball, strike };
}
