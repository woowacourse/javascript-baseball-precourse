import getStrikeCount from './getStrikeCount.js';

function getBallCount(origin, compared) {
  const count = Array.from(origin).filter((ch) => compared.includes(ch)).length;
  return count - getStrikeCount(origin, compared);
}

export default getBallCount;
