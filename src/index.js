export default function BaseballGame() {
    this.play = function (computerInputNumbers, userInputNumbers) {;
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
            const computerInputNumber = String(computerInputNumbers)[i];

            if (computerInputNumber == String(userInputNumbers)[i]){
                score['strike']['count']++;
            } 
            else{
                score = ball(computerInputNumber, String(userInputNumbers), i, score);
            }
        }
        score['nothing']['string'] = (score['strike']['count'] == 0 && score['ball']['count'] == 0) ? '낫싱' : '';
        return print_result(score);
    }
}
    
    
function ball(computerInputNumber, userInputNumbers, i, score){
    for (let j = 0; j < 3; j++){
        if (i != j && computerInputNumber == userInputNumbers[j]){
            score['ball']['count']++;
            return score;
        }
    }
    return score;
}

function print_result(score){
    let result = '';
    if (score['strike']['count'] == 3) {
        result = '🎉<b>정답을 맞추셨습니다.</b>🎉 <br/><br/> 게임을 새로 시작하시겠습니까?' 
        
        let button = document.getElementById('game-restart-button');
        button.style.display = 'block';
    }
    else{
        Object.keys(score).map((key) => {
            if(score[key]['count']){
                result += `${score[key]['string']}${score[key]['count']} `;
            }
        });
    
    }
    return result;
}


const game = new BaseballGame();
document.getElementById('result').innerHTML = game.play(123, 123);

// game.play(123, 456);
// game.play(123, 345);
// game.play(123, 432);
// game.play(123, 312);
// game.play(123, 145);
// game.play(123, 134);
// game.play(123, 132);
// game.play(123, 124);

