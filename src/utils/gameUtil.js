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
