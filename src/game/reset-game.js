import { DOMS } from "../constant/index.js";

export const resetUserInput = () => {
  DOMS.$userInput.value = "";
  DOMS.$userInput.focus();
};

export const resetResult = () => {
  DOMS.$result.innerHTML = "";
};
