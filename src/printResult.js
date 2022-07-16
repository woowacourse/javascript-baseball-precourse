export function printResult(score){
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

