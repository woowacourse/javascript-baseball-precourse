const strikeOrBall = (output) =>{
    let resultText = "";
    if(output[1] > 0){
        resultText += `${output[1]}스트라이크 `    
    }
    if(output[2] > 0){
        resultText += `${output[2]}볼`
    }
    result.innerHTML = resultText;
}

const renderFinish = (game)=> {
    result.innerHTML = "<b>🎉 정답을 맞추셨습니다! 🎉</b><br>"
    const restart = document.createElement("div");
    restart.innerHTML = "게임을 새로 시작하시겠습니까?"
    const button = document.createElement("button");
    button.innerHTML = "게임 재시작"
    restart.appendChild(button);
    result.after(restart);

    button.addEventListener('click', event=>{
        // 게임 초기화
        game.restart();
        result.innerHTML = "";
        restart.remove();
    })
}

// 결과값을 보여주는 함수
const ParseResult = (isFinished, output, game) => {
    const result = document.getElementById('result');
    if(isFinished){
        renderFinish(game);
    } else {
        // 낫씽인지 스트라이크 혹은 볼인지 확인
        if(output[0]){
            result.innerHTML = "낫씽";
        } else {
            strikeOrBall(output);
        }
    }
};

export default ParseResult;