"use strict";
const DIGIT = 3;

class Index {
  constructor() {
    this.input = document.querySelector("#user-input");
    this.submitBtn = document.querySelector("#submit");
    this.restartBtn = document
      .querySelector("#game-restart-button")
      .classList.add("dn"); // 게임 시작 시 재시작 버튼 없어지게 -> 게임이 끝나면 나타나야함

    // 목표값 설정
    this.targetNumber = this.setTargetNumber();
    this.submitBtn.addEventListener("click", (e) => {
      e.preventDefault();

      if (!this.inputValidation()) {
        return;
      }
    });
  }

  isDuplicate(number) {
    // 사용자 입력에서 중복된 숫자가 있는지?
    return [...new Set(number.split(""))].length !== DIGIT;
  }

  inputValidation(e) {
    // 숫자 유효성 검사
    const inputed = this.input.value;
    const regex = /[0-9]/g;

    if (!regex.test(inputed)) {
      alert("숫자만 입력해주세요!");
      this.input.value = "";
      return false;
    } else if (this.isDuplicate(inputed)) {
      alert("중복된 숫자가 포함되어 있습니다!");
      this.input.value = "";
      return false;
    }
    return true;
  }

  setTargetNumber() {
    let numString = "";
    let randomIndexArray = [];

    while (numString.length < DIGIT) {
      let rnd = MissionUtils.Random.pickNumberInList([
        1, 2, 3, 4, 5, 6, 7, 8, 9,
      ]);
      if (randomIndexArray.indexOf(rnd) === -1) {
        randomIndexArray.push(rnd);
        numString += rnd;
      }
    }

    return numString;
  }
}

window.onload = () => {
  new Index();
};
