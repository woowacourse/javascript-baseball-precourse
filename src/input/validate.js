function printAlert(state) {
  switch (state) {
    case "NaN":
      alert("숫자만 입력하시오.");
      break;
    case "length":
      alert("3자리의 숫자만 입력하시오.");
      break;
    case "range":
      alert("0~9까지의 숫자만 입력하시오.");
      break;
    case "duplicate":
      alert("중복되지 않게 입력하시오.");
      break;
    case "range":
      alert("숫자가 범위에서 벗어났습니다.");

    default:
      break;
  }

  return false;
}

function checkEachRange(el) {
  let number = Number(el);
  if (1 <= number && number <= 9) {
    return true;
  }
  return false;
}

function checkRange(userInput) {
  const userInputArray = String(userInput).split("");
  if (!userInputArray.every(checkEachRange)) {
    return false;
  }
  return true;
}

function checkType(userInputs) {
  if (isNaN(Number(userInputs))) {
    return false;
  }
  return true;
}

function checkLength(userInputs) {
  if (userInputs.length === 3) {
    return true;
  }
  return false;
}

function checkDuplicate(userInputs) {
  if ([...new Set(userInputs)].length === 3) {
    return true;
  }
  return false;
}

export default function validate(userInputs) {
  if (!checkType(userInputs)) {
    return printAlert("NaN");
  }
  if (!checkLength(userInputs)) {
    return printAlert("length");
  }
  if (!checkDuplicate(userInputs)) {
    return printAlert("duplicate");
  }
  if (!checkRange(userInputs)) {
    return printAlert("range");
  }
  return true;
}
