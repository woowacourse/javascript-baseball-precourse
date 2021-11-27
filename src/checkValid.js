export function checkNumber(uNumber) {
  let check = true;
  const stringuNumber = String(uNumber)
  const checkLegnthResult = checkLegnth(stringuNumber, check)
  const checkOverlapResult = checkOverlap(stringuNumber, check)
  const checkContainZero = checkZero(stringuNumber, check)
  if (checkLegnthResult && checkOverlapResult && checkContainZero) {
    return stringuNumber;
  }
}

function checkLegnth(uNumber, check) {
  if (uNumber.length !== 3) {
    alert ("3개 수를 입력해주세요")
    check = false;
  }
  
  return check;
}

function checkOverlap(uNumber, check) {
  const _uNumberSet = new Set(uNumber.split(''))
  if (uNumber.length !== _uNumberSet.size) {
    alert ("중복없이 입력해주세요")
    check = false;
  }

  return check;
}

function checkZero(uNumber, check) {
  for (let num of uNumber) {
    if (num === "0") {
      alert ("0은 포함할 수 없습니다")
      check = false;
      break;
    }
  }

  return check;
}