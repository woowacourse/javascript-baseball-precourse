// * 1부터 9사이의 임의의 수 생성
const generateRandomNum = () => {
  let ranNum = Math.floor(Math.random() * 10);

  while (ranNum === 0) {
    ranNum = Math.floor(Math.random() * 10);
  }

  return ranNum;
};

// * 서로 다른 수 3개를 뽑아 3자리 수 만들기.
const generateThreeDigit = () => {
  let numArr = [];

  while (numArr.length < 3) {
    let pickedNum = generateRandomNum();
    if (numArr.includes(pickedNum)) {
      continue;
    } else {
      numArr.push(pickedNum);
    }
  }

  const parsedNum = parseInt(numArr.join(""), 10);

  return parsedNum;
};

// * 잘못된 케이스 alert & 내용을비우고 focuse해주기
const alertWrongCase = (text, ipt) => {
  alert(text);
  ipt.value = "";
  ipt.focus();
};

// * 들어온 값 테스트
const testValue = (ipt) => {
  const val = ipt.value;
  const parsedVal = parseInt(val, 10);
  const splitedValArr = val.split("");
  const checkDuplicate = new Set(splitedValArr).size;

  if (isNaN(parsedVal)) {
    alertWrongCase("숫자를 입력해주세요!", ipt);
  } else if (val.length !== 3) {
    alertWrongCase("세자리 숫자를 입력해주세요!", ipt);
  } else if (val.indexOf(0) !== -1) {
    alertWrongCase("0은 예측숫자에 포함할 수 없습니다!", ipt);
  } else if (checkDuplicate !== 3) {
    alertWrongCase("중복없는 3자리수를 입력해주세요!", ipt);
  } else {
    return parsedVal;
  }
};

export default function BaseballGame() {
  this.play = function (computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  };

  const btn = document.getElementById("submit");
  const userInput = document.getElementById("user-input");

  // * 확인 버튼을 눌렀을 때
  const handleSubmit = () => {
    const userNum = testValue(userInput);
  };

  if (btn) {
    btn.addEventListener("click", handleSubmit);
  }
}

new BaseballGame();
