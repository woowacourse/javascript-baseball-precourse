//functions to execute baseball game
export const checkValidNumber = inputs => {
    if(/[^1-9]+/g.test(inputs)) return {ok: false, msg: '1-9의 각 다른 숫자 3개를 공백 없이 입력하세요'};
    if(inputs.length !== 3) return {ok: false, msg: '숫자는 3개만 입력가능합니다.'};
    if(inputs.charAt(0) === inputs.charAt(1) || inputs.charAt(0) === inputs.charAt(2) || inputs.charAt(1) === inputs.charAt(2)) return {ok: false, msg: '같은 숫자는 여러번 올 수 없습니다.'};
    return {ok: true, msg: '올바른 입력입니다!'};
}

export const createRandomNumber = () => {
    let randomNum = String(Math.floor(Math.random()*999 + 1));
    return checkValidNumber(randomNum).ok ? randomNum : createRandomNumber();
}

export const compareAnswersAndGetResult = (computerInputNumbers, userInputNumbers) => {
    if(computerInputNumbers === userInputNumbers) return {ok: true};
    const computerInputNumbersArr = computerInputNumbers.split('');
    const userInputNumbersArr = userInputNumbers.split('');
    let strike = 0, ball = 0;

    //check answer
    for(let i=0; i<3; i++) {
        const index = computerInputNumbersArr.indexOf(userInputNumbersArr[i]);
        strike = index === i ? strike + 1 : strike;
        ball = index !== i && index !== -1 ? ball + 1 : ball;
    }

    return {
        ok: false,
        ball,
        strike
    }
}