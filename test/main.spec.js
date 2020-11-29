/*
play;
getstrikeCount;
getBallCount;
createPlayResult;
isValidInput;
*/

import BaseballGame from '../src/index.js';
import UserInput from '../src/components/user-input.js';
import {
  BALL_MESSAGE,
  NOTHING_MESSAGE,
  STRIKE_MESSAGE,
  VICTORY_MESSAGE,
} from '../src/library/constants/playResult.js';

const userInputDescribe = () => {
  const $userInput = document.createElement('input');
  const userNumber = { subscribe() {} };
  const userInput = new UserInput($userInput, { userNumber });
  describe('isValidInput()', () => {
    test('숫자 이외의 문자일 때 false ', () => {
      expect(userInput.isValidInput('n23')).toBe(false);
      expect(userInput.isValidInput('23n')).toBe(false);
      expect(userInput.isValidInput('2-0')).toBe(false);
    });

    test('세 자리 양의 정수가 아닐 때 false', () => {
      expect(userInput.isValidInput('1234')).toBe(false);
      expect(userInput.isValidInput('-234')).toBe(false);
      expect(userInput.isValidInput('34')).toBe(false);
      expect(userInput.isValidInput('0')).toBe(false);
    });

    test('중복 되는 수가 있을 때 false', () => {
      expect(userInput.isValidInput('122')).toBe(false);
      expect(userInput.isValidInput('313')).toBe(false);
      expect(userInput.isValidInput('111')).toBe(false);
      expect(userInput.isValidInput('133')).toBe(false);
    });
  });
};

const baseballGameDescribe = () => {
  let baseballGame;

  beforeEach(() => {
    baseballGame = new BaseballGame();
  });

  describe('play()', () => {
    test(`정답일 때 ${VICTORY_MESSAGE}`, () => {
      expect(baseballGame.play(123, 123)).toEqual(VICTORY_MESSAGE);
    });

    test(`Strike만 있을 때 n${STRIKE_MESSAGE}`, () => {
      expect(baseballGame.play(123, 193)).toEqual(`2${STRIKE_MESSAGE}`);
    });

    test(`Ball만 있을 때 n${BALL_MESSAGE}`, () => {
      expect(baseballGame.play(123, 214)).toEqual(`2${BALL_MESSAGE}`);
    });

    test(`Strike, Ball 같이 있을 때 n${BALL_MESSAGE} n${STRIKE_MESSAGE}`, () => {
      expect(baseballGame.play(123, 132)).toEqual(
        `2${BALL_MESSAGE} 1${STRIKE_MESSAGE}`,
      );
    });

    test(`nothing일 때 ${NOTHING_MESSAGE}`, () => {
      expect(baseballGame.play(123, 456)).toEqual(NOTHING_MESSAGE);
    });
  });

  describe('getStrikeCount() ', () => {
    test('정답일 때  3', () => {
      expect(baseballGame.getStrikeCount([1, 2, 3], [1, 2, 3])).toBe(3);
    });

    test('2스트라이크일 때  2', () => {
      expect(baseballGame.getStrikeCount([1, 2, 3], [1, 2, 4])).toBe(2);
    });

    test('1스트라이크일 때  1', () => {
      expect(baseballGame.getStrikeCount([1, 2, 3], [1, 9, 4])).toBe(1);
    });

    test('0 스트라이크일 때  0', () => {
      expect(baseballGame.getStrikeCount([1, 2, 3], [7, 9, 4])).toBe(0);
    });
  });

  describe('getBallCount()', () => {
    test('3볼일 때  3', () => {
      expect(baseballGame.getBallCount([1, 2, 3], [3, 1, 2])).toBe(3);
    });

    test('2볼일 때  2', () => {
      expect(baseballGame.getBallCount([1, 2, 3], [2, 4, 1])).toBe(2);
    });

    test('1볼일 때  1', () => {
      expect(baseballGame.getBallCount([1, 2, 3], [5, 1, 4])).toBe(1);
    });

    test('0볼일 때  0', () => {
      expect(baseballGame.getBallCount([1, 2, 3], [7, 9, 4])).toBe(0);
    });
  });

  describe('createPlayResult()', () => {
    test(`정답일 때 ${VICTORY_MESSAGE}`, () => {
      expect(baseballGame.createPlayResult(3, 0)).toEqual(VICTORY_MESSAGE);
    });

    test(`Strike만 있을 때 n${STRIKE_MESSAGE}`, () => {
      expect(baseballGame.createPlayResult(2, 0)).toEqual(`2${STRIKE_MESSAGE}`);
    });

    test(`Ball만 있을 때 n${BALL_MESSAGE}`, () => {
      expect(baseballGame.createPlayResult(0, 2)).toEqual(`2${BALL_MESSAGE}`);
    });

    test(`Strike, Ball 같이 있을 때 n${BALL_MESSAGE} n${STRIKE_MESSAGE}`, () => {
      expect(baseballGame.createPlayResult(1, 2)).toEqual(
        `2${BALL_MESSAGE} 1${STRIKE_MESSAGE}`,
      );
    });

    test(`nothing일 때 ${NOTHING_MESSAGE}`, () => {
      expect(baseballGame.createPlayResult(0, 0)).toEqual(NOTHING_MESSAGE);
    });
  });
};

describe('UserInput 클래스', () => userInputDescribe());
describe('BaseballGame 클래스', () => baseballGameDescribe());
