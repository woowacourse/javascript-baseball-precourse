import { baseballGame } from "./baseballGame/controller.js";
import { $submit } from "./data/elements.js";

$submit.addEventListener("click", onClickSubmitButton);

function onClickSubmitButton(event) {
    event.preventDefault();
    baseballGame.start();
}
