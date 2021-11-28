export default class Guide {
  static RESULT_ELEM = document.querySelector('#result');

  static RESTART_ELEM = document.querySelector('#restart');

  static clearResult() {
    this.RESULT_ELEM.innerHTML = '';
  }

  static printResult(contents) {
    this.RESULT_ELEM.innerHTML = contents;
  }

  static hideRestart() {
    this.RESTART_ELEM.hidden = true;
  }

  static showRestart() {
    this.RESTART_ELEM.hidden = false;
  }
}
