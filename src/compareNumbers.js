import { printResult } from './printResult.js';

export function compareNumbers(computerInputNumbers, userInputNumbers){
    const computer = String(computerInputNumbers);
    const user = String(userInputNumbers);

    let score = {
        ball: {
            string: '볼', 
            count: 0
        },
        strike: {
            string: '스트라이크', 
            count: 0
        },
        nothing: {
            string: '낫싱', 
            count: ' '
        }
    };

    for (let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            if (computer[i] == user[j]){
                if (i == j){
                    score['strike']['count']++;
                }
                else{
                    score['ball']['count']++;
                }
            }
        }
    }

    score['nothing']['string'] = (score['strike']['count'] == 0 && score['ball']['count'] == 0) ? '낫싱' : '';
    return printResult(score);
}
