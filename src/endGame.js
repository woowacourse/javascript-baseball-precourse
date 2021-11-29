import { $input, $result } from './html-const.js';
export const endGame = () => {
    $result.innerHTML += `<p id="endGame_txt">게임을 새로 시작하시겠습니까?<button id="game-restart-button">재시작</button></p>`;
    let Game_Restart_Button = document.querySelector('#game-restart-button');
    let Result_Txt = document.querySelector('#result_txt');
    let EndGame_Txt = document.querySelector('#endGame_txt');
    Game_Restart_Button.onclick = () => {
        $input.value = '';
        $result.removeChild(Result_Txt);
        $result.removeChild(EndGame_Txt);
    };
};