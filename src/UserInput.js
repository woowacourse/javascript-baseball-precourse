export default class UserInput {
    static get USER_INPUT_ELEM() {
        return document.querySelector('#user-input');
    }

    static clearUserInput() {
        this.USER_INPUT_ELEM.value = '';
    }

    static getUserInputNumbers() {
        const value = this.USER_INPUT_ELEM.value;
        return value.split('').map((char) => Number(char));
    }
}