export const caculateBallCount = (target, input) => {
    const result = {
        "strike": 0,
        "ball" : 0
    };
    const numberOfMatches = target.reduce((ac,cur,index)=>{
        return input.includes(cur) ? ac + 1 : ac;
    },0)
    result.strike = target.reduce((ac,cur,index) =>{
        return cur === input[index] ? ac+1 : ac;
    },0);
    result.ball = numberOfMatches - result.strike;

    return result;
}

export const countToString = (count, suffix) => {
    return count ? String(count) + suffix : '';
}

export const combineCount = (ball, strike) => {
    return ball !== '' ? ball + ' ' + strike : strike;
}