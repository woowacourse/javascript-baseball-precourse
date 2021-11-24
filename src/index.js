import { state } from './state/index.js';
import makeRandomNumber from './functions/make-random-number.js';

export default function BaseballGame() {
    state.computerInput = makeRandomNumber();
}

new BaseballGame();