export default function judgeNumber(computerInputNumbers, userInputNumbers) {
    let strikes = 0, balls = 0;
    console.log(computerInputNumbers, userInputNumbers);
    for(let i = 0; i < 3; i++) {
        if(computerInputNumbers[i] === Number(userInputNumbers.charAt(i))) {
            strikes++;
        }else if(computerInputNumbers.includes(Number(userInputNumbers.charAt(i)))) {
            balls++;
        }
    }

    return [strikes, balls];
}
