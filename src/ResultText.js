import { NOTHING_ANSWER, CORRECT_ANSWER, Strike, Ball } from './result-const.js';
export const StrikeAndBall = [
    [`${NOTHING_ANSWER}`, `1${Ball}`, `2${Ball}`, `3${Ball}`],
    [`1${Strike}`, `1${Strike} 1${Ball}`, `1${Strike} 2${Ball}`, ''],
    [`2${Strike}`, `2${Strike} 1${Ball}`, '', ''],
    [`${CORRECT_ANSWER}`, '', '', '']
];
