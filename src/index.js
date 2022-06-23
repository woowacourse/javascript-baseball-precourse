export default function BaseballGame() {
    this.play = function (computerInputNumbers, userInputNumbers) {;
        let score = {
            "ball": ["볼", 0],
            "strike": ["스트라이크", 0],
            "nothing": ["낫싱", " "]
        };

        for (let i = 0; i < 3; i++){
            if (String(computerInputNumbers)[i] == String(userInputNumbers)[i]){
                score['strike'][1]++;
            } else{
                score = ball(String(computerInputNumbers)[i], String(userInputNumbers), i, score);
            }
        }
        score['nothing'][0] = (score['strike'][1] == 0 && score['ball'][1] == 0) ? "낫싱" : "";
        return print_result(score);
    }
}
    
    
function ball(computerInputNumber, userInputNumbers, i, score){
    for (let j = 0; j < 3; j++){
        if (i != j && computerInputNumber == userInputNumbers[j]){
            score['ball'][1]++;
            return score;
        }
    }
    return score;
}

function print_result(score){
    let result = ''
    for (let key in score){
        if (score[key][1]){
            result += score[key][0] + String(score[key][1]) + ' ';
        }
    }
    return result;
}

let game = new BaseballGame();
document.getElementById("result").innerHTML = game.play(123, 312);

// game.play(123, 456);
// game.play(123, 345);
// game.play(123, 432);
// game.play(123, 312);
// game.play(123, 145);
// game.play(123, 134);
// game.play(123, 132);
// game.play(123, 124);

