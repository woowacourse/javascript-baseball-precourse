function isThreeLength(word) {
    return word.trim().length === 3;
}

function isUniqueWord(word) {
    return [...new Set(word.split(""))].length === 3;
}

function isNumberRange(word) {
    return /^[1-9]*$/g.test(word);
}

export default class UserInputModel {
    constructor(userInputNumber) {
        this.userValue = String(userInputNumber);
        this.isValidCheck = false;
    }

    get checkInputValid() {
        if (!isThreeLength(this.userValue)) return "오류1";
        else if (!isUniqueWord(this.userValue)) return "오류2";
        else if (!isNumberRange(this.userValue)) return "오류2";

        return "성공";
    }

    get toNumberArray() {
        const wordLists = this.userValue.split("");
        const resultArray = [];

        wordLists.forEach((word) => resultArray.push(Number(word)));
        return resultArray;
    }
}
