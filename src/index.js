import {BASEBALL} from "./constants.js"

export default function BaseballGame() {
  let computerInputNumbers = '';

  const getComputerNum = () => {
    let numList = new Array();

    while (numList.length < 3) {
      const num = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!numList.includes(num)) {
        numList.push(num);
        computerInputNumbers += String(num);
      }
    }

    return computerInputNumbers
  };

  //check 1- 숫자인지 확인
  const checktype = num => {
    if (isNaN(Number(num))) {
      alert(BASEBALL.ALERT_ONLY_NUM);
      return true;
    }
    return false;
  }

  //check 2- 3자리인지 확인
  const checkLen = num => {
    if (num.length != 3) {
      alert(BASEBALL.ALERT_THREE_NUM)
      return true;
    }
    return false;
  }

  //check3 - 숫자 범위 확인 (0 포함 확인)
  const checkOnetoNine = num => {
    if (num.includes(0)) {
      alert(BASEBALL.ALERT_ONE_TO_NINE);
      return true;
    }
    return false;
  }

  //check4 - 숫자 중복 여부 확인
  const checkDuplication = num => {
    if (num[0] == num[1] || num[1] == num[2] || num[0] == num[2]){
      alert(BASEBALL.ALERT_DUPLICATION);
      return true;
    }
    return false;
  }

  // check All
  const checkNum = num => {
    if (checktype(num) || checkLen(num) || checkOnetoNine(num) || checkDuplication(num)){
      console.log("조건 불만족");
      return false;
    }
    console.log("조건 만족");
    return true;
  }


  // 사용자 수 입력받기
  const getUserNum = () => {
    const userInputNumbers = document.getElementById("user-input").value;

    console.log(userInputNumbers);
    if (checkNum(userInputNumbers)){
      console.log("반환");
      return userInputNumbers;
    }
    document.getElementById("user-input").autofocus;
  }

  const submitBtn = document.getElementById("submit");
  submitBtn.addEventListener("click", getUserNum);

  getComputerNum();
}

new BaseballGame();
