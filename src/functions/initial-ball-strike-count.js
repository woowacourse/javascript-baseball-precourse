import { state } from '../state.js';

export default function initBallStrikeCount() {
  state.ballCount = 0;
  state.strikeCount = 0;
}
