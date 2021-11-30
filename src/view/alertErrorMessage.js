import {
  THREE_DIGIT_ERR,
  ONE_TO_NINE_ERR,
  DUPLICATE_ERR,
  THREE_DIGIT_ERR_MSG,
  ONE_TO_NINE_ERR_MSG,
  DUPLICATE_ERR_MSG,
} from '../constant/constant.js';

export default function alertErrorMessage(error) {
  if (error === THREE_DIGIT_ERR) {
    alert(THREE_DIGIT_ERR_MSG);
    return false;
  }
  if (error === ONE_TO_NINE_ERR) {
    alert(ONE_TO_NINE_ERR_MSG);
    return false;
  }
  if (error === DUPLICATE_ERR) {
    alert(DUPLICATE_ERR_MSG);
    return false;
  }
  return true;
}
