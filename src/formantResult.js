const formatResult = function formatResultToString(ball, strike) {
  // no match
  if (ball === 0 && strike === 0) return "낫싱";
  // both ball and strike
  else if (ball !== 0 && strike !== 0) return `${ball}볼 ${strike}스트라이크`;
  // only ball
  else if (ball !== 0) return `${ball}볼`;
  // only strike
  else return `${strike}스트라이크`;
};

export default formatResult;
