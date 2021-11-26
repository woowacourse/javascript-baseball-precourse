import { $ } from "../dom/dom.js";
export default function printGameEndResult(){
    $('#result').innerHTML = `
    <div>
        <strong>🎉정답을 맞추셨습니다!🎉</strong>
        <p>
            게임을 새로 시작하시겠습니까?
            <button type="button" id="game-restart-button">
                재시작
            </button>
        </p>
    </div>
    `
}