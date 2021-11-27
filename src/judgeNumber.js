function isStrike(computerInputNumbers, userInputNumbers, index) {
    return computerInputNumbers[index] === Number(userInputNumbers.charAt(index));
}

function isBall(computerInputNumbers, userInputNumbers, index) {
    return computerInputNumbers.includes(Number(userInputNumbers.charAt(index)));
}

export default function judgeNumber(computerInputNumbers, userInputNumbers) {
    let strikes = 0, balls = 0;
    console.log(computerInputNumbers, userInputNumbers);
    for(let i = 0; i < 3; i++) {
        if(isStrike(computerInputNumbers, userInputNumbers, i)) {
            strikes++;
        }else if(isBall(computerInputNumbers, userInputNumbers, i)) {
            balls++;
        }
    }

    return [strikes, balls];
}
