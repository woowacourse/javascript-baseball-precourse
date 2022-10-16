"use strict";
const DIGIT = 3;

class Index {
  constructor() {
    this.input = document.querySelector("#user-input");
    this.submitBtn = document.querySelector("#submit");

    this.submitBtn.addEventListener("click", this.inputValidation.bind(this));
  }

  isDuplicate(number) {
    // 사용자 입력에서 중복된 숫자가 있는지?
    return [...new Set(number.split(""))].length !== DIGIT;
  }

  inputValidation(e) {
    // 숫자 유효성 검사
    e.preventDefault();
    const inputed = this.input.value;
    const regex = /[0-9]/g;

    if (!regex.test(inputed)) {
      alert("숫자만 입력해주세요!");
      this.input.value = "";
      return;
    } else if (this.isDuplicate(inputed)) {
      alert("중복된 숫자가 포함되어 있습니다!");
      this.input.value = "";
      return;
    }
  }
}

window.onload = () => {
  new Index();
};
