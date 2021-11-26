export const RESULT_CODE = {
    ERROR_USERINPUT_LENGTH: Symbol("유저 입력 값이 세글자가 아님"),
    ERROR_USERINPUT_UNIQUE_WORD: Symbol("유저 입력 값에 중복 단어가 있음"),
    ERROR_USERINPUT_NUMBER_RANGE: Symbol("유저 입력 값은 1~9사이의 숫자만 입력할 수 있음"),

    DONE_USERINPUT_VALID: Symbol("유저 입력값 검증 성공"),
};

export const ERROR_MESSAGE = {
    DEV_ONLY_NUMBER_STRING: "유저 입력 값에 1~9 사이가 아닌 값이 전달되었음",
};

export const RESULT_TEXT = {
    GAME_HINT_NOTHING: "낫싱",
    GAME_HINT_BALL: "볼",
    GAME_HINT_STRIKE: "스트라이크",

    GAME_OVER_HEADER: "🎉정답을 맞추셨습니다!🎉",
    GAME_OVER_CONTENT: "게임을 새로 시작하시겠습니까? ",
    GAME_OVER_BUTTON: "재시작",
};

export const ALERT_MESSAGE = {
    ERROR_USERINPUT_LENGTH: "3글자로 입력하여주세요.\n(1~9 숫자, 중복 없는 수 3자리)",
    ERROR_USERINPUT_NUMBER_RANGE: "1에서 9 사이의 숫자만 입력할 수 있습니다.\n(1~9 숫자, 중복 없는 수 3자리)",
    ERROR_USERINPUT_UNIQUE_WORD: "중복된 숫자가 있습니다.\n(1~9 숫자, 중복 없는 수 3자리)",
};
