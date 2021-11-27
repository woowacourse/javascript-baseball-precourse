import { FONT,DOM_ID,COUNT } from "../constant.js";

export const resultElement = count => {
    const $result = document.createElement('div');
    const textNode = document.createTextNode(count);

    $result.id = DOM_ID.RESULT;
    $result.appendChild(textNode);
    return $result;
}

export const successElement = () => {
    const $success = document.createElement('div');
    const textNode = document.createTextNode(COUNT.SUCCESS_TEXT);
    const $resetButton = document.createElement('button');
    const textNodeButton = document.createTextNode(COUNT.RESTART);

    $success.appendChild(textNode);
    $resetButton.appendChild(textNodeButton);
    $success.appendChild($resetButton);
    $success.id = DOM_ID.RESULT;
    $resetButton.id = DOM_ID.RESET;
    $success.style.fontWeight = FONT.WEIGHT_BOLD;
    return $success;
}


export const emptyElement = () =>{
    const $empty = document.createElement('div');
    $empty.id = DOM_ID.RESULT;

    return $empty;
}