import { Messages, HTML } from "../constants/constants.js";

function displayResult(resultString) {
    const resultDiv = document.getElementById("result");
    let state = true; // { true: playing, false :end }

    if(resultString === Messages.correct) {
        resultDiv.innerHTML = HTML.result;
        state = false;
    }
    else if(resultString === "초기화") {
        resultDiv.innerHTML = "";
    }
    else{
        resultDiv.innerHTML = resultString;
    }

    return state;
}

export default displayResult;
