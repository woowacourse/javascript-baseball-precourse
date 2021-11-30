const $button =document.querySelector("button");
const $resultItem=document.getElementById("result");
const $input = document.getElementById("user-input");
const INPUT_ERROR_MESSAGE ='1~9까지 겹치지 않는 숫자 3개를 입력해야 합니다';

const GAME_WIN_MESSAGE =`<p><strong>🎉 정답을 맞추셨습니다! 🎉</strong></p>
<p>게임을 새로 시작하시겠습니까? <button id="game-restart-button">게임 재시작</button></p>
`;

export{
    $button,
    $resultItem,
    $input,
    INPUT_ERROR_MESSAGE,
    GAME_WIN_MESSAGE
}