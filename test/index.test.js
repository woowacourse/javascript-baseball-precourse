import { expect } from '@jest/globals';
import BaseballGame from '../src/index.js';

describe('유저의 입력값이 서로 다른 3개의 숫자로 이루어져있는지 검증', () => {
    const baseballGame = new BaseballGame();

    // test('유저의 입력값은 문자열 타입이여야 한다.', () => {        
    //     expect(baseballGame.isValid()).toBe(false);
    //     expect(baseballGame.isValid(true)).toBe(false);
    //     expect(baseballGame.isValid({})).toBe(false);
    //     expect(baseballGame.isValid({dummy: 354})).toBe(false);
    //     expect(baseballGame.isValid([])).toBe(false);
    //     expect(baseballGame.isValid(['24'])).toBe(false);
    //     expect(baseballGame.isValid('')).toBe(false);
    //     expect(baseballGame.isValid(undefined)).toBe(false);
    //     expect(baseballGame.isValid(null)).toBe(false);
    // });


    // test('유저의 입력값은 1개만 주어져야 한다.', () => {
    //     expect(baseballGame.isValid(1,2,3)).toBe(false);
    //     expect(baseballGame.isValid('1','af','xd')).toBe(false);
    // });

    test('유저의 입력값은 3개의 문자로 구성되어 있어야 한다.', () => {
        expect(baseballGame.isValid('abce')).toBe(false);
        expect(baseballGame.isValid('2456')).toBe(false);
        expect(baseballGame.isValid('57')).toBe(false);
        expect(baseballGame.isValid('9')).toBe(false);
    });

    test('유저의 입력값의 각 문자는 숫자로 구성되어 있어야 한다.', ()=> {
        expect(baseballGame.isValid('0x3')).toBe(false);
        expect(baseballGame.isValid('0 3')).toBe(false);
        }
    );

    test('유저의 입력값의 각 숫자는 중복되지 않아야 한다.', ()=> { 
        expect(baseballGame.isValid('244')).toBe(false);
        expect(baseballGame.isValid('777')).toBe(false);
    });
    
    test('유저의 입력값의 각 숫자는 0을 포함하지 않는다.', ()=> { 
        expect(baseballGame.isValid('709')).toBe(false);
    });

    test('유저의 입력값의 각 숫자는 1부터 9까지 서로 다른 수로 이루어져있다.', () => {
        expect(baseballGame.isValid('123')).toBe(true);
        expect(baseballGame.isValid('397')).toBe(true);
    });
});

describe('서로 다른 수로 이루어진 3자리의 수(이하 "정답")를 랜덤으로 생성하는 함수가 생성한 정답은', () => {
    const baseballGame = new BaseballGame();
    const answer = baseballGame.generateAnswer();

    test('서로 다른 3개의 숫자로 이루어져있다. ', ()=> {
        expect(baseballGame.isValid(answer)).toBe(true);
    })
});
