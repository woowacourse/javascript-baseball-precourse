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

// 결과값(문자열)을 DOM element로 바꿔주는 함수
const convertResult = (message, game) => {
    const result = document.getElementById('result');
    if(message === "성공"){
        renderFinish(game);
    } else {
        result.innerHTML = message;
    }
};

export default convertResult;
