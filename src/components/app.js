import { FONT } from "../constant.js";

export const resultElement = count => {
    const $result = document.createElement('div');
    $result.id = "result";
    const textNode = document.createTextNode(count);
    $result.appendChild(textNode);
    
    return $result;
}

export const successElement = () => {
    const $success = document.createElement('div');
    const textNode = document.createTextNode("🎉정답을 맞추셨습니다!🎉");
    const $resetButton = document.createElement('button');
    const textNodeButton = document.createTextNode("게임 재시작");

    $success.appendChild(textNode);
    $resetButton.appendChild(textNodeButton);
    $success.appendChild($resetButton);
    $success.id = "result";
    $resetButton.id = "game-restart-button";
    $success.style.fontWeight = FONT.WEIGHT_BOLD;
    return $success;
}


export const emptyElement = () =>{
    const $empty = document.createElement('div');
    $empty.id = "result";

    return $empty;
}