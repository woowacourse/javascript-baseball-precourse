import { state } from "../state.js";

export default function makeResultDom(resultMessage){
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = resultMessage;
    if(state.strikeCount===3){
        
    }
}