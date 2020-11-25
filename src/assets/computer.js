import {checkValidNumber} from './common';

export default () => {
    let randomNum = '';
    while(checkValidNumber(randomNum).ok) {
        randomNum = String(Math.floor(Math.random()*999 + 1));
    }
    return randomNum;
}