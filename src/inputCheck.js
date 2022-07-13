export const checkSign = (data) => Number(data);

export const checkLength = (data) => data.length === 3;

export const checkOverlap = (dataArr) => {
  const num1 = dataArr[0];
  const num2 = dataArr[1];
  const num3 = dataArr[2];
  return !(num1 === num2 || num1 === num3 || num2 === num3);
};

export const checkZero = (dataArr) => !(dataArr.includes('0'));
