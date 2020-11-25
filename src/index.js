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

const alertWrongCase = (text, ipt) => {
  alert(text);
  ipt.value = "";
  ipt.focus();
};

const testValue = (ipt) => {
  const val = ipt.value;
  const parsedVal = parseInt(val, 10);
  if (isNaN(parsedVal)) {
    alertWrongCase("숫자를 입력해주세요!", ipt);
  } else if (val.length !== 3) {
    alertWrongCase("세자리 숫자를 입력해주세요!", ipt);
  }
};

const handleSubmit = () => {
  const userInput = document.getElementById("user-input");
  testValue(userInput);
};

export default function BaseballGame() {
  this.play = function (computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  };

  const btn = document.getElementById("submit");
  if (btn) {
    btn.addEventListener("click", handleSubmit);
  }
}

new BaseballGame();
