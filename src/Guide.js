export default class Guide {
    static get RESULT_ELEM() {
        return document.querySelector('#result');
    }

    static get RESTART_ELEM() {
        return document.querySelector('#restart');
    }

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