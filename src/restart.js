import { $restart } from './constants.js';

//Radom Number Setting
export function createAnswer() {
  const answer = [];
  
  while(answer.length !== 3) {
    const random = MissionUtils.Random.pickNumberInRange(1, 9);

    if(!answer.includes(random)) {
      answer.push(random);
    }
  }

  return answer;
}

//Show Restart Button
export function setButton() {
  $restart.style.display = "display";
}

//Hide Restart Button
export function clearButton() {
  $restart.style.display = "none";
}