import {
  NUMBERS_LENGTH,
  ALL_MATCH_TEXT,
  NO_MATCH_TEXT,
} from '../constants/configuration.js';

import BaseballGame from '../classes/baseballGame.js';
import Opponent from '../classes/opponent.js';

/* Test getRandomNumbers function of Opponent Object */

const opponent = new Opponent();

try {
  const opponentRandomNumbers = opponent.getRandomNumbers();
  if (opponentRandomNumbers.length !== NUMBERS_LENGTH) {
    throw new Error(
      `numbers length not matched ${opponentRandomNumbers.length} vs ${NUMBERS_LENGTH}`
    );
  }
  if (opponentRandomNumbers.length !== new Set(opponentRandomNumbers).size) {
    throw new Error(`there is Redundancy in numbers ${opponentRandomNumbers}`);
  }
  console.log('no error in getRandomNumbers');
} catch (error) {
  console.log('error in getRandomNumbers : ', error);
}

/* Test play function of BaseballGame Object */

// make the test sets according to NUMBERS_LENGTH

const baseballGame = new BaseballGame();

const opponentNumbers = ['123', '123', '123', '342', '542'];
const userInputNumbers = ['1234', '103', '456', '321', '542'];
const expectedResult = [
  '',
  '',
  NO_MATCH_TEXT,
  '1볼 1스트라이크',
  ALL_MATCH_TEXT,
];

try {
  for (let i = 0; i < expectedResult.length; i++) {
    const result = baseballGame.play(opponentNumbers[i], userInputNumbers[i]);
    if (result !== expectedResult[i]) {
      throw new Error(`problem has been found at ${i} index`);
    }
  }
  console.log('no error in play');
} catch (error) {
  console.log('error in getRandomNumbers : ', error);
}