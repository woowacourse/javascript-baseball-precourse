import { NOTHING_ANSWER, CORRECT_ANSWER } from './result-const.js';
import { $form, $input, $result } from './html-const.js';
import { setAnswer } from './setAnswer.js';
import { checkInput } from './checkInput.js';

export default function BaseballGame() {
    let computerInputNumbers = setAnswer();
    let StrikeCnt = 0;
    let BallCnt = 0;

    const play = (computerInputNumbers, userInputNumbers) => {
        let result_game_text = '';
        if (!checkInput(userInputNumbers)) return;
        else {
            console.log(userInputNumbers);
            let Strike_Ball = CountStrikeAndBall(computerInputNumbers, userInputNumbers);
            Hint(Strike_Ball);
            result_game_text = Hint(Strike_Ball);
        };
        return result_game_text;
    };

    const CountStrikeAndBall = (computerInputNumbers, userInputNumbers) => {
        StrikeCnt = 0;
        BallCnt = 0;
        for (let i = 0; i < userInputNumbers.length; i++) {
            if (userInputNumbers[i] == computerInputNumbers[i]) StrikeCnt++;
            else if (userInputNumbers[i] == computerInputNumbers[(i + 1) % 3] || userInputNumbers[i] == computerInputNumbers[(i + 2) % 3]) BallCnt++;
        };
        let Strike = StrikeCnt;
        let Ball = BallCnt;
        return {
            Strike: Strike,
            Ball: Ball
        };
    };

    const Hint = Strike_Ball => {
        if (Strike_Ball.Strike === 3) {
            $result.innerHTML = CORRECT_ANSWER;
            endGame();
        }
        else if (Strike_Ball.Strike === 0 && Strike_Ball.Ball === 0) {
            $result.innerText = NOTHING_ANSWER;
        }
        else {
            if (Strike_Ball.Strike === 0) $result.innerText = `${Strike_Ball.Ball}볼`;
            else if (Strike_Ball.Ball === 0) $result.innerText = `${Strike_Ball.Strike}스트라이크`;
            else $result.innerText = `${Strike_Ball.Ball}볼 ${Strike_Ball.Strike}스트라이크`;
        };
        return $result.innerText;
    };

    const endGame = () => {
        $result.innerHTML += `<p id="endGame_txt">게임을 새로 시작하시겠습니까?<button id="game-restart-button">재시작</button></p>`;
        let Game_Restart_Button = document.querySelector('#game-restart-button');
        let Result_Txt = document.querySelector('#result_txt');
        let EndGame_Txt = document.querySelector('#endGame_txt');
        Game_Restart_Button.onclick = () => {
            $input.value = '';
            $result.removeChild(Result_Txt);
            $result.removeChild(EndGame_Txt);
            setAnswer();
        };
    };

    $form.addEventListener('submit', (event) => {
        event.preventDefault(); // 제출 시 초기화 되는 것 방지
        const userInputNumbers = $input.value;
        play(computerInputNumbers, userInputNumbers);
    });


}
BaseballGame();