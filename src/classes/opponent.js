import { NUMBER_CANDIDATES, NUMBERS_LENGTH } from '../constants/configuration.js'

export default class Opponent {
  getRandomNumbers() {
    const numberCandidates = NUMBER_CANDIDATES.split(' ');
    let generatedNumbers = '';
    for (let i=0; i < NUMBERS_LENGTH; i++) {
      let randomNumberIndex = Math.random() * numberCandidates.length;
      randomNumberIndex = Math.floor(randomNumberIndex);
      generatedNumbers += numberCandidates[randomNumberIndex];
      numberCandidates.splice(randomNumberIndex, 1);
    }
    
    return generatedNumbers;
  }
}