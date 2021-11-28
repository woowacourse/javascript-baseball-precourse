import { FONT,DOM_ID,COUNT } from "../constant.js";

const createResultElement = () => {
    const $result = document.createElement('div');
    $result.id = DOM_ID.RESULT;

    return $result;
}

const createButtonByID = (ID,text) => {
    const $button = document.createElement('button');
    const textNodeButton = document.createTextNode(text);

    $button.id = ID;
    $button.appendChild(textNodeButton);
    return $button
}

export const resultElement = count => {
    const $result = createResultElement();
    const textNode = document.createTextNode(count);

    $result.appendChild(textNode);
    return $result;
}

export const successElement = () => {
    const $success = createResultElement();
    const textNode = document.createTextNode(COUNT.SUCCESS_TEXT);
    $success.appendChild(textNode);

    const $resetButton = createButtonByID(DOM_ID.RESET, COUNT.RESTART);
    $success.appendChild($resetButton);
    $success.style.fontWeight = FONT.WEIGHT_BOLD;

    return $success;
}


export const emptyElement = () =>{
    const $empty = createResultElement();

    return $empty;
}

