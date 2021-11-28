//볼 갯수 세기
function ballCount(userInputArray, answerArray) {
    let ball = 0;
    for(let i = 0; i < 3; i++) {
        if(answerArray.includes(userInputArray[i]) && answerArray[i] !== userInputArray[i]) {
            ball++;
        }
    }
    return ball;
}

//스트라이크 갯수 세기
function strikeCount(userInputArray, answerArray) {
    let strike = 0;
    for(let i = 0; i < 3; i++) {
        if(answerArray[i] === userInputArray[i]) {
            strike++;
        }
    }
    return strike;
}


function resultText(ball, strike) {
    let result = '';
    if(strike === 3) {
        result = '정답';
    }
    else if(strike === 0 && ball === 0) {
        result = '낫싱';
    }
    else if(strike === 0 && ball !== 0) {
        result = `${ball}볼`;
    }
    else if(strike !== 0 && ball === 0) {
        result = `${strike}스트라이크`;
    }
    else if(strike !== 0 && ball !== 0) {
        result = `${ball}볼 ${strike}스트라이크`;
    }

    return result;
}


//게임결과내기
export default function getGameResult(userInputArray, answerArray) {

    let result = '';
    let ball = 0;
    let strike = 0;

    //볼 갯수 세기
    ball = ballCount(userInputArray, answerArray);

    //스트라이크 갯수 세기
    strike = strikeCount(userInputArray, answerArray);

    //결과텍스트 정하기
    result = resultText(ball, strike);

    return result;
}