function getStrikeCount(computerInputNumbers,userInputNumbers){
    let strikeCount = userInputNumbers.reduce((acc,cur,index) => {
        if(Number(cur) === Number(computerInputNumbers[index])){
            acc++;
        }
        return acc;
    },0);
    return strikeCount;
}

function getBollCount(computerInputNumbers, userInputNumbers){
    let bollCount = userInputNumbers.reduce((acc,cur,index)=> {
        if(computerInputNumbers.includes(Number(cur)) && Number(cur) !== computerInputNumbers[index]){
            acc++;
        }
        return acc;
    },0);
    return bollCount;
}

export default function getStrikeBallCount(computerInputNumbers, userInputNumbers){
    const strikeCount = getStrikeCount(computerInputNumbers,userInputNumbers);
    const bollCount = getBollCount(computerInputNumbers,userInputNumbers);
    return [bollCount, strikeCount]; 
}