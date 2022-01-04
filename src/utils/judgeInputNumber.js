function isStrike(computerInputNumbers, userInputNumbers, index) {
    return computerInputNumbers[index] === Number(userInputNumbers.charAt(index));
}

function isBall(computerInputNumbers, userInputNumbers, index) {
    return computerInputNumbers.includes(Number(userInputNumbers.charAt(index)));
}

function judgeInputNumber(state, userInputNumbers) {
    state.strikes = 0;
    state.balls = 0;
    console.log(state.computerNumber, userInputNumbers);

    for(let i = 0; i < 3; i++) {
        if(isStrike(state.computerNumber, userInputNumbers, i)) {
            state.strikes++;
        }else if(isBall(state.computerNumber, userInputNumbers, i)) {
            state.balls++;
        }
    }
}

export default judgeInputNumber;
