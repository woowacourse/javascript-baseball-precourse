import {
  MESSAGE_CORRECT_ANSWER,
  MESSAGE_RESTART_GAME,
} from "../config/config.js";

export const DOM = {
  form: "form",
  userInput: "#user-input",
  submitButton: "#submit",
  resultDiv: "#result",
  gameRestartButtonId: "game-restart-button",
};

export const correctResultTemplate = `
<h4>${MESSAGE_CORRECT_ANSWER}</h4>
${MESSAGE_RESTART_GAME}
<button id=${DOM.gameRestartButtonId}>재시작</button>
`

// querySelector wrapper
export function $(selector) {
  return document.querySelector(selector);
}

// addEventListener wrapper
export function $on(target, eventType, callback, capture) {
  target.addEventListener(eventType, callback, !!capture);
}
