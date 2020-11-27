export const calculateCount = (target, inputs) => {
  const strike = target.filter((num, i) => num === inputs[i]).length;
  const ball = target
    .filter((num, i) => num !== inputs[i])
    .filter((num) => inputs.includes(num)).length;

  return {
    strike,
    ball,
  };
};

export const getHint = ({ strike, ball }) => {
  let result = '';
  const ballCnt = ball ? `${ball}볼` : '';
  const strikeCnt = strike ? `${strike}스트라이크` : '';

  result = ballCnt + ' ' + strikeCnt;
  result = result.trim();

  return result ? result : '낫씽';
};
