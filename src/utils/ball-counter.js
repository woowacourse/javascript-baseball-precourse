export const getBallStrikeCount = (computerInputNumbers, userInputNumbers) => {
    let ballCount = 0;
    let strikeCount = 0;

    if (computerInputNumbers.length !== userInputNumbers.length) {
        return 0;
    }

    for (let i = 0; i < 3; i++) {
        if (computerInputNumbers[i] === userInputNumbers[i]) {
            strikeCount++;
        }
        else if (computerInputNumbers.includes(userInputNumbers[i])) {
            ballCount++;
        }
    }

    return [ballCount, strikeCount];
}