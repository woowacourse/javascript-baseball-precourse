export default function showResult(ball, strike) {
    const resultFunctions = [
        isThreeStrike,
        isOnlyBall,
        isOnlyStrike,
        ballAndstrike,
        noBallNoStrike,
    ];

    const result = resultFunctions
        .map((func) => func(ball, strike))
        .filter((result) => result !== undefined)
        .toString();

    return result;
}

function isThreeStrike(ball, strike) {
    if (strike === 3 && ball === 0) {
        return "정답을 맞추셨습니다!";
    }
}

function isOnlyStrike(ball, strike) {
    if (strike === 1 && ball === 0) {
        return `${strike}스트라이크`;
    } else if (strike === 2 && ball === 0) {
        return `${strike}스트라이크`;
    }
}

function isOnlyBall(ball, strike) {
    if (strike === 0 && ball) {
        return `${ball}볼`;
    }
}

function ballAndstrike(ball, strike) {
    if (strike && ball) {
        return `${ball}볼 ${strike}스트라이크`;
    }
}

function noBallNoStrike(ball, strike) {
    if (ball === 0 && strike === 0) {
        return "낫싱";
    }
}
