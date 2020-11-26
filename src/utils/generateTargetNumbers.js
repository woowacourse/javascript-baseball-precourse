const generateNumber = () => {
  return Math.floor(Math.random() * 9) + 1;
};

export const generateTargetNumbers = () => {
  const result = new Set();

  while (result.size !== 3) {
    result.add(generateNumber());
  }

  return [...result];
};
