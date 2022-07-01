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
                result += `${score[key]['count']}${score[key]['string']} `;
            }
        });
    
    }
    return result;
}

function make_computer_num(){
    let tmp_num = MissionUtils.Random.pickNumberInRange(1, 9);
    let set = new Set([tmp_num]);

    while(set.size < 3){
        tmp_num = MissionUtils.Random.pickNumberInRange(1, 9);
        set.add(tmp_num);
    }
    const computer_nums = [... set]
    return computer_nums.join('');
}

function input_user_num(){
    let user_input = document.getElementById('user-input').value;
    let set = new Set([... user_input]);
    let user_nums = [... set];

    if ((user_nums.length == 3 && user_nums.filter(e => '0' == e).length < 1)){
        return user_nums.join('');
    }
    else{
        alert("입력을 다시 해주세요.");
        location.reload();
    }
}

function press_button(){
    const game = new BaseballGame();
    
    const computer_num = make_computer_num();
    const user_num = input_user_num();

    document.getElementById('result').innerHTML = game.play('123', user_num);
}

function restart_button(){
    location.reload();
}

window.onload = ()=>{
    document.getElementById('submit').addEventListener("click", press_button);
    document.getElementById('game-restart-button').addEventListener("click", restart_button);
}

