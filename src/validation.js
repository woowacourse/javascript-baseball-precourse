/* eslint-disable import/prefer-default-export */
import {
  ERROR_WRONG_DIGIT,
  ERROR_OUT_OF_RANGE,
  ERROR_NOT_UNIQUE,
} from "./config.js";

const isThreeDigits = (input) => input.length === 3;

const isNumber = (input) => {
  const inputArray = input.split("");
  return !inputArray.some((number) => number < "1" || number > "9");
};

const isUnique = (input) => input.length === new Set(input).size;

export const validateInput = (input) => {
  let result = true;
  const message = [];

  if (!isThreeDigits(input)) {
    result = false;
    message.push(ERROR_WRONG_DIGIT);
  }

  if (!isNumber(input)) {
    result = false;
    message.push(ERROR_OUT_OF_RANGE);
  }

  if (!isUnique(input)) {
    result = false;
    message.push(ERROR_NOT_UNIQUE);
  }

  return {
    result,
    message: message.join(" "),
  };
};
