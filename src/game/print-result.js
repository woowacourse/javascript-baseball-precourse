import { DOMS } from "../constant/index.js";

export const printResultMessage = (message) => {
  DOMS.$result.innerHTML = message;
};
