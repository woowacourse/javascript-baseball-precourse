export default function displayResult(resultString) {
    const resultDiv = document.getElementById("result");
    let state = true; // { true: playing, false :end }

    if(resultString === "🎉 정답을 맞추셨습니다! 🎉") {
        resultDiv.innerHTML = "<h3>" + resultString + "</h3>" +
            "게임을 새로 시작하시겠습니까? <button id=\"game-restart-button\">게임 재시작</button>";
        state = false;
    }
    else{
        resultDiv.innerHTML = resultString;
    }

    return state;
}

