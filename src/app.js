import { baseballGame } from "./baseballGame/index.js";
import { $submit } from "./data/elements.js";

$submit.addEventListener("click", onClickSubmitButton);

function onClickSubmitButton(event) {
    event.preventDefault();
    baseballGame.start();
}
