function ball(computerInputNumber, userInputNumbers, i, score){
    for (let j = 0; j < 3; j++){
        if (i != j && computerInputNumber == userInputNumbers[j]){
            score['ball']['count']++;
            return score;
        }
    }
    return score;
}

export default ball;