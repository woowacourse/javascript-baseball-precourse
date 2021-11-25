export const RESULT_CODE = {
    ERROR_USERINPUT_LENGTH: Symbol("유저 입력 값이 세글자가 아님"),
    ERROR_USERINPUT_UNIQUE_WORD: Symbol("유저 입력 값에 중복 단어가 있음"),
    ERROR_USERINPUT_NUMBER_RANGE: Symbol("유저 입력 값은 1~9사이의 숫자만 입력할 수 있음"),

    DONE_USERINPUT_VALID: Symbol("유저 입력값 검증 성공"),
};

export const ERROR_MESSAGE = {
    DEV_ONLY_NUMBER_STRING: "유저 입력 값에 1~9 사이가 아닌 값이 입력되었음",
};
