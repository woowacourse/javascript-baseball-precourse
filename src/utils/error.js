import { MESSAGE } from "../constants/message.js";

const error = {
  message: "",
};

export const showError = () => {
  alert(error.message);
};

export const setErrorMessage = (messageType) => {
  error.message = MESSAGE.USER_INPUT[messageType];
};
