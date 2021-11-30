const isThreeDigits = (input) => input.length === 3;

const isNumber = (input) => {
  const inputArray = input.split("");

  return !inputArray.some((number) => number < "1" || number > "9");
};

const isUnique = (input) => input.length === new Set(input).size;

const validateInput = (input) =>
  isThreeDigits(input) && isNumber(input) && isUnique(input);

export default validateInput;
