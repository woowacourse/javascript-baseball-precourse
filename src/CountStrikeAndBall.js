export const CountStrikeAndBall = (computerInputNumbers, userInputNumbers) => {
    let StrikeCnt = 0;
    let BallCnt = 0;
    for (let i = 0; i < userInputNumbers.length; i++) {
        if (userInputNumbers[i] == computerInputNumbers[i]) StrikeCnt++;
        else if (userInputNumbers[i] == computerInputNumbers[(i + 1) % 3] || userInputNumbers[i] == computerInputNumbers[(i + 2) % 3]) BallCnt++;
    };
    let Strike = StrikeCnt;
    let Ball = BallCnt;
    return {
        Strike: Strike,
        Ball: Ball
    };
};