import { state } from '../state.js';

export default function initBallStrikeCount() {
  state.ballCount = 0;
  state.strikeCount = 0;
}

export function initUserComputerInput(){
  state.userInput=0;
  state.computerInput=0;
}