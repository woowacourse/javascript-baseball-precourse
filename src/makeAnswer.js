const getRandomNumber = () => {
  const min = 1;
  const max = 10;

  return Math.floor(Math.random() * (max - min)) + min;
};

export const makeAnswer = () => {
  const answer = new Set();
  while ([...answer].length < 3) {
    answer.add(getRandomNumber());
  }
  return [...answer];
};
