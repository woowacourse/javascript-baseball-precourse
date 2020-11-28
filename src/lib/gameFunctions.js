const MAX_NUM_LENGTH = 3;

//functions to execute baseball game
export const checkValidNumber = inputs => {
    const inputsWithoutSameNumber = new Set([...inputs]);

    if(/\s+/g.test(inputs)) return {
        ok: false,
        msg: `공백은 입력받을 수 없습니다.`
    }

    if(/[^1-9]+/g.test(inputs)) return {
        ok: false, 
        msg: `1-9의 각 "다른" 숫자 ${MAX_NUM_LENGTH}개를 공백 없이 입력하세요`
    };

    if(inputs.length !== MAX_NUM_LENGTH) return {
        ok: false, 
        msg: `숫자는 ${MAX_NUM_LENGTH}개만 입력가능합니다.`
    };
    
    if(inputsWithoutSameNumber.size < inputs.length) return {
        ok: false,
        msg: `같은 숫자는 여러번 입력받을 수 없습니다.`
    }

    return {
        ok: true, 
        msg: '올바른 입력입니다!'
    };
}

export const createRandomNumber = () => {
    let _randomNum = String(Math.floor(Math.random()*999 + 1));
    return checkValidNumber(_randomNum).ok ? _randomNum : createRandomNumber();
}

export const compareAnswersAndGetResult = (computerInputNumbers, userInputNumbers) => {
    const computerInputNumbersArr = computerInputNumbers.split('');
    const userInputNumbersArr = userInputNumbers.split('');
    let strike = 0, ball = 0;

    if(computerInputNumbers === userInputNumbers) return {ok: true};

    //check answer
    for(let i=0; i<MAX_NUM_LENGTH; i++) {
        const _index = computerInputNumbersArr.indexOf(userInputNumbersArr[i]);
        strike = _index === i ? strike + 1 : strike;
        ball = _index !== i && _index !== -1 ? ball + 1 : ball;
    }

    return {
        ok: false,
        ball,
        strike
    }
}