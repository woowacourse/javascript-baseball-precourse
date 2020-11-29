import { expect, jest, test } from '@jest/globals';
import BaseballGame from '../src/index.js';

jest.spyOn(document, "querySelector").mockReturnValue(document.documentElement);

describe('유저의 입력값이 서로 다른 3개의 숫자로 이루어져있는지 검증', () => {
    const baseballGame = new BaseballGame();

    test('유저의 입력값은 3개의 문자로 구성되어 있어야 한다.', () => {
        expect(baseballGame.isValid('abce')).toBe(false);
        expect(baseballGame.isValid('2456')).toBe(false);
        expect(baseballGame.isValid('57')).toBe(false);
        expect(baseballGame.isValid('9')).toBe(false);
    });

    test('유저의 입력값의 각 문자는 숫자로 구성되어 있어야 한다.', () => {
        expect(baseballGame.isValid('0x3')).toBe(false);
        expect(baseballGame.isValid('0 3')).toBe(false);
    });

    test('유저의 입력값의 각 숫자는 중복되지 않아야 한다.', () => { 
        expect(baseballGame.isValid('244')).toBe(false);
        expect(baseballGame.isValid('777')).toBe(false);
    });
    
    test('유저의 입력값의 각 숫자는 0을 포함하지 않는다.', () => { 
        expect(baseballGame.isValid('709')).toBe(false);
    });

    test('유저의 입력값의 각 숫자는 1부터 9까지 서로 다른 수로 이루어져있다.', () => {
        expect(baseballGame.isValid('123')).toBe(true);
        expect(baseballGame.isValid('397')).toBe(true);
    });
});

describe('서로 다른 수로 이루어진 3자리의 수(이하 "정답")를 랜덤으로 생성하는 함수가 생성한 정답은', () => {
    const baseballGame = new BaseballGame();
    const TEST_CASES = 1000;
    test('서로 다른 3개의 숫자로 이루어져있다. ', ()=> {
        for (let i = 0; i < TEST_CASES; i++) {
            const answer = baseballGame.generateAnswer();
        
            expect(baseballGame.isValid(answer.toString())).toBe(true);
        };
    });
});


describe('컴퓨터의 랜답값과 유저의 입력값을 비교한다.', () => {
    const baseballGame = new BaseballGame();

    test('같은 수가 같은 자리에 있으면 `스트라이크`, 다른 자리에 있으면 `볼`이다.', () => {
        expect(baseballGame.play(123, 345)).toBe('1볼');
        expect(baseballGame.play(123, 432)).toBe('2볼');
        expect(baseballGame.play(123, 312)).toBe('3볼');
        expect(baseballGame.play(123, 145)).toBe('1스트라이크');
        expect(baseballGame.play(123, 124)).toBe('2스트라이크');
    });
    
    test('스트라이크와 볼이 같이 있는 경우 볼을 먼저쓰고, 스트라이크를 쓴다.', () => {
        expect(baseballGame.play(123, 134)).toBe('1볼 1스트라이크');
        expect(baseballGame.play(123, 132)).toBe('2볼 1스트라이크');
    });

    test('같은 수가 전혀 없으면 `낫싱`이다.', () => {
        expect(baseballGame.play(123, 456)).toBe('낫싱');
    });

    test('컴퓨터의 랜덤값가 유저의 입력값이 정확히 일치하면 3스트라이크를 반환한다', () => {
        expect(baseballGame.play(123, 123)).toBe('3스트라이크');
    });
});