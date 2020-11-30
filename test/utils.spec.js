/*
hasDuplicateCharacter;
*/

import hasDuplicateCharacter from '../src/library/utils/check.js';

describe('hasDuplicateCharacter()', () => {
  test('문자열에 중복되는 캐릭터가 있을 때 true', () => {
    expect(hasDuplicateCharacter('112')).toBe(true);
    expect(hasDuplicateCharacter('하하하하')).toBe(true);
    expect(hasDuplicateCharacter('aba')).toBe(true);
  });

  test('문자열에 중복되는 캐릭터가 없으면 false', () => {
    expect(hasDuplicateCharacter('123')).toBe(false);
    expect(hasDuplicateCharacter('하햐허혀')).toBe(false);
    expect(hasDuplicateCharacter('abc')).toBe(false);
  });
});
