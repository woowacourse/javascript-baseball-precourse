import { $ } from "../util/selector.js";

export const renderFailMessage = (message) => {
  const $result = $("#result");
  $result.innerText = message;
};
