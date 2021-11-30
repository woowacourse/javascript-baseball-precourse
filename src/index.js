import { NOTHING_ANSWER, CORRECT_ANSWER, Strike, Ball } from './result-const.js';
import { $form, $input, $result } from './html-const.js';
import { setAnswer } from './setAnswer.js';
import { checkInput } from './checkInput.js';
import { CountStrikeAndBall } from './CountStrikeAndBall.js';
import { endGame } from './endGame.js';
import { StrikeAndBall } from './ResultText.js';

export default function BaseballGame() {
    let computerInputNumbers = setAnswer();
    const play = (computerInputNumbers, userInputNumbers) => {
        let result_game_text = '';
        if (!checkInput(userInputNumbers)) return;
        else {
            console.log(userInputNumbers);
            let Strike_Ball = CountStrikeAndBall(computerInputNumbers, userInputNumbers);
            result_game_text = Hint(Strike_Ball);
        };
        console.log(result_game_text);
        return result_game_text;
    };
    const Hint = Strike_Ball => {
        if (Strike_Ball.Strike === 3) {
            $result.innerHTML = CORRECT_ANSWER;
            endGame();
            computerInputNumbers = setAnswer();
            return `${Strike_Ball.Strike}${Strike}`;
        }
        return $result.innerText = `${StrikeAndBall[Strike_Ball.Strike][Strike_Ball.Ball]}`;
    };

    $form.addEventListener('submit', (event) => {
        event.preventDefault(); // 제출 시 초기화 되는 것 방지
        const userInputNumbers = $input.value;
        play(computerInputNumbers, userInputNumbers);
    });

}
BaseballGame();