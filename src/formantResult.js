export default function formatResult(ball, strike) {
  // no match
  if (!ball && !strike) return "낫싱";
  // both ball and strike
  else if (ball && strike) return `${ball}볼 ${strike}스트라이크`;
  // only ball
  else if (ball) return `${ball}볼`;
  // only strike
  else return `${strike}스트라이크`;
}
