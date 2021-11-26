import getStrikeCount from './getStrikeCount.js';

function getBallCount(origin, target) {
  const count = Array.from(origin).filter((ch) => target.includes(ch)).length;
  return count - getStrikeCount(origin, target);
}

export default getBallCount;
