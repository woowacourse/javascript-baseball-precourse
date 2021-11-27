import { BALL, FINISH, NOTHING, PLAIN_TEXT, STRIKE } from "./lib/constants.js";
class BaseballGameLogic {
  static getKey(com, char, position) {
    const idx = com.indexOf(char);

    if (idx === -1) {
      return NOTHING;
    }

    if (idx === position) {
      return STRIKE;
    }

    if (idx !== position) {
      return BALL;
    }
  }

  static convertResultToString(result) {
    if (result[STRIKE] === 3) {
      return FINISH;
    }
    if (result[STRIKE] === 0 && result[BALL] === 0) {
      return NOTHING;
    }

    let template = PLAIN_TEXT;

    template += `${
      result[STRIKE] === 0 ? PLAIN_TEXT : `${result[STRIKE]} ${STRIKE}`
    }`;

    template += `${
      result[BALL] === 0 ? PLAIN_TEXT : `${result[BALL]} ${BALL}`
    }`;

    return template;
  }
  static getResult(com, user) {
    const result = {
      [`${STRIKE}`]: 0,
      [`${BALL}`]: 0,
      [`${NOTHING}`]: 0,
    };
    for (let i = 0; i < com.length; i++) {
      const KEY = BaseballGameLogic.getKey(com, user[i], i);
      result[KEY]++;
    }
    return BaseballGameLogic.convertResultToString(result);
  }
}
/**test */
console.log(BaseballGameLogic.getResult("123", "123"));
console.log(BaseballGameLogic.getResult("123", "124"));
