import { pickRandomNumbers } from './utils/number-picker.js';

export default class BaseballGame {
    constructor() {
        this.computerInputNumbers = pickRandomNumbers(3);
        console.log(this.computerInputNumbers);
    }
}

new BaseballGame();