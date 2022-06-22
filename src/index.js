export default function BaseballGame() {
    this.play = function (computerInputNumbers, userInputNumbers) {;
        let score = {
            'strike': 0, 
            'ball': 0,
            'nothing': 0
        };

        for (let i = 0; i < 3; i++){
            if (String(computerInputNumbers)[i] == String(userInputNumbers)[i]){
                score['strike']++;
            } else{
                score = ball(String(computerInputNumbers)[i], String(userInputNumbers), i, score);
            }
        }
        score['nothing'] = (score['strike'] == 0 && score['ball'] == 0) ? 1 : 0;
        return score;
    }
}
    
    
function ball(computerInputNumber, userInputNumbers, i, score){
    if (computerInputNumber == userInputNumbers[i] && i == j){
    }
    for (let j = 0; j < 3; j++){
        if (computerInputNumber == userInputNumbers[i] && i != j){
            score['ball']++;
            return score;
        }
    }
    return score;
}



let game = new BaseballGame();
// console.log(game.play(123, 456));
// console.log(game.play(123, 345));
// console.log(game.play(123, 432));
// console.log(game.play(123, 312));
// console.log(game.play(123, 145));
console.log(game.play(123, 134));
// console.log(game.play(123, 132));
// console.log(game.play(123, 124));

