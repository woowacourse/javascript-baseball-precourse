import { $ } from "../dom/dom.js";

export default function printGamePlayResult(gameResult){
    $('#result').innerText = `${gameResult}`;
}