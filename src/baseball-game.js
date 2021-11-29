export default class BaseballGame {
    answer = this.generateThreeDigitsNumber();
    
    generateRandomNumber() {
        return MissionUtils.Random.pickNumberInRange(123, 987);
    }
    
    isCorrectAnswerNumber(num) {
        const numArray = num.toString().split('');
        const duplicatedNumbers = numArray
            .filter((num, index, self) => self.indexOf(num) !== index || num === '0');
        return !duplicatedNumbers.length;
    }
    
    generateThreeDigitsNumber() {
        let result = this.generateRandomNumber();
        while(!this.isCorrectAnswerNumber(result)){
            result = this.generateRandomNumber();
        }
        return result.toString();
    }
    
    isCorrectInput(input) {
        return input.length === 3 && Number(input) && this.isCorrectAnswerNumber(Number(input));
    }
    
    getCountStrikeAndBall(computerNumbers, userNumbers) {
        const strike = userNumbers.filter((number, index) => number === computerNumbers[index]);
        const ball = userNumbers
            .filter((number, index) => (number !== computerNumbers[index]) && computerNumbers.includes(number));
        return [strike.length, ball.length];
    }
    
    getPlayResult(numStrike, numBall) {
        if(numStrike && numBall) return `${numBall}볼 ${numStrike}스트라이크`;
        else if(numStrike) return `${numStrike}스트라이크`;
        else if(numBall) return `${numBall}볼`;
        else return "낫싱";
    }
    
    play(computerInputNumbers, userInputNumbers) {
        if(computerInputNumbers === userInputNumbers) return "정답";
    
        const computerNumArray = computerInputNumbers.split('');
        const userNumArray = userInputNumbers.split('');
    
        const [strike, ball] = this.getCountStrikeAndBall(computerNumArray, userNumArray);
        return this.getPlayResult(strike, ball);
    }
};