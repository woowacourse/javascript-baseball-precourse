import { $ } from "../utils/selector.js";
const $result = $("#result");

export const renderResult = (resultHtml) => {
  $result.innerHTML = resultHtml;
};

export const renderInit = () => {
  $result.innerText = "";
};
