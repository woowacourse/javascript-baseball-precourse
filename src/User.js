export default class User {
  constructor() {
    this.input = document.getElementById("user-input");
    this.button = document.getElementById("submit");
  }

  getInputValue() {
    return this.input.value;
  }

  setInputValue(value) {
    this.input.value = value;
  }
}
