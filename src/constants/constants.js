export const Messages = {
    nothing: "낫싱",
    ball: "볼",
    strike: "스트라이크",
    correct: "🎉 정답을 맞추셨습니다! 🎉"
};

export const HTML = {
    result: "<h3>" + Messages.correct + "</h3>" + "게임을 새로 시작하시겠습니까? <button id=\"game-restart-button\">게임 재시작</button>"
};

export default {Messages, HTML};
