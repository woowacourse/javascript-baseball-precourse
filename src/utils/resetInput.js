import { $ } from "./selector.js";

export const resetInput = () => {
  const $input = $("#user-input");
  $input.value = "";
};
