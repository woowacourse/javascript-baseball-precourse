//게임 결과 출력
export default function printResult(userInputArray, answerArray, play) {
    const $result = document.querySelector('#result');

    let gameResult = play(userInputArray, answerArray);

    if (gameResult === '정답') {
        console.log(gameResult);
        $result.innerHTML = `<div>
                            <strong>🎉 정답을 맞추셨습니다 🎉</strong><br>
                            <p>게임을 새로 시작하시겠습니까?</p>
                            <button id="game-restart-button">게임 재시작</button>
                          </div>`;
    }
    else {
        $result.innerHTML = `<p>${gameResult}</p>`;
        console.log(gameResult);
    }
}