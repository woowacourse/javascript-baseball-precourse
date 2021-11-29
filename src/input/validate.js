function printAlert(state) {
  switch (state) {
    case "NaN":
      alert("잘못 된 입력입니다! 숫자만 입력 가능합니다! 예)139");
      break;
    case "length":
      alert("잘못 된 입력입니다! 숫자는 반드시 3개를 입력해야합니다! 예)139");
      break;
    case "range":
      alert("잘못 된 입력입니다! 중복된 숫자는 입력할 수 없습니다! 예)139");
      break;
    case "duplicate":
      alert("잘못 된 입력입니다! 중복된 숫자는 입력할 수 없습니다! 예)139");
      break;
    default:
      break;
  }

  return false;
}

function checkType(notCheckedInputs) {
  [...notCheckedInputs].forEach((num) => {
    if (typeof num === "number") {
      return true;
    }
  });
  return false;
}

function checkLength(notCheckedInputs) {
  if (notCheckedInputs.length === 3) {
    return true;
  }
  return false;
}

function checkDuplicate(notCheckedInputs) {
  if ([...new Set(notCheckedInputs)].length === 3) {
    return true;
  }
  return false;
}

export default function validate(userInputs) {
  console.log("검증 시작", userInputs);

  const notCheckedInputs = Number(userInputs);
  console.log(notCheckedInputs);

  if (!checkType(notCheckedInputs)) {
    return printAlert("NaN");
  }
  if (!checkLength(notCheckedInputs)) {
    return printAlert("length");
  }
  if (!checkDuplicate(notCheckedInputs)) {
    return printAlert("duplicate");
  }

  return true;
}
