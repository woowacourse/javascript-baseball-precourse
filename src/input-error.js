class InputError extends Error {
  constructor(message, cause) {
    super(message);
    this.name = this.constructor.name;
    this.cause = cause;
  }
}

class InvalidInputError extends InputError { }

class RangeError extends InvalidInputError {
  constructor() {
    super('1~9 사이의 숫자를 입력해주세요');
  }
}

class LengthError extends InvalidInputError {
  constructor() {
    super(`3자리 숫자를 입력해주세요`);
  }
}

class DuplicationError extends InvalidInputError {
  constructor() {
    super('숫자가 중복되지 않게 입력해주세요');
  }
}

export {InputError, RangeError, LengthError, DuplicationError};
