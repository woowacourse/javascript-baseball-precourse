/* Calculate srike ball */
export function calculateDuplicatedNum(Number1, Number2) {
  const a = String(Number1).split('');
  const b = String(Number2).split('');
  const Intersection = a.filter(x => b.includes(x));
  return Intersection.length;
}

export function calStrike(Number1, Number2) {
  const a = String(Number1).split('');
  const b = String(Number2).split('');
  let count = 0;
  for (let i = 0; i < 3; i++) {
    if (a[i] === b[i]) {
      count++;
    }
  }
  return count;
}

export function calBall(Number1, Number2) {
  return calculateDuplicatedNum(Number1, Number2) - calStrike(Number1, Number2);
}
