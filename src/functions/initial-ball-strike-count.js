import { state } from '../state.js';

export default function initialBallStrikeCount() {
  state.ballCount = 0;
  state.strikeCount = 0;
}
