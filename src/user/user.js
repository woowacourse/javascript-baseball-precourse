import { USER_INPUT_ERROR_MSG, ANSWER_LENGTH } from '../asset/constant.js';

// 입력값 체크 함수들
const checkInputFunctions = [
    // empty 체크
    (val) => {
        if (val === '') {
            alert(USER_INPUT_ERROR_MSG.require);
            return false;
        }

        return true;
    },
    // 숫자 체크
    (val) => {
        if (!Number(val)) {
            alert(USER_INPUT_ERROR_MSG.number);
            return false;
        }

        return true;
    },
    // 길이 체크
    (val) => {
        if (val.length !== ANSWER_LENGTH) {
            alert(USER_INPUT_ERROR_MSG.length);
            return false;
        }

        return true;
    },
    // 1 ~ 9 범위 체크 (0이 없어야함)
    (val) => {
        if (val.includes(0)) {
            alert(USER_INPUT_ERROR_MSG.range);
            return false;
        }

        return true;
    },
    // 중복 체크
    (val) => {
        if (new Set(val).size < ANSWER_LENGTH) {
            alert(USER_INPUT_ERROR_MSG.overlap);
            return false;
        }

        return true;
    },
];

export default class User {
    constructor() {
        this.$input = document.getElementById('user-input');
    }

    /**
     * @param {string} 유저 입력값
     * @returns {bool} 유저 입력값이 올바른지 여부
     */
    checkInputValid(val) {
        return checkInputFunctions.every((checkInputFunction) =>
            checkInputFunction(val)
        );
    }

    getUserInputValue() {
        return this.$input.value;
    }

    setUserInputValue(val) {
        this.$input.value = val;
    }
}
