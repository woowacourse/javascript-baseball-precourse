import { gameResults } from './constants.js';

export default class BaseballGame {
    constructor() {
        this.answer = this.generateThreeDigitsNumber();
    }
    
    generateRandomNumber() {
        return MissionUtils.Random.pickNumberInRange(1, 9);
    }
    
    isUnique(num) {
        const numArray = num.split('');
        const duplicatedNumbers = numArray
            .filter((num, index, self) => self.indexOf(num) !== index || num === '0');
        return !duplicatedNumbers.length;
    }
    
    generateThreeDigitsNumber() {
        const firstNumber = this.generateRandomNumber();

        let secondNumber = this.generateRandomNumber();
        while(secondNumber === firstNumber) secondNumber = this.generateRandomNumber();

        let thirdNumber = this.generateRandomNumber();
        while(thirdNumber === secondNumber || thirdNumber === firstNumber) thirdNumber = this.generateRandomNumber();

        return `${firstNumber}${secondNumber}${thirdNumber}`;
    }
    
    isCorrectInput(input) {
        return input.length === 3 && Number(input) && this.isUnique(input);
    }
    
    getCountStrikeAndBall(userNumbers) {
        const computerNumbers = this.answer.split('');
        const strike = userNumbers.filter((number, index) => number === computerNumbers[index]);
        const ball = userNumbers
            .filter((number, index) => (number !== computerNumbers[index]) && computerNumbers.includes(number));
        return [strike.length, ball.length];
    }
    
    getPlayResult(numStrike, numBall) {
        if(numStrike && numBall) return `${numBall}${gameResults.BALL} ${numStrike}${gameResults.STRIKE}`;
        else if(numStrike) return `${numStrike}${gameResults.STRIKE}`;
        else if(numBall) return `${numBall}${gameResults.BALL}`;
        else return gameResults.NOTHING;
    }
    
    play(computerInputNumbers, userInputNumbers) {
        if(computerInputNumbers === userInputNumbers) return gameResults.CORRECT;
    
        const userNumArray = userInputNumbers.split('');
        const [strike, ball] = this.getCountStrikeAndBall(userNumArray);
        return this.getPlayResult(strike, ball);
    }
};