import { COMPUTER_NUMBERS, ERR_MESSAGE } from "./contact.js";

export function pickRandomNumbers() {
    const randomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(
        COMPUTER_NUMBERS.MIN_NUMBER,
        COMPUTER_NUMBERS.MAX_NUMBER,
        COMPUTER_NUMBERS.LENGTH
    );
    return randomNumbers.join("");
}

export function isValidInputNumbers(userInputNumbers) {
    if (isNaN(userInputNumbers)) {
        return alert(ERR_MESSAGE.JUST_NUMBERS);
    }
    if (userInputNumbers.length !== 3) {
        return alert(ERR_MESSAGE.NUMBERS_LENGTH);
    }
    if (new Set(userInputNumbers).size !== 3) {
        return alert(ERR_MESSAGE.NOT_DUPLICATED);
    }
    return true;
}
